import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import loginData from '../test-data/login.json';

test.describe('Login Tests', () => {

  // TC1 Positive login
  test('TC1 Valid Login', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login('standard_user', 'secret_sauce');
    await login.verifySuccess();
  });

  // TC2 Negative invalid password
  test('TC2 Invalid Password', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login('standard_user', 'wrong');
    await login.verifyError();
  });

  // TC3 Negative invalid username
  test('TC3 Invalid Username', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login('wrong', 'secret_sauce');
    await login.verifyError();
  });

  // TC4 Validation empty username
  test('TC4 Empty Username', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login('', 'secret_sauce');
    await login.verifyError();
  });

  // TC5 Validation empty password
  test('TC5 Empty Password', async ({ page }) => {
    const login = new LoginPage(page);
    await login.navigate();
    await login.login('standard_user', '');
    await login.verifyError();
  });

  // TC6 Data driven
  loginData.forEach((data, index) => {
    test(`TC6 Data Driven ${index}`, async ({ page }) => {
      const login = new LoginPage(page);
      await login.navigate();
      await login.login(data.username, data.password);

      if (data.expected === 'success') {
        await login.verifySuccess();
      } else {
        await login.verifyError();
      }
    });
  });

});