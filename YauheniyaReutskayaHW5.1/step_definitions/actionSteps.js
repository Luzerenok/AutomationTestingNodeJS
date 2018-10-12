'use strict';

const expect = require('chai').expect;
const world = require('../po/world');
const utils = require("./utils/utils");
const EC = protractor.ExpectedConditions;
let { Then, When, Given } = require('cucumber');
const DEFAULT_STEP_TIMEOUT = 60 * 1000;
const parser = require('./utils/poParser');
let MemoryObject = require('./memory/memory');


Then('I sleep {int} second(s)', (number) => {
    let seconds = parseFloat(number);
    return browser.sleep(Math.floor(seconds * 1000));
});

Then('I {toggle} protractor synchronization', (toggleArg) => {
    browser.ignoreSynchronization = toggleArg;
    return true;
});
