import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../env/login.env') });

const BASE_URL = process.env.BASE_URL || 'https://practicetestautomation.com/practice-test-login/';
const USERNAME = process.env.USERNAME || 'student';
const PASSWORD = process.env.PASSWORD || 'Password123';

test.describe('Login Test Suite', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate(BASE_URL);
  });

  test('should login successfully with valid credentials', async ({ page }) => {
    // Perform login
    await loginPage.login(USERNAME, PASSWORD);

    // Verify login was successful
    const isSuccessful = await loginPage.isLoginSuccessful();
    expect(isSuccessful).toBe(true);

    // Additional verification - check page contains success text
    await expect(page.locator('text=Congratulations')).toBeVisible();
  });

  test('should display error with invalid username', async () => {
    // Try to login with invalid username
    await loginPage.login('invaliduser', PASSWORD);

    // Get error message
    const errorMsg = await loginPage.getErrorMessage();
    expect(errorMsg).toBeTruthy();
  });

  test('should display error with invalid password', async () => {
    // Try to login with invalid password
    await loginPage.login(USERNAME, 'wrongpassword');

    // Get error message
    const errorMsg = await loginPage.getErrorMessage();
    expect(errorMsg).toBeTruthy();
  });

  test('should display error with empty credentials', async () => {
    // Try to login without entering credentials
    await loginPage.clickSubmit();

    // Check for error or validation message
    const errorMsg = await loginPage.getErrorMessage();
    expect(errorMsg || false).toBeTruthy();
  });
});
