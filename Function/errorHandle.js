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