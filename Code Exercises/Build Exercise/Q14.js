const capitalizeSentence = sentence => {
    let wordsArr = sentence.split(" ");

    wordsArr.forEach((word, idx) => {
        wordsArr[idx] = word.charAt(0).toUpperCase() + word.slice(1);
    });

    return wordsArr.join(" ");
}
console.log("Output Sentence - ", capitalizeSentence("we are neoGrammers"));