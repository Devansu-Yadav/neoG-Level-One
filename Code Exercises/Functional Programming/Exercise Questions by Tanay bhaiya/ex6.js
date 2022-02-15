const arr = [1, 23, 2, 10, 6, 7, 11];

const oddEvenSum = (acc, currentElem) => currentElem % 2 == 0 ? {...acc, oddSum: acc.oddSum + currentElem}: {...acc, evenSum: acc.evenSum + currentElem};
const res = arr.reduce(oddEvenSum, {oddSum: 0, evenSum: 0});
console.log(res);