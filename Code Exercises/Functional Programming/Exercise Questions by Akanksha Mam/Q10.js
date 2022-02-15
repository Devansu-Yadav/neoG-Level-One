const arr = [1, 2, 3, 7, 5, 6, 8, 9];

// Your output should be: 96

const productOfEvenElems = (acc, currentElem) => currentElem % 2 == 0 ? acc * currentElem: acc;
const res = arr.reduce(productOfEvenElems, 1);
console.log(res);