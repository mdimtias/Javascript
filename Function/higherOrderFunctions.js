// Example One
// Function Expressions
const display = function (message){
	 console.log(message);
}
// Higher Order Function
const hof = function(name, callbackFunc){
	const result = `I am a ${name}`;
	// Callback Function
	return callbackFunc(result)
}
hof("Imtias", display) // display as a Callback Function

// Example Two
function sum (a, b){
	return a+b
}

function higherOrderFunc(a, b, func){
	const c = a + b;
	function multiply (){
		// a and b value get for closure
		const d = func(a, b);
		return c * d;
	}
	return multiply();	
}

const result = higherOrderFunc(5, 4, sum)
console.log(result)