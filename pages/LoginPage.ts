import { Page } from '@playwright/test';

export class LoginPage {
  private page: Page;

  // Locators
  private usernameInput = '#username';
  private passwordInput = '#password';
  private submitButton = '#submit';
  private errorMessage = '#error';
  private successMessage = '.post-title';

  constructor(page: Page) {
    this.page = page;
  }

  // Navigate to login page
  async navigate(url: string) {
    await this.page.goto(url);
  }

  // Enter username
  async enterUsername(username: string) {
    await this.page.fill(this.usernameInput, username);
  }

  // Enter password
  async enterPassword(password: string) {
    await this.page.fill(this.passwordInput, password);
  }

  // Click submit button
  async clickSubmit() {
    await this.page.click(this.submitButton);
  }

  // Perform login
  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickSubmit();
  }

  // Get error message text
  async getErrorMessage(): Promise<string | null> {
    const errorElement = await this.page.$(this.errorMessage);
    if (errorElement) {
      return await errorElement.textContent();
    }
    return null;
  }

  // Check if login successful (by checking for success message)
  async isLoginSuccessful(): Promise<boolean> {
    try {
      await this.page.waitForSelector(this.successMessage, { timeout: 5000 });
      return true;
    } catch {
      return false;
    }
  }

  // Get page title
  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }
}
