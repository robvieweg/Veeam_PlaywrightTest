import { type Page } from '@playwright/test';

export class LandingPageWeb {
      readonly page: Page;
      readonly landingPageLink: string;
      readonly rdForumsLink: string;
      readonly supportLink: string;
      readonly solutionsLink: string;

      constructor(page: Page) {
            this.page = page;
            this.landingPageLink = "https://www.veeam.com/";
            this.rdForumsLink = "//a[@class='list-of-links__link'][text()='R&D Forums']";
            this.supportLink = "//button[contains(text(), 'Support') and contains(@class, 'main-navigation__item-title')]";
            this.solutionsLink = "//button[contains(text(), 'Solutions') and contains(@class, 'main-navigation__item-title')]";
      }

      async openSupportLink() {
            await this.page.locator(this.supportLink).hover();
      }

      async openRdForums() {
            await this.page.locator(this.rdForumsLink).isVisible();
            await this.page.locator(this.rdForumsLink).click();
      }
}