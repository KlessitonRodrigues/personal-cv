import { Browser, Builder } from 'selenium-webdriver';

const webDriver = new Builder().forBrowser(Browser.CHROME).build();

export default webDriver;
