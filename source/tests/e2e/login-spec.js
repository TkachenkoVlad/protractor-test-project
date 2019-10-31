'use strict';
const LoginPage = require('../../pages/litecart-login-page');

describe('Login Page Tests', function () {
  const loginPage = new LoginPage();

  it('Wait loading page', function () {
    browser.wait(ExpectedConditions.visibilityOf(loginPage.submitButton), 5000);
    expect(loginPage.submitButton.isDisplayed());
    //this.pending().catch((err) => console.log(err));
  });

  it('Set wrong login', () => {
    loginPage.userName.clear();
    loginPage.userName.sendKeys('demo111');
    expect((loginPage.userName.getAttribute('value'))).toEqual('demo111');
  });

  it('Set password', () => {
    loginPage.password.clear();
    loginPage.password.sendKeys('demo');
    expect((loginPage.password.getAttribute('value'))).toEqual('demo');
  });

  it('Click "Login" button(first time)', async function () {
    loginPage.submitButton.click();
    browser.wait(ExpectedConditions.visibilityOf(loginPage.notices), 5000);
    let alertText = await loginPage.notices.getText();
    console.log(alertText);
    expect(alertText.trim()).toContain('The user could not be found in our database')
  });

  it('Set correct login', () => {
    loginPage.userName.clear();
    loginPage.userName.sendKeys('demo');
    expect((loginPage.userName.getAttribute('value'))).toEqual('demo');
  });

  it('Set wrong password', () => {
    loginPage.password.clear();
    loginPage.password.sendKeys('1111');
    expect((loginPage.password.getAttribute('value'))).toEqual('1111');
  });

  it('Click "Login" button(second time)', async function () {
    loginPage.submitButton.click();
    browser.wait(ExpectedConditions.visibilityOf(loginPage.notices), 5000);
    let alertText = await loginPage.notices.getText();
    console.log(alertText);
    expect(alertText.trim()).toContain('The user could not be found in our database')
  });

  it('Click "Login" button(third time)', async function () {
    loginPage.submitButton.click();
    browser.wait(ExpectedConditions.visibilityOf(loginPage.notices), 5000);
    let alertText = await loginPage.notices.getText();
    console.log(alertText);
    expect(alertText.trim()).toContain("You have * login attempts left until your account is temporary blocked");
    expect(alertText.trim()).toContain('Wrong combination of username and password or the account does not exist.');
  });

});

/*
expect(browser.wait(ExpectedConditions.visibilityOf(loginPage.notices), 5000));
        expect(loginPage.notices.isDisplayed());
 */
