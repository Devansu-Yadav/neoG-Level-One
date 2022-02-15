const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

// Your output should be:
// [1, 3, 3, 59, 5, 7, 25, 9, 15, 5]

const res = arr.map(elem => elem % 2 == 0 ? elem + 1: elem);
console.log(res);
console.log(res === arr);