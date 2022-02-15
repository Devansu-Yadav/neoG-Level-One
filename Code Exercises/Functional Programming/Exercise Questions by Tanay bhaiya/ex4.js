const arr = [1, 20, 62, 10, 6, 79, 60];

const divisibleByTen = no => no % 10 == 0;
const res = arr.filter(divisibleByTen);
console.log(res);