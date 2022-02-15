const arr = [1, 23, 2, 10, 6, 7, 11];

const oddNoIncrementEvenDecrement = (acc, currentNo) => currentNo % 2 == 0 ? [...acc, currentNo - 1]: [...acc, currentNo + 1];
const res = arr.reduce(oddNoIncrementEvenDecrement, []);
console.log(res);