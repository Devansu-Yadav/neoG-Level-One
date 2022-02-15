const arr = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"]

// Your output should be: 
// Violet-Indigo-Blue-Green-Yellow-Orange-Red
const convertToStr = (acc, elem) => acc.length === 0 ? acc + elem :acc + "-" + elem;
const res = arr.reduce(convertToStr, "");
console.log(res);

// Simpler Soln
console.log(arr.join("-"));

// Q5.1
const inputStr = "violet";
const output = inputStr.split("").join("-");
console.log(output);