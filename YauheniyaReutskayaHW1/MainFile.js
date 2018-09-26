const isPalindrom = require("./PalindromeFunction.js");
const replaceLetterOnStringInEachWorld = require("./ReplaceLetterOnStringInEachWorldFunction.js");
const isJsonCorrect = require("./IsCorrectJsonFunction.js");

//Home Task 2
const nonPalindromString = "AMA AN";
isPalindrom(nonPalindromString);

const palindromString = "babana anabab";
isPalindrom(palindromString);

//Home Task 3
const sourceString = "Each men should know ";
console.log("New string is ", replaceLetterOnStringInEachWorld(sourceString, 2, "123"));
console.log("New string is ", replaceLetterOnStringInEachWorld(sourceString, 4, "aaaaa"));

const sourceStringOneWord = "BlackList";
console.log("New string is ", replaceLetterOnStringInEachWorld(sourceStringOneWord, 1, "Track1"));

const sourceStringSpecSymbols = "Black, White and    yellow - colors!!!";
console.log("New string is ", replaceLetterOnStringInEachWorld(sourceStringSpecSymbols, 2, "s!"));

//Home Task 4
isJsonCorrect("Task4/1.json");
isJsonCorrect("Task4/2.json");
isJsonCorrect("Task4/3.json");
isJsonCorrect("Task4/4.json");
