const palindromes = function (string) {
    let stringArray = string.split("");
    let stringToTest = stringArray
        .filter(char => char !== "!")
        .join("");

    return stringToTest;

    // let reversedString = stringArray.reverse();
    // let reversedStringToTest = reversedString.join("");

    // if (stringToTest === reversedStringToTest) {
    //     return true;
    // }

};

// Do not edit below this line
module.exports = palindromes;
