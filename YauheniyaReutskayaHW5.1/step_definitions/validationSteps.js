'use strict';

const chai = require('chai');
const chaiAsPromise = require("chai-as-promised");
chai.use(chaiAsPromise);
const expect = chai.expect;
const world = require('../po/world');
const utils = require("./utils/utils");
const EC = protractor.ExpectedConditions;
let { Then, When, Given } = require('cucumber');
const DEFAULT_STEP_TIMEOUT = 60 * 1000;
const parser = require('./utils/poParser');
let MemoryObject = require('./memory/memory');

Given('I should be on {element} page', async (pageName) => {
    browser.ignoreSynchronization = true;
    return expect(await browser.getCurrentUrl()).to.match(new RegExp(world[`${pageName}Url`]));
});

Then('{isCollection} {element} should {negate}be {state}', async (isCollection, alias, negate, validation) => {
    const element = parser.parser(alias);
    const CUSTOM_TIMEOUT = 15 * 1000;

    if (isCollection === true) {
        await element.each(async elem => {
            return expect(await browser.wait(utils.ECHelper(elem, validation, negate), CUSTOM_TIMEOUT, `Collection ${alias} is${negate ? "" : " not"} ${validation}`));
        });
    } else {
        return expect(await browser.wait(utils.ECHelper(element, validation, negate), CUSTOM_TIMEOUT, `Element ${alias} is${negate ? "" : " not"} ${validation}`));
    }
});


Then('Count of {element} elements should be equal {constant}', async (elements, count) => {
    const arraysSize = await parser.parser(elements).count();

    return expect(arraysSize, `${elements} size (${arraysSize}) is different then given count (${count})`).to.be.equal(parseInt(count));
});


Then('{detail} list {cssText} contains values:', async (_, elements, expected) => {
    console.log("!!!!!");
    console.log(_,elements,expected);
    expected = expected.raw();
    const actual = elements.map(element => [element]);

    return expect(actual).to.deep.equal(expected);
});