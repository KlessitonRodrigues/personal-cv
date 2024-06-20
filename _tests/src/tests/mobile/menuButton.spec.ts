import { By } from 'selenium-webdriver';

import { environment } from '../../config/env';
import webDriver from '../../config/webDriver';
import { scrollPage } from '../../utils/browserTest';

describe('When on mobile screen', () => {
  test('Should scroll pages and use mobile navigation bar', async () => {
    const browser = await webDriver;
    try {
      await browser.get(environment.WEBSITEURL);
      await browser.manage().window().setRect({ width: 450, height: 1080 });
      await browser.executeScript(scrollPage(10000));
      await browser.sleep(500);
      await browser.executeScript(scrollPage(0));
      await browser.sleep(500);
      await browser.findElement(By.css('.icon-menu')).click();
      await browser.sleep(500);
      await browser.findElement(By.css('a[href="/resume"]')).click();
      await browser.sleep(500);
      await browser.findElement(By.css('.icon-close')).click();
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
