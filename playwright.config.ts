import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  // HTML report
  reporter: [
    ['html', { open: 'always' }]
  ],

  use: {

    // ✅ SHOW BROWSER WHILE RUNNING TESTS
    headless: false,

    // slow down execution so you can SEE actions
    slowMo: 500,

    // trace helps debugging failed tests
    trace: 'on-first-retry',

    // screenshot on failure 
    screenshot: 'only-on-failure',

    // video recording 
    video: 'retain-on-failure',

    // base URL (optional)
    baseURL: 'https://www.saucedemo.com',
  },

  projects: [

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

  ],
});