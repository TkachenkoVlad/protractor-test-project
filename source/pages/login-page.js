'use strict';
let LoginPage = function () {
};

LoginPage.prototype = Object.create({}, {
    userName: {
        get: () => element(by.name('username'))

    },
    password: {
        get: () => element(by.name('password'))
    },
    submitButton: {
        get: () => element(by.buttonText('Login'))

    },
    notices: {
        get: () => element(by.id('notices'))
    }
});

module.exports = LoginPage;