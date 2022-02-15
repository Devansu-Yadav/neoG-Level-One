const arr = [1, 20, 62, 10, 6, 79, 60];

const biggestNo = (acc, currentElem) => currentElem > acc ? currentElem: acc;
const res = arr.reduce(biggestNo, Number.MIN_SAFE_INTEGER);
console.log(res);