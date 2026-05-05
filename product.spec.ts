import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test.describe('Product Tests', () => {

  test('TC7 Product Visible', async ({ page }) => {
    const login = new LoginPage(page);
    const inv = new InventoryPage(page);

    await login.navigate();
    await login.login('standard_user', 'secret_sauce');
    await inv.verifyProductsVisible();
  });

  test('TC8 Add Item', async ({ page }) => {
    const login = new LoginPage(page);
    const inv = new InventoryPage(page);

    await login.navigate();
    await login.login('standard_user', 'secret_sauce');
    await inv.addFirstItem();
  });

  test('TC9 Add Multiple', async ({ page }) => {
    const login = new LoginPage(page);
    const inv = new InventoryPage(page);

    await login.navigate();
    await login.login('standard_user', 'secret_sauce');
    await inv.addMultipleItems();
  });

  test('TC10 Navigate Cart', async ({ page }) => {
    const login = new LoginPage(page);
    const inv = new InventoryPage(page);

    await login.navigate();
    await login.login('standard_user', 'secret_sauce');
    await inv.goToCart();
  });

  test('TC11 Logout', async ({ page }) => {
    const login = new LoginPage(page);
    const inv = new InventoryPage(page);

    await login.navigate();
    await login.login('standard_user', 'secret_sauce');
    await inv.logout();
  });

  test('TC12 Product Validation', async ({ page }) => {
    const login = new LoginPage(page);
    const inv = new InventoryPage(page);

    await login.navigate();
    await login.login('standard_user', 'secret_sauce');
    await inv.verifyProductsVisible();
  });

});