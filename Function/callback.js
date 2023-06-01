function calculate(a, b, callback) {
  var result = a + b;
  callback(result);
}

function displayResult(value) {
  console.log("The result is: " + value);
}

calculate(5, 3, displayResult);
