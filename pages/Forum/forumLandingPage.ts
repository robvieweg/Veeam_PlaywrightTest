import { expect, type Locator, type Page } from '@playwright/test';

export class ForumPage {
      readonly page: Page;
      readonly forumLink: string;
      readonly registerButton: string;

      constructor(page: Page) {
            this.page = page;
            this.forumLink = "https://forums.veeam.com/?ad=menu-support";
            this.registerButton = "//a[@role='menuitem']/span[text()='Register']";
      }

      async checkForumUrl() {
            const currentUrl = this.page.url();
            expect(currentUrl).toContain(this.forumLink);
      }

      async registerUser() {
            const registerButton = this.page.locator(this.registerButton)
            await registerButton.click()
      }
}