const reverseWords = sentence => {
    let splitArr = sentence.split(" ");

    splitArr.forEach((word, idx) => {
        splitArr[idx] = word.split("").reverse().join("");
    });
    return splitArr.join(" ");
}

console.log("Output sentence - ", reverseWords('I am Devansu'));