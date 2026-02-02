import { Given, When, Then, After } from "@cucumber/cucumber";
import { Browser, Page, chromium, expect } from "@playwright/test";

let browser: Browser;
let page: Page;

Given('a web browser is at the SauceLabs login page', async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  await page.goto('https://www.saucedemo.com/');
});

When('the user enters the username {string}', async function (username: string) {
  await page.fill('input[data-test="username"]', username);
});

When('the user enters the password {string}', async function (password: string) {
  await page.fill('input[data-test="password"]', password);
});

When('clicks on the login button', async function () {
  await page.click('input[data-test="login-button"]');
});

Then('the URL should contain the inventory subdirectory', async function () {
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

After(async function () {
  if (browser) await browser.close();
});
