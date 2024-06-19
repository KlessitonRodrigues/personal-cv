import { By } from 'selenium-webdriver';

import { environment } from '../../config/env';
import webDriver from '../../config/webDriver';
import { scrollPage } from '../../utils/browserTest';

describe('When mobile screen', () => {
  test('Should scroll pages using mobile navigation bar', async () => {
    const browser = await webDriver;
    await browser.get(environment.WEBSITEURL);
    await browser.manage().window().setRect({ width: 450, height: 1080 });
    await browser.executeScript(scrollPage(10000));
    await browser.sleep(1000);
    await browser.executeScript(scrollPage(0));
    await browser.sleep(1000);
    await browser.findElement(By.css('.icon-menu')).click();
    await browser.sleep(100);
    await browser.findElement(By.css('a[href="/resume"]')).click();
    await browser.sleep(100);
    await browser.findElement(By.css('.icon-close')).click();
    await browser.sleep(1000);
    await browser.executeScript(scrollPage(10000));
    await browser.sleep(1000);
    await browser.executeScript(scrollPage(0));
    await browser.sleep(1000);
    await browser.close();
  });
});
