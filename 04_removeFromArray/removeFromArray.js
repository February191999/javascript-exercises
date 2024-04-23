const removeFromArray = function(array, ...theArgs) {
    let j = arguments.length;
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== theArgs) {
            newArray.push(array[i]);
        }
    }

    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
