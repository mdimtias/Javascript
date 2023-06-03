// Currying Function
// Currying is a technique in functional programming where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. This allows you to partially apply arguments to a function and create new functions with reduced arity.
function currying(a){
	return function(b){
		return function(c){
			return a+b+c;
		}
	}
}
var result = currying(5)(10)(15);
console.log(result);