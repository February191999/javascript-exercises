const palindromes = function (string) {
    // let stringArray = string.split("");
    
    // let filterExclamation = stringArray
    //     .filter(char => char !== "!")
    //     .map(char => char.toLowerCase());

    // let filterSpace = filterExclamation
    //     .filter(char => char !== " ");

    // let filterComma = filterSpace
    //     .filter(char => char !== ",");

    // let filterPeriod = filterComma  
    //     .filter(char => char !== ".");

    // let stringToTest = filterPeriod.join("");

    // let reversedString = filterPeriod.reverse();
    // let reversedStringToTest = reversedString
    //     .filter(char => char !== "!")
    //     .map(char => char.toLowerCase())
    //     .join("");

    // if (stringToTest !== reversedStringToTest) {
    //     return false;
    // } else {
    //     return true;
    // }

    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const cleanedString = string
        .toLowerCase()
        .split('')
        .filter((char) => alphanumerical.includes(char))
        .join('');

    const reversedString = cleanedString.split('').reverse().join('');

    return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
