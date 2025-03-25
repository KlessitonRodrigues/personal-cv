const NODE_ENV = process.env.NODE_ENV as 'dev' | 'build' | 'prod';

let CURRENT_URL = '';
if (NODE_ENV === 'dev') CURRENT_URL = 'http://localhost:5173/';
if (NODE_ENV === 'build') CURRENT_URL = 'http://localhost:4173/';
if (NODE_ENV === 'prod') CURRENT_URL = 'https://djc7924qzcvck.cloudfront.net/';

const env = {
  CURRENT_URL,
  NODE_ENV,
};

export default env;
