'use strict';
let LitecartLoginPage = function () {
  browser.waitForAngularEnabled(false);
  browser.get('http://demo.litecart.net/admin/');
};

LitecartLoginPage.prototype = Object.create({}, {
  userName: {get: () => element(by.name('username'))},
  password: {get: () => element(by.name('password'))},
  submitButton: {get: () => element(by.buttonText('Login'))},
  notices: {get: () => element(by.id('notices'))}
});

module.exports = LitecartLoginPage;
