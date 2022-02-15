const arr = ["You", "all", "are", "rockstars"];

// Your output should be:
// {'0': "You", '1': "all", '2': "are", '3': "rockstars"}
const convertToObj = (acc, currentElem, currentIndex) => {
    acc[currentIndex] = currentElem;
    return acc;
};

const res = arr.reduce(convertToObj, {});
console.log(res);

// Shorter Soln
console.log(arr.reduce((acc, currentElem, currIdx) => ({...acc, [currIdx]: currentElem}), {}));