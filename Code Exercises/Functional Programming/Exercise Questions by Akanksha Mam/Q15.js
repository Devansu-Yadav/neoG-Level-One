const inputStr = "neoG";

const splitStr = inputStr.split("");
const capitalizeVowels = (acc, currentLetter) => currentLetter == "a" || currentLetter == "e" || currentLetter == "i" || currentLetter == "o" || currentLetter == "u" ? acc + currentLetter.toUpperCase(): acc + currentLetter.toLowerCase();
const res = splitStr.reduce(capitalizeVowels, "");
console.log(res);