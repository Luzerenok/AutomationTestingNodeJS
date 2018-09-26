const isJsonCorrect = (filePath) => {
    let fs = require('fs');
    let jsonString = fs.readFileSync(filePath, 'utf8');
    console.log("Read JSON from ",filePath);
    let jsonObject = JSON.parse(jsonString);
    const isFlag = jsonObject.flag;
    const myPromises = jsonObject.myPromises;
    const element = jsonObject.element;
    const screenshot = jsonObject.screenshot;
    const elementText = jsonObject.elementText;
    const allElementsText = jsonObject.allElementsText;
    const counter = jsonObject.counter;
    const config = jsonObject.config;
    const constKey = jsonObject.const;
    const parameters = jsonObject.parameters;
    const description = jsonObject.description;

    let newJsonString = "";

    if (typeof(isFlag) !== 'boolean') {
        newJsonString += "\"flag\" property is not boolean\n";
    }
    if (!Array.isArray(myPromises)) {
        newJsonString += "\"myPromises\" property is not array\n";
    }
    if (typeof(element) !== 'object') {
        newJsonString += "\"element\" property is not object\n";
    }
    if (screenshot !== null) {
        newJsonString += "\"screenshot\" property is not null\n";
    }
    if (typeof(elementText) !== 'string') {
        newJsonString += "\"elementText\" property is not string\n";
    }
    if (typeof(allElementsText) !== 'string') {
        newJsonString += "\"allElementsText\" property is not string in total\n";
    }
    if (typeof(allElementsText) === 'string' && allElementsText.indexOf("const") === -1) {
        newJsonString += "\"allElementsText\" property does not contain \"const\" in string\n";
    }
    if (typeof(counter) !== 'number') {
        newJsonString += "\"counter\" property is not number in total\n";
    }
    if (typeof(counter) === 'number' && counter <= 10) {
        newJsonString += "\"counter\" property is less or equals 10\n";
    }
    if (config !== "Common") {
        newJsonString += "\"config\" property does not equal \"Common\"\n";
    }
    if (constKey !== "FiRst") {
        newJsonString += "\"constKey\" property does not equal \"FiRst\"\n";
    }
    if (!Array.isArray(parameters)) {
        newJsonString += "\"parameters\" property is not Array\n";
    }
    if (Array.isArray(parameters) && parameters.length !== 8) {
        newJsonString += "\"parameters\" array size does not equal 8\n";
    }
    if (typeof(description) !== 'string') {
        newJsonString += "\"description\" property is not string in total\n";
    }
    if (typeof(description) === 'string' && (description.length <= 5 || description.length >= 13)) {
        newJsonString += "\"description\" property length is <=5 or >=13\n";
    }
    if (newJsonString === "") {
        console.log("OK");
    }
    else {
        let newFilePath = filePath.split('.json') + '_error.json';
        fs.writeFile(newFilePath, newJsonString, 'utf8');
    }
};
module.exports = isJsonCorrect;