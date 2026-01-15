# AI Coding Guidelines for Playwright Automation Project

## Project Overview
This is a Playwright-based test automation project using the Page Object Model pattern. Tests validate web application functionality across multiple browsers (Chromium, Firefox, WebKit).

## Architecture Patterns
- **Page Objects**: Encapsulate page interactions in classes under `tests/pages/` (e.g., `HomePage.ts`) and root `tests/` (e.g., `DemoSitePage.ts`)
- **Test Data**: External JSON files in `tests/` directory (e.g., `testData.json`) for parameterized testing
- **Test Structure**: Data-driven tests using `forEach` loops over JSON data arrays

## Key Conventions
- **Locators**: Prefer `page.getByRole()` for accessibility-based element selection (e.g., `getByRole('link', { name: 'Demo Site' })`)
- **Navigation**: Use dedicated `navigateTo(url)` methods in page objects instead of direct `page.goto()`
- **Assertions**: Use Playwright's `expect()` with descriptive matchers like `toBe()`
- **Imports**: ES modules with relative paths (e.g., `import { HomePage } from './pages/HomePage'`)

## Configuration
- **Headless Mode**: Disabled (`headless: false`) for visible browser execution during development
- **Parallel Execution**: Enabled (`fullyParallel: true`) for faster test runs
- **Tracing**: Automatic trace collection on first retry for debugging failed tests
- **Multi-Browser**: Tests run across Chromium, Firefox, and WebKit projects

## Developer Workflows
- **Run Tests**: `npx playwright test` (runs all tests in parallel across browsers)
- **Run Specific Test**: `npx playwright test tests/demoSiteValidation.spec.ts`
- **Debug Tests**: `npx playwright test --debug` (opens browser with Playwright Inspector)
- **View Reports**: `npx playwright show-report` (opens HTML report in browser)
- **Codegen**: `npx playwright codegen <url>` (generates test code interactively)

## Dependencies
- **@playwright/test**: Core testing framework
- **@playwright/mcp**: Model Context Protocol integration for AI-assisted testing
- **@types/node**: TypeScript definitions

## File Organization
- `tests/`: Test files and page objects
- `tests/pages/`: Dedicated page object classes
- `playwright.config.ts`: Test configuration and browser projects
- `testData.json`: Test data for parameterized tests

## Example Patterns
```typescript
// Page Object Method
async clickDemoSite() {
  await this.page.getByRole('link', { name: 'Demo Site' }).first().click();
}

// Data-Driven Test
testdata.forEach(({ url, expectedTitle }) => {
  test(`Validate title for ${url}`, async ({ page }) => {
    // test implementation
  });
});
```