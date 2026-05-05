import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  // TC13 / TC11 - VERIFY CART ITEM (FIXED)
  async verifyCartItem() {
    const cartItem = this.page.locator('.cart_item');

    await expect(cartItem.first()).toBeVisible({ timeout: 15000 });
    // WHY: ensures at least 1 item is fully rendered before assertion
  }

  // TC14 - REMOVE ITEM 
  async removeItem() {
    const removeBtn = this.page.locator('button[data-test^="remove"]');

    await expect(removeBtn.first()).toBeVisible({ timeout: 15000 });
    // WHY: cart page UI takes time to render in SauceDemo

    await removeBtn.first().click();
    // WHY: first() avoids multiple element ambiguity
  }

  // CONTINUE SHOPPING 
  async continueShopping() {
    const btn = this.page.locator('#continue-shopping');

    await expect(btn).toBeVisible({ timeout: 15000 });
    // WHY: ensures navigation animation is complete

    await btn.click();

    await expect(this.page).toHaveURL(/inventory/);
    // WHY: validation ensures correct navigation back
  }
}