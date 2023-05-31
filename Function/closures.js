// Block Scope
// This variable access anywhere
const i_am_global = "Global";
function display(){
	// Function Scope 
	// This variable access only this function
	const i_am_local = "Local";
	function(){
		console.log(i_am_local)
	}
}