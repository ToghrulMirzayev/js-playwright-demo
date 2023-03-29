const { chromium } = require('playwright');
const LoginPage = require('./loginPage');
const login_data = require('./login.json');

describe('Login', () => {
  let browser;
  let page;
  let loginPage;

  beforeAll(async () => {
    browser = await chromium.launch({headless: false});
  });

  beforeEach(async () => {
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  afterEach(async () => {
    await page.close();
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should log in successfully', async () => {
    const { username, password } = login_data.successfulLogin;
    await loginPage.login(username, password);
    expect(await loginPage.getTitleMessage()).toBe('Products');
  });

  it('should show error message for incorrect password', async () => {
    const { username, password } = login_data.incorrectPassword;
    await loginPage.login(username, password);
    expect(await loginPage.getErrorMessage()).toBe('Epic sadface: Username and password do not match any user in this service');
  });

  it('should show error message for empty username', async () => {
    const { username, password } = login_data.emptyUsername;
    await loginPage.login(username, password);
    expect(await loginPage.getErrorMessage()).toBe('Epic sadface: Username is required');
  });

  it('should show error message for locked_out user', async () => {
    const { username, password } = login_data.lockedOutUser;
    await loginPage.login(username, password);
    expect(await loginPage.getErrorMessage()).toBe('Epic sadface: Sorry, this user has been locked out.');
  });
});
