// Function Declaration
function welcome(){
	console.log("Welcome JavaScript Function");
}
// Invoking the function
welcome(); 

// Function Expression
const hello = function(name){	// Parameter
	const message = `Hello ${name}`
	console.log(message);
}
hello("Imtias"); // Imtias is Arguments

// IIFE (Immediately Invoked Function Expression)
(function() {
  const message = "Hello, IIFE!";
  console.log(message);
})();

// Sum of Array 
function sumOfArray(arr){
	let sum = 0;
	for(let i=0; i < arr.length; i++){
		sum += arr[i];
	}
	console.log(sum);
}
const arr1 = [1, 5, 4, 6, 8];
const arr2 = [4, 3, 1, 6, 8];
sumOfArray(arr1);
sumOfArray(arr2);

// arguments Object
function test(){
	let sum = 0;
	console.log(arguments);
	// Array Like Object 
	// [Arguments] { '0': 1, '1': 5, '2': 4, '3': 6, '4': 2, '5': 2 }
	
	for(let i=0; i < arguments.length; i++){
		sum += arguments[i];
	}
	console.log(sum);
}
test(1, 5, 4, 6, 2, 2);

// Anonymous Functions
function (){
	console.log("I am Anonymous Functions!")
}