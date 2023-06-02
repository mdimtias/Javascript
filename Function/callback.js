function calculate(a, b, callback) {
  var result = a + b;
  callback(result);
}

function displayResult(value) {
  console.log("The result is: " + value);
}

calculate(5, 3, displayResult);

// Example Two 
function mainFunc(a, b, callbackFunc){
	const c = a+b;
	const d = a-b;
	const result = callbackFunc(c, d)
	return result;
}

const sum = mainFunc(5, 4, function(c, d){
	const result = c+d;
	return result;
})
console.log("Sum ", sum);

const substract = mainFunc(5, 4, function(c, d){
	const result = c-d;
	return result;
})
console.log("Substract", substract);

const multiply = mainFunc(5, 4, function(c, d){
	const result = c*d;
	return result;
})
console.log("multiply ", multiply);

const devide = mainFunc(5, 4, function(c, d){
	const result = c/d;
	return result;
})
console.log("devide ", devide);


