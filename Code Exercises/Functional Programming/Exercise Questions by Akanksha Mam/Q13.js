const inputStr = "243456878023";

const splitArr = inputStr.split("");
console.log(splitArr);

const res = splitArr.reduce((acc, elem, idx) => splitArr[idx - 1] % 2 === 0 && elem % 2 === 0 ? acc + "-" + elem: acc + elem);
console.log(res);