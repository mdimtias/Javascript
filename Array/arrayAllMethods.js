const arr = [2, 5, 7, 8, 10, 1, 4, 15, 20 ,28, 30];
// The map() method creates a new array with the results of calling a function for every array element.
const mapped = arr.map((element) => element); // (value, index, array)
console.log("Map Array: ", mapped);
// Find method returns the value of the first element in an array that pass the test in a testing function.
const found = arr.find(element => element > 10); // 15
console.log("Found: ", found); 
// Some method checks if at least one element in the array that passes the condition, returning true or false as appropriate.
const greaterNum = arr.some(element => element > 5); // true
const lessNum = arr.some(element => element < 0);  // false

// This method checks every element in the array that passes the condition, returning true or false as appropriate.
const greaterFive = arr.every(element => element > 5); // false
// forEach method helps to loop over array by executing a provided callback function for each element in an array.
arr.forEach(element=> element);
console.log(arr);
console.log("Greater Num: ", greaterNum, "Less Number: ", lessNum, "Greater Five: ", greaterFive);
// This method creates a new array with only elements that passes the condition inside the provided function.

const filterd = arr.filter(element => element % 2 === 0);
console.log("Filterd: ", filterd);

const fruits = ["Banana", "Orange", "Apple", "Mango", "Strawberry", "Pineapple", "Grape"];
// The at() method returns an indexed element from an array.
const fruit = fruits.at(2); // Default is 0 and -1 returns the last element. Result Apple
console.log("At Method: ", fruit);

const arr2 = ["A", "B", "C",];
const arr3 = ["D", "E", "F",];
// The concat() method concatenates (joins) two or more arrays.
console.log("Array Concat: ",  arr2.concat(arr3));

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
// console.log(fruits.valueOf()); // Get all Fruits

const myFruits = ["Banana", "Orange", "Apple", "Mango"];
myFruits.reverse();
console.log(myFruits); // show the all array element in reverse

const numbers = [45, 12, 15, 16, 20, 16, 35];
let total = 0;
numbers.reduce((initialValue, value, index)=>{
	total += value;
}, 0);
console.log("Array Element Total Number: ", total);
console.log(numbers.length); // Total array length
console.log(numbers.lastIndexOf(16));

const arr5 = ["A", "B", "C", "D", "E", "F"];
const sliceArr = arr5.slice(2, 5); // (start, end)
console.log(sliceArr);

const findIndex = arr5.indexOf("C"); // 2
console.log("Get Index: ", findIndex); 
const indexFinder = arr5.findIndex(element => element === "D"); // 3
console.log("Get Index: ", indexFinder); 

const arr6 = new Array(5);
arr6.fill(10);
console.log("Array Fill Method: ", arr6, arr6.length);

const arr7 = ["I", "M", "T", "I", "A", "S"];
const arr8 = ["I", "M", "T", "I", "A", "S"];
console.log(arr7.join(""));
console.log(arr7.join("+"));
// includes method checks if an array includes the element that passes the condition, returning true or false as appropriate.
console.log(arr7.includes("T")); // true
console.log(arr7.includes("H")); // false
const sortDesc = arr7.sort((a, b)=> a > b ? -1 : 1); // sort in descending order
const sortAsce = arr8.sort((a, b)=> a > b ? 1 : -1); // sort in ascending order
console.log("Sort Desc", sortDesc);
console.log("Sort Asce", sortAsce);