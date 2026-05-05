import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {} // reuse browser instance

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/');
    // opens application
  }

  async login(username: string, password: string) {
    await this.page.fill('#user-name', username); // enter username
    await this.page.fill('#password', password); // enter password
    await this.page.click('#login-button'); // click login
  }

  async verifySuccess() {
    await expect(this.page).toHaveURL(/inventory/); 
    // assertion: success login redirects
  }

  async verifyError() {
    await expect(this.page.locator('[data-test="error"]')).toBeVisible();
    // assertion: error message visible
  }
}