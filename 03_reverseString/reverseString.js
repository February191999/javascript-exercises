const reverseString = function(string) {
    let stringList = string.split();
    let reversedList = [];

    for (let i = 0; i < stringList.length; i++) {
        reversedList.push(stringList[stringList - 1]);
    }

    return reversedList;
};

// Do not edit below this line
module.exports = reverseString;
