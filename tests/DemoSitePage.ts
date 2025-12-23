import { Page } from '@playwright/test';

export class DemoSitePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }
}