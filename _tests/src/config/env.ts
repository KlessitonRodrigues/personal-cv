const nodeEnv = process.env.NODE_ENV;

let WEBSITEURL = '';
if (nodeEnv === 'dev') WEBSITEURL = 'http://localhost:5173/';
if (nodeEnv === 'build') WEBSITEURL = 'http://localhost:4173/';
if (nodeEnv === 'prod') WEBSITEURL = 'https://djc7924qzcvck.cloudfront.net/';

const environment = {
  WEBSITEURL,
};

export default environment;
