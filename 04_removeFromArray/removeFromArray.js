const removeFromArray = function(array, ...theArgs) {
    let duplicateArray = array;
    let newArray = [];


    // for (const arg of theArgs) {
    //     for (let i = 0; i < array.length; i++) {
            
    //         let checkForDuplicate = newArray.find(({element}) => element === arg);

    //         if (array[i] !== checkForDuplicate || array[i] !== arg) {
    //             newArray.push(array[i]);
    //         } else {
    //             continue;
    //         }
    //     }
    // }

    for (let arg of theArgs) {
        duplicateArray = duplicateArray.filter((unwanted) => unwanted !== arg);
    }

    newArray = duplicateArray

    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
