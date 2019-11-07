'use strict';
const LoginPage = require('../../pages/litecart-login-page');
const HomePage = require('../../pages/litecart-home-page');

describe('Login Page Tests', function () {
  const loginPage = new LoginPage();
  const homePage = new HomePage();

  it('Login with wrong credentials', function () {
    loginPage.todoLogin('demo1', 'demo1');
    const notices = loginPage.notices;
    browser.wait(ExpectedConditions.visibilityOf(notices), 5000);
    expect(notices.isPresent()).toBeTruthy();
  });

  it('Login with correct credentials', function () {
    loginPage.todoLogin('demo', 'demo');
    const logotype = homePage.logotype;
    browser.wait(ExpectedConditions.visibilityOf(logotype), 5000);
    expect(logotype.isPresent()).toBeTruthy();
  })

});
