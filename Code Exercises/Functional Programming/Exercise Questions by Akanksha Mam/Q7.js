const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

// Your output should be: [2, 6, 8, 4]
const numbersLessThanEightAndEven = (acc, currentElem) => currentElem < 8 && currentElem % 2 == 0 ? [...acc, currentElem]: acc;
const res = arr.reduce(numbersLessThanEightAndEven, []);
console.log(res);