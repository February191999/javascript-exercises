const removeFromArray = function(array, ...theArgs) {
    let newArray = [];

    for (const arg of theArgs) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === arg) {
                continue;
            }   else {
                newArray.push(array[i]);
            }
        }
    }

    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
