class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`My name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person1 = new Person("Md Imtias", 22);
const person2 = new Person("Md Rohim", 28);

person1.speak(); // My name is Md Imtias and I am 22 years old.
person2.speak(); // My name is Md Rohim and I am 28 years old.


class Dog extends Person {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  bark() {
    console.log(`Woof! I am a ${this.breed}.`);
  }
}

const dog1 = new Dog("Sparky", 5, "Golden Retriever");

dog1.speak(); // I am Sparky and I am 5 years old.
dog1.bark(); // Woof! I am a Golden Retriever.

/* 
Abstraction: The Person class is an abstract class. This means that it cannot be instantiated directly. It must be extended by a subclass in order to create a new object.

Encapsulation: The Person class encapsulates its data. This means that the properties of the class, such as name and age, are hidden from the outside world. They can only be accessed through the methods of the class.

Inheritance: The Dog class inherits from the Person class. This means that the Dog class inherits all of the properties and methods of the Person class.

Polymorphism: The Dog class can override the speak() method from the Person class. This means that the speak() method will behave differently depending on whether it is called on a Dog object or an Person object.
*/