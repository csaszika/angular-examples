import { browser } from 'protractor';
import { promise as wdpromise } from 'selenium-webdriver';

export abstract class AbstractBasePo {
  abstract readonly pageUrl: string;
  navigateTo(): wdpromise.Promise<any> {
    return browser.get(this.pageUrl);
  }
}
