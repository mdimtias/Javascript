// Higher Order function

const people = [
{
	name: "Tanbir", 
	age: 22
},
{
	name: "Tanim", 
	age: 12
},
{
	name: "Tariqul", 
	age: 20
},
{
	name: "Tareq", 
	age: 28
},
{
	name: "Atikul", 
	age: 18
},
{
	name: "Fahad", 
	age: 15
},
{
	name: "Rahat", 
	age: 17
}
]

function myMap(arr, fn){
	const newArray = [];
	for(let i=0; i < arr.length; i++){
			newArray.push(fn(arr[i]));
	}
	return newArray;
}

const myArray = myMap(people, value => value)
console.log(myArray);