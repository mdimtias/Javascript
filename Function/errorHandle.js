// try catch doesn't work for SyntaxError 
try{
	alert("Hi, I am First!");
	alert(message);
	alert ("Hi, I am Second!");
}catch(err){
	console.log(err);
	console.log(err.name);
	console.log(err.message);
}finally{
	alert("Hi, I am finally block!")
}

// handle custom error 
try{
	var x = 10;
	if( x <= 100){
		throw "value is too low";
	}else if(x > 100){
		throw "Value is too high"
	}
}catch(err){
	console.log(err)
}