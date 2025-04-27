import { expect, type Locator, type Page } from '@playwright/test';

export class ForumRegistration {
      readonly page: Page;
      readonly userName: string;
      readonly userPassword: string;
      readonly userEmail: string;
      readonly termsAgreeButton: string;
      readonly usernameInput: string;
      readonly userPasswordInput: string;
      readonly userConfirmPasswordInput: string;
      readonly userEmailInput: string;
      readonly submitButton: string;
      readonly publicEmailDomainError: string;

      constructor(page: Page) {
            this.page = page;
            this.userName = 'InterviewUser'
            this.userPassword = 'InreviewUser'
            this.userEmail = 'inreviewuser@gmail.com'
            this.termsAgreeButton = "//input[@id='agreed']"
            this.usernameInput = "//input[@id='username']"
            this.userPasswordInput = "//input[@id='new_password']"
            this.userConfirmPasswordInput = "//input[@id='password_confirm']"
            this.userEmailInput = "//input[@id='email']"
            this.submitButton = "//input[@id='submit']"
            this.publicEmailDomainError = "//dd[@class='error'][contains(., 'Public email are not allowed.')]"
      }

      async agreeRegistrationTerms() {
            while (await this.page.locator(this.termsAgreeButton).isVisible()) {
                  await this.page.locator(this.termsAgreeButton).click();
            }
      }

      async fillUsername() {
            await this.page.locator(this.usernameInput).fill(this.userName)
      }

      async fillPassword() {
            await this.page.locator(this.userPasswordInput).fill(this.userPassword)
      }

      async fillConfirmPassword() {
            await this.page.locator(this.userConfirmPasswordInput).fill(this.userPassword)
      }

      async fillEmail() {
            await this.page.locator(this.userEmailInput).fill(this.userEmail)
      }

      async fillRegistrationDetails() {
            await this.fillUsername()
            await this.fillPassword()
            await this.fillConfirmPassword()
            await this.fillEmail()
      }

      async submitRegistration() {
            await this.page.locator(this.submitButton).click()
      }

      async checkPublicEmailDomainError() {
            await this.page.locator(this.publicEmailDomainError).isVisible()
      }
}