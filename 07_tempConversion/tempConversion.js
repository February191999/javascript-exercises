const convertToCelsius = function(num) {
  return num * (9/5) + 32;
};

const convertToFahrenheit = function(num) {
  return (num - 32) * 5/9; 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
