const arr = [1, 2, 3, 58, 5, 6, 62, 8, 70];

// Your output should be: 190
const elemsGreaterThanFiftySum = (acc, currentElem) => currentElem > 50 ? acc + currentElem: acc;
const res = arr.reduce(elemsGreaterThanFiftySum, 0);
console.log(res);