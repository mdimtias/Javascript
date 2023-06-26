// Constructor function
function Animal(name) {
  this.name = name;
}

// Adding a method to the prototype of the Animal constructor
Animal.prototype.sayName = function() {
  console.log("My name is " + this.name);
};

// Creating an instance of the Animal constructor
var lion = new Animal("Simba");

// Calling the inherited method
lion.sayName(); // Output: "My name is Simba"
