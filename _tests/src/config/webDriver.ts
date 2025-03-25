import { Browser, Builder } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome';

import { testWebsiteUrl } from '../utils/browserTest';
import env from './env';

const options = new Options();

if (env.NODE_ENV === 'prod') options.addArguments('--headless');
const webDriver = new Builder().forBrowser(Browser.CHROME).setChromeOptions(options).build();

testWebsiteUrl();

export default webDriver;
