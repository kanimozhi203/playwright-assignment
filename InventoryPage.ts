import { Page, expect } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  // TC7 - PRODUCT LIST CHECK
  async verifyProductsVisible() {
    const products = this.page.locator('.inventory_item');

    await expect(products.first()).toBeVisible({ timeout: 15000 });
    // WHY: avoids full list dependency, checks first element only
  }

  // TC8 - ADD ITEM 
  async addFirstItem() {
    const button = this.page.locator('[data-test^="add-to-cart"]').first();

    await expect(button).toBeVisible({ timeout: 15000 });
    // WHY: ensures DOM fully loaded

    await button.click();
    // WHY: Playwright auto-waits → no manual sleep needed
  }

  // TC9 - ADD MULTIPLE ITEMS 
  async addMultipleItems() {
    const buttons = this.page.locator('[data-test^="add-to-cart"]');

    await expect(buttons.first()).toBeVisible({ timeout: 15000 });
    // WHY: ensures at least 1 product exists

    const count = await buttons.count();

    for (let i = 0; i < Math.min(2, count); i++) {
      await buttons.nth(i).click();
      // WHY: nth avoids stale element issues
    }
  }

  // CART NAVIGATION (FIXED ROOT CAUSE FOR TC13 FAILS)
  async goToCart() {
    const cart = this.page.locator('.shopping_cart_link');

    await expect(cart).toBeVisible({ timeout: 15000 });
    // WHY: ensures header fully loaded

    await cart.click();

    await this.page.waitForURL('**/cart.html');
    // WHY: THIS FIXES TC13 FAIL → ensures navigation completed
  }

  // LOGOUT
  async logout() {
    await this.page.click('#react-burger-menu-btn');

    const logoutBtn = this.page.locator('#logout_sidebar_link');

    await expect(logoutBtn).toBeVisible({ timeout: 15000 });

    await logoutBtn.click();

    await expect(this.page).toHaveURL('https://www.saucedemo.com/');
    // WHY: ensures session reset
  }
}