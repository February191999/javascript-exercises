const reverseString = function(string) {
    let stringList = string.split('');
    let reversedList = [];
    let newString;

    reversedList = stringList.toReversed();

    newString = reversedList.join('');

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
