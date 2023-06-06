// async function
async function test(){
	return ("Hello")
}
test()
.then(v=>console.log(v))
.catch(err=>console.log(err))

// Fetch Data 
async function fetchData(){
	let res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await res.json();
	console.log(data) 
}
fetchData(); 

