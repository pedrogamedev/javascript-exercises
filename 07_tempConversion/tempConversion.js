const convertToCelsius = function(temp) {
  let result = ((temp - 32) * (5/9) ).toFixed(1);

  return Math.round(result *10) /10;
};

const convertToFahrenheit = function(temp) {
  let result =((temp * (9/5)) +32 ).toFixed(1);
  return Math.round(result *10) /10;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
