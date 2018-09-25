const isPalindrom = (checkingString) => {
    let invertString = "";
    for (let i = checkingString.length - 1; i >= 0; i--) {
        invertString += checkingString[i];
    }

    if (checkingString === invertString) {
        console.log("The \"", checkingString, "\" is Palindrom")
    }
    else {
        console.log("The \"", checkingString, "\" is Not Palindrom")
    }
};
module.exports = isPalindrom;
