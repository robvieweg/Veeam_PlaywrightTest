import { test, expect } from '@playwright/test';
import { LandingPageWeb } from '../pages/Web/landingPageWeb';
import { ForumPage } from '../pages/Forum/forumLandingPage';
import { ForumRegistration } from '../pages/Forum/forumRegistrationPage';

test.beforeEach(async ({ browser, page }) => {
      const landingPageWeb = new LandingPageWeb(page);
      await page.goto(landingPageWeb.landingPageLink, {
            waitUntil: 'load',
      });
});

test('Test - invalid e-mail domain registration - R&D Forums', async ({ browser, page }) => {
      const landingPageWeb = new LandingPageWeb(page);
      await landingPageWeb.openSupportLink();
      await landingPageWeb.openRdForums();
      
      const forumPage = new ForumPage(page)
      await forumPage.checkForumUrl();
      await forumPage.registerUser();
      
      const forumRegistration = new ForumRegistration(page);
      await forumRegistration.agreeRegistrationTerms();
      await forumRegistration.fillRegistrationDetails();
      await forumRegistration.submitRegistration();
      await forumRegistration.checkPublicEmailDomainError();
});