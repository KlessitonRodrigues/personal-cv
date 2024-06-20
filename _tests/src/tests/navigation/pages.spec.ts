import { By } from 'selenium-webdriver';

import { environment } from '../../config/env';
import webDriver from '../../config/webDriver';
import { scrollPage } from '../../utils/browserTest';

describe('When on desktop screen', () => {
  test('Should scroll pages and use navigation bar', async () => {
    const browser = await webDriver;
    try {
      await browser.get(environment.WEBSITEURL);
      await browser.sleep(500);
      await browser.executeScript(scrollPage(10000));
      await browser.sleep(500);
      await browser.executeScript(scrollPage(0));
      await browser.sleep(500);
      await browser.findElement(By.css('a[href="/resume"]')).click();
      await browser.sleep(500);
      await browser.executeScript(scrollPage(10000));
      await browser.sleep(500);
      await browser.executeScript(scrollPage(0));
      await browser.sleep(500);
    } finally {
      await browser.close();
    }
  });
});
