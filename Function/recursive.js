// A recursive function is a function that calls itself from within its own body.

function factorial(n) {
  // Base case: factorial of 0 or 1 is 1
  if (n === 0 || n === 1) {
    return 1;
  }
  
  // Recursive case: multiply current number by factorial of (n-1)
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120

// Example Two

function sum(n){
	if(n===1){
		return 1
	}
	return n + sum(n-1); // 
}
console.log(sum(100));