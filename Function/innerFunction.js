function greeting(greet, name){
	// Inner Function
	function getFirstName(){
		if(name){
			return name.split(" ")[0];
		}else{
			return "";
		}
	}
let message = greet + " " + getFirstName()
	console.log(message)
}

greeting("Good Morning!", "Imtias Ahmed")