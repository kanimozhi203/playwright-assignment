import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Navigation Tests', () => {

  test('TC17 Direct URL without login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');
    await expect(page).toHaveURL(/saucedemo/);
  });

  test('TC18 Back Navigation', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await page.goBack();
  });

  test('TC19 Refresh Page', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await page.reload();
  });

  test('TC20 Session Check', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login('standard_user', 'secret_sauce');
    await page.reload();
    await expect(page).toHaveURL(/inventory/);
  });

});