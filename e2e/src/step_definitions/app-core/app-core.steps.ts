import { browser } from 'protractor';

const { Given, When, Then, Before } = require('cucumber');
const { expect, assert } = require('chai');

import {AppCorePage} from '../../pages/modules/app-core/app-core.po';

// https://www.npmjs.com/package/chai-as-promised

let page: AppCorePage;

Before(() => {
  page = new AppCorePage();
});

Given(/^I am on the home page$/, async () => {
  return page.navigateTo();
});

Then(/^I should see the correct page title$/, async () => {
  assert.strictEqual(await page.getHomeNavItem().getText(), 'Home');
  // assert.lengthOf(page.getNavListItems(), 6, 'The nav list items number is wrong');
  return expect(await browser.getTitle()).to.equal(page.browserTitle);
});

// There is currently a bug with the elementArrayFinder's getText() type
// it should return a string[] instead of string
// Given(/^I should see the names$/, async () => {
//   await expect((await page.getNameListTemp().getText())[0]).to.equal('tesName11');
//   return expect((await page.getNameListTemp().getText())[1]).to.equal('tesName12');
// });
//
// When(/^I click on the next button$/, async () => {
//   return (await page.getNamedayModuleButtonWithTitle('next')).click();
// });
//
// Then(/^I should see the new names$/, async () => {
//   return expect((await page.getNameListTemp().getText())[0]).to.equal('tesName2');
// });

// Then(/^I should see the title: \'(.*?)\'$/, async (title: string) => {
//   return expect(await page.getNamedayText()).to.equal(title);
// });
//
// Then(/^I should see the NameDayModule displayed$/, async () => {
//   return expect(await page.getNamedayModule().isPresent()).to.equal(true);
// });
