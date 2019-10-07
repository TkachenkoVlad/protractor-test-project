'use strict';
let LoginPage = require('../../pages/login-page');


describe('Login Page Tests', function () {
    let loginPage;

    beforeAll(function () {
        try {
            loginPage = new LoginPage();
            browser.waitForAngularEnabled(false);
            browser.ignoreSynchronization = true;
            browser.get('http://demo.litecart.net/admin/');
            browser.driver.manage().window().maximize();
        } catch (e) {
            console.log(e);
        }
    });

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


    it('Click Login', async function () {
        loginPage.submitButton.click();
        expect(browser.wait(ExpectedConditions.visibilityOf(loginPage.notices), 5000));
        expect(loginPage.notices.isDisplayed());
        let alertText = await loginPage.notices.getText();
        console.log(alertText);
        expect(alertText.trim()).toContain('The user could not be found in our database')

    });

    afterEach(function () {

    })
});

