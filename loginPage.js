const config = require('./config');

class LoginPage {
    constructor(page) {
      this.page = page;
    }
  
    async navigate() {
      await this.page.goto(config.BASE_URL);
    }
  
    async login(username, password) {
      await this.page.type(config.USERNAME_SELECTOR, username);
      await this.page.type(config.PASSWORD_SELECTOR, password);
      await this.page.click(config.LOGIN_BUTTON_SELECTOR);
    }
  
    async getErrorMessage() {
      const element = await this.page.$(config.ERROR_MESSAGE_SELECTOR);
      return element ? await element.innerText() : null;
    }

    async getTitleMessage() {
        const element = await this.page.$(config.TITLE_SELECTOR);
        return element ? await element.innerText() : null;
      }
  }
  
  module.exports = LoginPage;
