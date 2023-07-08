const arr = [2, 5, 7, 8, 10, 1, 15, 20 ,28, 30];
// The map() method creates a new array with the results of calling a function for every array element.
const mapped = arr.map((element) => element); // (value, index, array)
console.log(mapped);

// This method creates a new array with only elements that passes the condition inside the provided function.

const filterd = arr.filter(element => element % 2 === 0);
console.log(filterd);

const fruits = ["Banana", "Orange", "Apple", "Mango", "Strawberry", "Pineapple", "Grape"];
// The at() method returns an indexed element from an array.
const fruit = fruits.at(2); // Default is 0 and -1 returns the last element. Result Apple
console.log(fruit);

const arr2 = ["A", "B", "C",];
const arr3 = ["D", "E", "F",];
// The concat() method concatenates (joins) two or more arrays.
console.log(arr2.concat(arr3));

// addNewElementLast
fruits.push("Watermelon");
// addNewElementFirst
fruits.unshift("Olive");
// DeleteLastElement 
fruits.pop();
// DeleteFirstElement
fruits.shift();
console.log(fruits);
// fruits.valueOf() returns the same as fruits:
console.log(fruits.valueOf());

const myFruits = ["Banana", "Orange", "Apple", "Mango"];
myFruits.reverse();
console.log(myFruits);

const numbers = [45, 12, 15, 16, 20, 16, 35];
let total = 0;
numbers.reduce((initialValue, value, index)=>{
	total += value;
}, 0);
console.log(total);
console.log(numbers.length); // Total array length
console.log(numbers.lastIndexOf(16));
