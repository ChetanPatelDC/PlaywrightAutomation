import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage';
import { DemoSitePage } from './DemoSitePage';
import testData from './testData.json';

testData.forEach(({ url, expectedTitle }) => {
  test(`Validate Demo Site title for ${url}`, async ({ page }) => {
    const homePage = new HomePage(page);
    const demoSitePage = new DemoSitePage(page);

    // Step 1: Navigate to the URL
    await homePage.navigateTo(url);

    // Step 2: Click on Demo Site
    await homePage.clickDemoSite();

    // Step 3: Validate the title of the Demo Site webpage
    const title = await demoSitePage.getTitle();
    expect(title).toBe(expectedTitle);
  });
});