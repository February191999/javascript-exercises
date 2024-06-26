const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  return array.reduce((total, currentNum) => {
    return total + currentNum;
  }, 0);

};

const multiply = function(array) {
  return array.reduce((total, currentNum) => {
    return total * currentNum;
  });
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(num) {
  let numArray = [];
  if (num === 0 || num === 1) {
    return 1;
  }

  for (let i = num; i > 0; i--) {
    numArray.push(i);
  }

  let factoredNum = numArray.reduce((total, currentNum) => {
    return total * currentNum; 
  }, 1)

  return factoredNum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
