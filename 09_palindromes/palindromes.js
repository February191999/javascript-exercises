const palindromes = function (string) {
    let stringArray = string.split("");
    let stringToTest = stringArray
        .filter(char => char !== "!")
        .map(char => char.toLowerCase())
        .join("");

    let reversedString = stringArray.reverse();
    let reversedStringToTest = reversedString
        .filter(char => char !== "!")
        .map(char => char.toLowerCase())
        .join("");

    if (stringToTest === reversedStringToTest) {
        return true;
    }

};

// Do not edit below this line
module.exports = palindromes;
