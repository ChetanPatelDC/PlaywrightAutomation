import { Page } from '@playwright/test';

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async clickDemoSite() {
    await this.page.getByRole('link', { name: 'Demo Site' }).first().click();
  }
}