const input = ["apple", "mango", "orange", "papaya"];

const countStringsOfSimilarLength = (acc, currentStr) => acc[currentStr.length] ? {...acc, [currentStr.length]: acc[currentStr.length] + 1}: {...acc, [currentStr.length]: 1};

// Ex 7.1
const similarLengthStrings = input.reduce(countStringsOfSimilarLength, {});
console.log(similarLengthStrings);

// Ex 7.2
const stringsWithVowels = inputStr => inputStr.includes('a') || inputStr.includes('e') || inputStr.includes('i') || inputStr.includes('o') || inputStr.includes('u');
const stringsArrWithVowels = input.filter(stringsWithVowels);
console.log(stringsArrWithVowels);

// Ex 7.3
const countStringsLength = (acc, currentItem) => ({...acc, [currentItem]: currentItem.length});
const itemsLength = input.reduce(countStringsLength, {});
console.log(itemsLength);