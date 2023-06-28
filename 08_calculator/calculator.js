const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  return arr.reduce((sum, current) => sum + current, 0);

};

const multiply = function() {
    let result = 1;
  for(i = 0; i < arguments.length; i++)
  {
    result *= arguments[i];
  }
  return result;
};

const power = function(a,b) {
  let result = 1; for(i = 1; i <= b; i++)
  {
   result *= a;
  }
  return result;
};

const factorial = function(a) {
	
  let result = 1; for(i = 1; i <= a; i++)
  {
   result *= i;
  }
  return result;
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
