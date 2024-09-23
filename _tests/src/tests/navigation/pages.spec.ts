import { By } from 'selenium-webdriver';

import environment from '../../config/env';
import webDriver from '../../config/webDriver';
import { mobileScreen, scrollPage } from '../../utils/browserTest';

describe('When on home page', () => {
  test('Should scroll pages and use navigation bar', async () => {
    const browser = await webDriver;
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
  });

  test('Should scroll pages and use mobile navigation bar', async () => {
    const browser = await webDriver;
    await browser.get(environment.WEBSITEURL);
    await browser.manage().window().setRect(mobileScreen);
    await browser.executeScript(scrollPage(10000));
    await browser.sleep(500);
    await browser.executeScript(scrollPage(0));
    await browser.sleep(500);
    await browser.findElement(By.css('.icon-menu')).click();
    await browser.sleep(500);
    await browser.findElement(By.css('a[href="/resume"]')).click();
    await browser.sleep(500);
    await browser.executeScript(scrollPage(10000));
    await browser.sleep(500);
    await browser.executeScript(scrollPage(0));
    await browser.sleep(500);
  });

  afterAll(async () => {
    const browser = await webDriver;
    await browser.close();
  });
});
