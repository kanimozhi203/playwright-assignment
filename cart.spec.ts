import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

test.describe('Cart Tests', () => {

  test('TC13 Verify Cart Item', async ({ page }) => {
    const login = new LoginPage(page);
    const inv = new InventoryPage(page);
    const cart = new CartPage(page);

    await login.navigate();
    await login.login('standard_user', 'secret_sauce');
    await inv.addFirstItem();
    await inv.goToCart();
    await cart.verifyCartItem();
  });

  test('TC14 Remove Item', async ({ page }) => {
    const login = new LoginPage(page);
    const inv = new InventoryPage(page);
    const cart = new CartPage(page);

    await login.navigate();
    await login.login('standard_user', 'secret_sauce');
    await inv.addFirstItem();
    await inv.goToCart();
    await cart.removeItem();
  });

  test('TC15 Continue Shopping', async ({ page }) => {
    const login = new LoginPage(page);
    const inv = new InventoryPage(page);
    const cart = new CartPage(page);

    await login.navigate();
    await login.login('standard_user', 'secret_sauce');
    await inv.goToCart();
    await cart.continueShopping();
  });

  test('TC16 Cart Validation', async ({ page }) => {
    const login = new LoginPage(page);
    const inv = new InventoryPage(page);
    const cart = new CartPage(page);

    await login.navigate();
    await login.login('standard_user', 'secret_sauce');
    await inv.addFirstItem();
    await inv.goToCart();
    await cart.verifyCartItem();
  });

});