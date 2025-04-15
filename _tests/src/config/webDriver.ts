import { Browser, Builder } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome';

import { testWebsiteUrl } from '../utils/browserTest';
import env from './env';

const initWebdriver = () => {
  testWebsiteUrl();

  const options = new Options();
  if (env.NODE_ENV === 'prod') options.addArguments('--headless');

  const browser = new Builder();
  browser.forBrowser(Browser.CHROME);
  browser.setChromeOptions(options);
  return browser.build();
};

const webDriver = initWebdriver();
export default webDriver;
