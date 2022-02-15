const arr = [1, 23, 2, 10, 6, 7, 11];

const oddNoSum = (acc, currentElem) => currentElem % 2 !== 0 ? acc + currentElem: acc;
const res = arr.reduce(oddNoSum, 0);
console.log(res);