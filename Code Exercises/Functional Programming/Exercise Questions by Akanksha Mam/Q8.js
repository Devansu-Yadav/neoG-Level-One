const arr = ["eat", "sleep", "repeat", "code"];

// Your output should be: ['repeat']

const stringsMoreThanLengthFive = (acc, currentElem) => currentElem.length > 5 ? [...acc, currentElem]: acc;
const res = arr.reduce(stringsMoreThanLengthFive, []);
console.log(res);