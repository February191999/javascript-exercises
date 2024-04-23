const sumAll = function(firstNumber, secondNumber) {
    let addedSum = 0;
    let i = firstNumber;

    if (firstNumber < secondNumber) {
        while (i <= secondNumber) {
            addedSum += i;
            i++
        }
    } else if (firstNumber > secondNumber) {
        while (i >= secondNumber) {
            addedSum += i;
            i--;
        }
    }

    return addedSum;

};

// Do not edit below this line
module.exports = sumAll;
