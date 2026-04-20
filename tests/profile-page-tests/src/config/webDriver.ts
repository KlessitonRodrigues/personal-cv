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
  
  // Use remote Selenium server if SELENIUM_URL is set (Docker environment)
  const seleniumUrl = process.env.SELENIUM_URL;
  if (seleniumUrl) {
    browser.usingServer(seleniumUrl);
  }
  
  return browser.build();
};

const webDriver = initWebdriver();
export default webDriver;
