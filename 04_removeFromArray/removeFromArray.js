const removeFromArray = function(array, ...theArgs) {
    let duplicateArray = array;
    let newArray = [];

    for (let arg of theArgs) {
        duplicateArray = duplicateArray.filter((unwanted) => unwanted !== arg);
    }

    newArray = duplicateArray

    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
