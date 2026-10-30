import * as cdk from 'aws-cdk-lib';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as cloudFront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as targets from 'aws-cdk-lib/aws-route53-targets';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3Deploy from 'aws-cdk-lib/aws-s3-deployment';
import * as path from 'path';

const profilePagePath = path.resolve(__dirname, '../../apps/vite-profile-page/dist');

export interface WebAppStackProps extends cdk.StackProps {
  isProduction?: boolean;
  domainName?: string;
  hostedZoneId?: string;
  hostedZoneName?: string;
}

export class WebAppStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props: WebAppStackProps = {}) {
    super(scope, id, props);

    const { isProduction = true, domainName, hostedZoneId, hostedZoneName } = props;

    if (domainName && !hostedZoneId) {
      throw new Error('hostedZoneId must be provided when domainName is set');
    }

    const distBucket = new s3.Bucket(this, 'ProfileWebsite', {
      autoDeleteObjects: !isProduction,
      removalPolicy: isProduction ? cdk.RemovalPolicy.RETAIN : cdk.RemovalPolicy.DESTROY,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      encryption: s3.BucketEncryption.S3_MANAGED,
      enforceSSL: true,
    });

    const cachePolicy = (id: string, ttl: cdk.Duration, enableCompression = true) =>
      new cloudFront.CachePolicy(this, id, {
        cookieBehavior: cloudFront.CacheCookieBehavior.none(),
        queryStringBehavior: cloudFront.CacheQueryStringBehavior.none(),
        headerBehavior: cloudFront.CacheHeaderBehavior.none(),
        enableAcceptEncodingBrotli: enableCompression,
        enableAcceptEncodingGzip: enableCompression,
        minTtl: ttl,
        defaultTtl: ttl,
        maxTtl: ttl,
      });

    const assetsCachePolicy = cachePolicy(
      'ProfileWebsiteAssetsCachePolicy',
      cdk.Duration.days(365),
    );
    const htmlCachePolicy = cachePolicy(
      'ProfileWebsiteHtmlCachePolicy',
      cdk.Duration.seconds(0),
      false,
    );

    const securityHeaders: cloudFront.ResponseSecurityHeadersBehavior = {
      contentSecurityPolicy: {
        contentSecurityPolicy: [
          "default-src 'self'",
          "base-uri 'self'",
          "object-src 'none'",
          "frame-ancestors 'self'",
          "form-action 'self'",
          "script-src 'self'",
          "style-src 'self' 'unsafe-inline'",
          "img-src 'self' data:",
          "font-src 'self' data:",
          "media-src 'self'",
          'frame-src https:',
          "connect-src 'self' https:",
          'upgrade-insecure-requests',
        ].join('; '),
        override: true,
      },
      contentTypeOptions: { override: true },
      frameOptions: {
        frameOption: cloudFront.HeadersFrameOption.SAMEORIGIN,
        override: true,
      },
      referrerPolicy: {
        referrerPolicy: cloudFront.HeadersReferrerPolicy.STRICT_ORIGIN_WHEN_CROSS_ORIGIN,
        override: true,
      },
      strictTransportSecurity: {
        accessControlMaxAge: cdk.Duration.days(730),
        includeSubdomains: true,
        preload: true,
        override: true,
      },
      xssProtection: { protection: true, modeBlock: true, override: true },
    };

    const responseHeadersPolicy = (id: string, cacheControl: string) =>
      new cloudFront.ResponseHeadersPolicy(this, id, {
        securityHeadersBehavior: securityHeaders,
        customHeadersBehavior: {
          customHeaders: [{ header: 'Cache-Control', value: cacheControl, override: true }],
        },
      });

    const htmlResponseHeadersPolicy = responseHeadersPolicy(
      'ProfileWebsiteHtmlResponseHeaders',
      'no-cache',
    );
    const assetsResponseHeadersPolicy = responseHeadersPolicy(
      'ProfileWebsiteAssetsResponseHeaders',
      'public, max-age=31536000, immutable',
    );

    const hostedZone =
      domainName && hostedZoneId
        ? route53.HostedZone.fromHostedZoneAttributes(this, 'HostedZone', {
            hostedZoneId,
            zoneName: (hostedZoneName ?? domainName.split('.').slice(1).join('.')).replace(
              /\.$/,
              '',
            ),
          })
        : undefined;

    const certificate =
      domainName && hostedZone
        ? new acm.Certificate(this, 'ProfileWebsiteCertificate', {
            domainName,
            validation: acm.CertificateValidation.fromDns(hostedZone),
          })
        : undefined;

    const origin = origins.S3BucketOrigin.withOriginAccessControl(distBucket);

    const distribution = new cloudFront.Distribution(this, 'ProfileWebsiteDist', {
      defaultRootObject: 'index.html',
      domainNames: domainName && certificate ? [domainName] : undefined,
      certificate,
      minimumProtocolVersion: cloudFront.SecurityPolicyProtocol.TLS_V1_2_2021,
      errorResponses: [
        { httpStatus: 403, responseHttpStatus: 200, responsePagePath: '/index.html' },
        { httpStatus: 404, responseHttpStatus: 200, responsePagePath: '/index.html' },
      ],
      defaultBehavior: {
        origin,
        viewerProtocolPolicy: cloudFront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachePolicy: htmlCachePolicy,
        responseHeadersPolicy: htmlResponseHeadersPolicy,
        compress: false,
      },
      additionalBehaviors: {
        '/assets/*': {
          origin,
          viewerProtocolPolicy: cloudFront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
          cachePolicy: assetsCachePolicy,
          responseHeadersPolicy: assetsResponseHeadersPolicy,
          compress: true,
        },
      },
    });

    if (domainName && hostedZone) {
      const recordName = domainName.endsWith(`.${hostedZone.zoneName}`)
        ? domainName.slice(0, -(hostedZone.zoneName.length + 1))
        : domainName;

      new route53.ARecord(this, 'ProfileWebsiteAliasRecord', {
        zone: hostedZone,
        recordName,
        target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(distribution)),
      });

      new route53.AaaaRecord(this, 'ProfileWebsiteAliasRecordIpv6', {
        zone: hostedZone,
        recordName,
        target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(distribution)),
      });
    }

    new s3Deploy.BucketDeployment(this, 'ProfileWebsiteBucket', {
      sources: [s3Deploy.Source.asset(profilePagePath)],
      destinationBucket: distBucket,
      distribution,
    });

    new cdk.CfnOutput(this, 'DistributionDomainName', {
      value: distribution.distributionDomainName,
    });

    if (domainName && hostedZone) {
      new cdk.CfnOutput(this, 'SiteUrl', {
        value: `https://${domainName}`,
      });
    }
  }
}

const app = new cdk.App();
const context = app.node.tryGetContext.bind(app.node);
const env = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};
const domainName = context('domainName') ?? process.env.DOMAIN_NAME;

if (domainName && env.region && env.region !== 'us-east-1') {
  throw new Error('Custom domains must be deployed to us-east-1 for the CloudFront certificate');
}

new WebAppStack(app, 'ProfileWebsiteStack', {
  env,
  isProduction: String(context('isProduction') ?? process.env.IS_PRODUCTION ?? 'true') !== 'false',
  domainName,
  hostedZoneId: context('hostedZoneId') ?? process.env.HOSTED_ZONE_ID,
  hostedZoneName: context('hostedZoneName') ?? process.env.HOSTED_ZONE_NAME,
});
