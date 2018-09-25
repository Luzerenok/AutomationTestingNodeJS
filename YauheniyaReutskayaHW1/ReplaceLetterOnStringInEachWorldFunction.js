const replaceLetterOnStringInEachWorld = (sourceString, numberOfLetter, replacementString) => {
    let newString = "";

    let words = sourceString.split(" ");
    for (let i = 0; i < words.length; i++) {
        newString += words[i].replace(words[i][numberOfLetter - 1], replacementString);
        if (1 !== words.length || i !== words.length - 1) {
            newString += " ";
        }
    }
    return newString;
};
module.exports = replaceLetterOnStringInEachWorld;