# serverless-talk

Repo for talk about Serverless Framework with Next.js and AWS app

## Serverless orchestration for Next.js application

Application manages creating assets for web applicaction in AWS. Creates build, uploads it into S3 service, serves resources through Cloudfront to provide high performance and create Lambda Edge functions for all `/api` routes that are generated in project.

## CloudFront Distribution for SSR Next.js and Edge Lambda

![Next.js architecture](./presentation-docs/architecture/Screenshot%202022-05-08%20at%2013.51.49.png)

## Built package stored in S3

![Next.js architecture](./presentation-docs/architecture/Screenshot%202022-05-08%20at%2013.51.44.png)

Whole architecture for application
![Next.js architecture](./presentation-docs/architecture/Screenshot%202022-05-08%20at%2013.51.29.png)
