const arr = [1, 23, 2, 10, 6, 7, 11];

const oddIndicesSum = (acc, currentElem, idx) => idx % 2 !== 0 ? acc + currentElem: acc;
const res = arr.reduce(oddIndicesSum, 0);
console.log(res);