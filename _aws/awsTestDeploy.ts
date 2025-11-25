import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import { Construct } from 'constructs';

export class MyAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // VPC
    const vpc = new ec2.Vpc(this, 'ProfileTestVpc', { maxAzs: 2 });

    // ECS Cluster
    const cluster = new ecs.Cluster(this, 'ProfileTestCluster', { vpc });

    // Fargate Service using a Dockerfile
    new ecs.FargateService(this, 'ProfileTestService', {
      cluster,
      taskDefinition: new ecs.FargateTaskDefinition(this, 'Task', {
        cpu: 256,
        memoryLimitMiB: 512,
      }),
      desiredCount: 1,
    }).taskDefinition.addContainer('AppContainer', {
      image: ecs.ContainerImage.fromAsset('../_test'), // auto builds Dockerfile
      portMappings: [{ containerPort: 80 }],
    });
  }
}
