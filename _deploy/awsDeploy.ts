import * as cdk from 'aws-cdk-lib';
import * as cloudFront from 'aws-cdk-lib/aws-cloudfront';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3Deploy from 'aws-cdk-lib/aws-s3-deployment';

export class WebAppStack extends cdk.Stack {
  constructor(scope: cdk.App, props?: cdk.StackProps) {
    super(scope, 'ProfileWebsiteStack', props);

    const distBucket = new s3.Bucket(this, 'ProfileWebsite', {
      autoDeleteObjects: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    const distOrigin = new cloudFront.OriginAccessIdentity(this, 'ProfileWebsiteOrigin');
    distBucket.grantRead(distOrigin);

    const distribution = new cloudFront.CloudFrontWebDistribution(this, 'ProfileWebsiteDist', {
      defaultRootObject: 'index.html',
      errorConfigurations: [
        {
          errorCode: 404,
          responseCode: 200,
          responsePagePath: '/index.html',
        },
      ],
      originConfigs: [
        {
          s3OriginSource: {
            s3BucketSource: distBucket,
            originAccessIdentity: distOrigin,
          },
          behaviors: [
            {
              isDefaultBehavior: true,
              compress: true,
              forwardedValues: {
                queryString: true,
                cookies: { forward: 'all' },
              },
            },
          ],
        },
      ],
    });

    new s3Deploy.BucketDeployment(this, 'ProfileWebsiteBucket', {
      sources: [s3Deploy.Source.asset('../dist')],
      destinationBucket: distBucket,
      distribution,
    });
  }
}

const app = new cdk.App();
new WebAppStack(app);
