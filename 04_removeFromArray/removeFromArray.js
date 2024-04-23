const removeFromArray = function(array, argument) {

    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== argument) {
            newArray.push(array[i]);
        }
    }

    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
