import { URLS } from '../contants/url';

const NODE_ENV = process.env.NODE_ENV as 'dev' | 'build' | 'prod';

let CURRENT_URL = '';
if (NODE_ENV === 'dev') CURRENT_URL = URLS.devUrl;
if (NODE_ENV === 'build') CURRENT_URL = URLS.previewUrl;
if (NODE_ENV === 'prod') CURRENT_URL = URLS.prodUrl;

const env = {
  CURRENT_URL,
  NODE_ENV,
  STEP_TIME: 500,
};

export default env;
