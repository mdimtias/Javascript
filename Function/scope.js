// Global Variable
var x = 100; // Accessible outside the variable
function a(){
	var x = 25;
	function b(){
		var x = 50; // Accessible inside the variable 
		console.log("B Function ", x); 
	}
	b();
	console.log("A Function", x);
}
console.log("Global Variable", x)
a();