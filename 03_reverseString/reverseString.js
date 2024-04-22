const reverseString = function(string) {
    let stringList = string.split('');
    let reversedList = [];
    let newString = '';

    for (let i = 0; i < stringList.length; i++) {
        reversedList.push(stringList[stringList - 1]);
    }

    reversedList.toString();

    return stringList;
};

// Do not edit below this line
module.exports = reverseString;
