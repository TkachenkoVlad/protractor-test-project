'use strict';
let LoginPage = require('../../pages/login-page');

describe('Login Page Tests', function () {
    let loginPage;

    beforeAll(function () {
        loginPage = new LoginPage();
        browser.waitForAngularEnabled(false);
        browser.ignoreSynchronization = true;
        browser.get('http://demo.litecart.net/admin/');
        browser.driver.manage().window().maximize();
    });

    it('Wait loading page', () => {
        browser.wait(ExpectedConditions.visibilityOf(loginPage.submitButton), 5000);
        expect(loginPage.submitButton.isDisplayed())
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
    /*


    xit('Click Login', function () {
        loginPage.submitButton.click();
        expect(browser.wait(ExpectedConditions.visibilityOf(loginPage.notices), 5000));
        expect(loginPage.notices.isDisplayed());
        let mytext = loginPage.notices.getText()
            .then((text) => {
                console.log(text);
                mytext = text;
                return mytext
            })
            .catch((error) => console.log(error));
        console.log('My log: ', mytext);
        expect(mytext.trim()).toEqual('The user could not be found in our database');
    });
 */
    it('Click Login', async function () {
        loginPage.submitButton.click();
        expect(browser.wait(ExpectedConditions.visibilityOf(loginPage.notices), 5000));
        expect(loginPage.notices.isDisplayed());
       // console.log(await element.all(by.id('notices').get().count()));
      //  browser.sleep(5000);

        await loginPage.notices.child()

        //    let myText = await loginPage.notices.map(elementFinder => elementFinder.getText());
        //  console.log(myText);
        //  browser.sleep(100000);
        ///  expect(myText.trim()).toEqual('The user could not be found in our database');
    });


    xit('Set wrong login', () => {
        loginPage.userName.clear();
        loginPage.userName.sendKeys('demo111');
        expect((loginPage.userName.getAttribute('value'))).toEqual('demo111');
    });

    xit('Click Login', function () {
        loginPage.submitButton.click();
        expect(browser.wait(ExpectedConditions.visibilityOf(loginPage.notices), 5000));
        expect(loginPage.notices.isDisplayed());
        loginPage.notices.getText()
            .then((text) => console.log(text));
        browser.sleep(100000);
    });

    afterEach(function () {

    })
});

