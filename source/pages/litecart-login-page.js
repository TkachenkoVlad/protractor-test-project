'use strict';
let LitecartLoginPage = function () {
   browser.get('http://demo.litecart.net/admin/');
};

LitecartLoginPage.prototype = Object.create({}, {
  userName: {get: () => element(by.name('username'))},
  password: {get: () => element(by.name('password'))},
  submitButton: {get: () => element(by.buttonText('Login'))},
  notices: {get: () => element(by.id('notices'))},
  todoLogin: {
    value: function (username, password) {

      this.userName.clear();
      this.userName.sendKeys(username);
      this.password.clear();
      this.password.sendKeys(password);
      this.submitButton.click();
    }
  }

});

module.exports = LitecartLoginPage;
