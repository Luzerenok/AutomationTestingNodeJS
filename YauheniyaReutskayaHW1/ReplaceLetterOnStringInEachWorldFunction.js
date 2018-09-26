const replaceLetterOnStringInEachWorld = (sourceString, numberOfLetter, replacementString) => {
    let newString = "";

    let numberOfLetterInWord = 1;
    for (let i = 0; i < sourceString.length; i++) {
        if (numberOfLetterInWord === numberOfLetter && sourceString[i] !== " ") {
            newString += replacementString;
        }
        else {
            newString += sourceString[i];
        }
        numberOfLetterInWord++;
        if (sourceString[i] === " ") {
            numberOfLetterInWord = 1;
        }
    }
    return newString;
};
module.exports = replaceLetterOnStringInEachWorld;