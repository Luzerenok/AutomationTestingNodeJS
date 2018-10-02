const rewriteFromJsonIntoXlsx = (jsonPath, xlsxPath) => {
    let json2xls = require('json2xls');
    let fs = require('fs');

    let json2 = fs.readFileSync(jsonPath, 'utf8');
    console.log("Read JSON from ", jsonPath);
    let jsonObject = JSON.parse(json2);

    let updatedJsonObject = [];

    let processObject = function (source, result) {
        if (Array.isArray(source)) {
            for (let i = 0; i < source.length; i++) {
                processObject(source[i], result);
                if (typeof(source[i]) === 'object') {
                    result.push({key: "", value: ""});
                }
            }
        }
        else if (typeof(source) === 'object') {
            let keys = Object.keys(source);
            for (let i = 0; i < keys.length; i++) {
                let key = keys[i];
                let val = source[key];
                if (typeof(val) === 'object') {
                    result.push({key: key, value: ""});
                    result.push({key: "", value: ""});
                    processObject(val, result);
                }
                else {
                    result.push({key: key, value: val});
                }
            }
        }
        else {
            result.push({key: "", value: source});
        }
    };

    processObject(jsonObject, updatedJsonObject);

    let xls = json2xls(updatedJsonObject);
    fs.writeFileSync(xlsxPath, xls, 'binary');
};
module.exports = rewriteFromJsonIntoXlsx;