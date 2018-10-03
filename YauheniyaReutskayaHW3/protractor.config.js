'use strict';
const path = require("path");
const yargs = require("yargs").argv;

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // directConnect: true,  
    baseUrl: 'https://exadel.com/',
    // capabilities: {
    //     browserName: 'firefox',
    //     shardTestFiles: false,
    //     maxInstances: 2,
    //     // version: "66.0.3359.139"
    // },
    multiCapabilities: [{
        browserName: 'chrome',
       // version: "66.0.3359.139"
    }, {
        browserName: 'firefox'
    }],

    specs: [
        `jasmine_e2e/${yargs.spec || "*/*.js"}`
    ],
    // restartBrowserBetweenTests: true,
    onPrepare: function () {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().setSize(1920, 1080);
        console.log("Hello from onPrepare()!");
    },
    beforeLaunch: function () {
        console.log("Hello from beforeLaunch()!");
    },
    onComplete: function () {
        console.log("Hello from onComplete()!");
    },
    allScriptsTimeout: 200000,
    getPageTimeout: 100000,
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};