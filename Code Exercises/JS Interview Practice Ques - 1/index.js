const arrOfNumbers = [3, 6, 10, 8, 2, 5, 13, 15];

const arrOfNumbersLessThanEight = arrOfNumbers.reduce((arr, currNo) => currNo <= 8 ? [...arr, currNo]: [...arr], []);
console.log("Array of Nos <= 8 ", arrOfNumbersLessThanEight);

const arrOfWords = ["neoG", "is", "family", "love", "hackathon", "camping"];
const arrOfWordsWithCharsLessThanFive = arrOfWords.reduce((arr, currWord) => currWord.length <= 5 ? [...arr, currWord]: [...arr], []);
console.log("Array of Words of length <= 5 ", arrOfWordsWithCharsLessThanFive);

const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        eye_color: 'orange',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        eye_color: 'blue',
        gender: 'male',
    },
];

const arrOfMaleChars = characters.reduce((arr, currChar) => currChar.gender === "male" ? [...arr, currChar]: [...arr], []);
console.log("Array of Male chars ", arrOfMaleChars);

const arrOfHeightGreaterThan170 = characters.reduce((arr, currChar) => currChar.height > 170 ? [...arr, currChar]: [...arr], []);
console.log("Array of Chars with height > 170 ", arrOfHeightGreaterThan170);
