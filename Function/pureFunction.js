// What is Pure function
	// It Return the same result if given the same answer
	// It does not cause any observable side effects

// It's Pure Function
function sqr(n){
	return n*n;
}
sqr(5)

// It's not Pure Function
let n = 50;
function number(){
	n = 100;
	return n;
}
console.log(number());
console.log(n)