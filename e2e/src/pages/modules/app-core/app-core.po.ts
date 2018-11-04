import { by, element, ElementArrayFinder, ElementFinder } from 'protractor';
import { promise as wdpromise } from 'selenium-webdriver';

import { AbstractBasePo } from '../../base/abstract-base.po';

export class AppCorePage extends AbstractBasePo {
  readonly browserTitle = 'AngularExamples';
  readonly pageUrl: string = '/home';

  getHomeNavItem(): ElementFinder {
    return element(by.linkText('Home'));
  }

  getHomeNavItemText(): wdpromise.Promise<string> {
    return element(by.linkText('Home')).getText();
  }

  getNavListItems(): ElementArrayFinder {
    return element.all(by.css('mat-nav-list a'));
  }

  // async getNamedayModuleButtons(): Promise<ElementFinder[]> {
  //   return element(by.css('ib-nameday-nameday-today')).all(by.css('button'));
  // }
  //
  // async getNamedayModuleButtonWithTitle(title: string): Promise<ElementFinder> {
  //   return element(by.css('ib-nameday-nameday-today')).element(by.css(`button[title=${title}]`));
  // }
  //
  // async isLoaderVisible(): Promise<boolean> {
  //   return element(by.css('p[title=loader]')).isPresent();
  // }
  //
  // getNameListTemp(): ElementArrayFinder {
  //   return element.all(by.css('ib-nameday-nameday-today ul li'));
  // }
}
