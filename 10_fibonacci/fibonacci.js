const fibonacci = function(num) {
    num = +num;
    let numArray = [0, 1];
    let checkDifference = num - numArray.length;

    if (num === 0) {
        return 0;
    } else if (num === 1 || num === 2) {
        return 1;
    } else if (num < 0) {
        return "OOPS";
    }

    for (let i = 1; i < checkDifference + 2; i ++) {
        let newFibNumber = numArray[i] + numArray[(i-1)];
        numArray.push(newFibNumber);
    }

    return numArray.pop();
};

// Do not edit below this line
module.exports = fibonacci;
