console.log(name); // Output: undefined
var name = "John";

console.log(age); // Output: ReferenceError: age is not defined
let age = 25;

greet(); // Output: Hello!
function greet() {
  console.log("Hello!");
}

greet(); // Output: TypeError: greet is not a function
var greet = function() {
  console.log("Hello!");
};
