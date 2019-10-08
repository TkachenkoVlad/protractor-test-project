const {SpecReporter} = require('jasmine-spec-reporter');
let HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
    allScriptsTimeout: 11000,
    specs: ['./tests/e2e/login-spec.js'],
    capabilities: {
        'browserName': 'chrome'
    },
    directConnect: true,
    baseUrl: 'http://localhost:4200/',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        print: function () {
        }
    },
    onPrepare: function () {

        browser.driver.manage().window().maximize();
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'tmp/screenshots'
        }).getJasmine2Reporter());

        let faiFast = require('jasmine-fail-fast');
        jasmine.getEnv().addReporter(faiFast.init());
        jasmine.getEnv().addReporter(
            new SpecReporter({
                suite: {
                    displayNumber: true,    // display each suite number (hierarchical)
                },
                spec: {
                    displayPending: true,   // display each pending spec
                    displayDuration: true,  // display each spec duration
                },
                summary: {
                    displaySuccesses: true, // display summary of all successes after execution
                    displayFailed: true,    // display summary of all failures after execution
                    displayPending: true,   // display summary of all pending specs after execution
                },
            }));
    }
};