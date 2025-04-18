import { By } from 'selenium-webdriver';

import env from '../../config/env';
import webDriver from '../../config/webDriver';
import { screenSize, scrollPage } from '../../utils/browserTest';

describe('When on home page', () => {
  test('Should scroll pages and use navigation bar', async () => {
    const browser = await webDriver;
    await browser.get(env.CURRENT_URL);
    await browser.manage().window().setRect(screenSize.desktop);
    await browser.sleep(3000);
    await browser.executeScript(scrollPage(10000));
    await browser.sleep(3000);
    await browser.executeScript(scrollPage(0));
    await browser.sleep(3000);
    await browser.findElement(By.css('aside')).click();
    await browser.sleep(3000);
    await browser.findElement(By.css('a[href="/resume"]')).click();
    await browser.sleep(3000);
    await browser.executeScript(scrollPage(10000));
    await browser.sleep(3000);
    await browser.executeScript(scrollPage(0));
    await browser.sleep(3000);
  });

  test('Should scroll pages and use mobile navigation bar', async () => {
    const browser = await webDriver;
    await browser.get(env.CURRENT_URL);
    await browser.manage().window().setRect(screenSize.mobile);
    await browser.sleep(3000);
    await browser.executeScript(scrollPage(10000));
    await browser.sleep(3000);
    await browser.executeScript(scrollPage(0));
    await browser.sleep(3000);
    await browser.findElement(By.css('.icon-menu')).click();
    await browser.sleep(3000);
    await browser.findElement(By.css('a[href="/resume"]')).click();
    await browser.sleep(3000);
    await browser.executeScript(scrollPage(10000));
    await browser.sleep(3000);
    await browser.executeScript(scrollPage(0));
    await browser.sleep(3000);
  });

  afterAll(async () => {
    const browser = await webDriver;
    await browser.close();
  });
});
