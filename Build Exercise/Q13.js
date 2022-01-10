let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split('');
const output = (text, shift) => {
    let outputText = "";

    for(let i = 0; i < text.length; i++) {
        outputText += lowercaseLetters[(lowercaseLetters.indexOf(text.charAt(i)) + shift) % lowercaseLetters.length];
    }
    return outputText;
}
console.log("Encoded Text - ", output("neogcamp", 2));