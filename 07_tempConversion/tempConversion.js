const convertToCelsius = function(num) {
  let unrounded = (num - 32) * 5/9; 
  let rounded = Math.round(unrounded * 10) / 10;

  return rounded;
};

const convertToFahrenheit = function(num) {
  let unrounded = num * (9/5) + 32;
  let rounded = Math.round(unrounded * 10) / 10;

  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
