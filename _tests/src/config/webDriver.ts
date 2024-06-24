import { Browser, Builder } from 'selenium-webdriver';

import { testWebsiteUrl } from '../utils/browserTest';

const webDriver = new Builder().forBrowser(Browser.CHROME).build();

testWebsiteUrl();

export default webDriver;
