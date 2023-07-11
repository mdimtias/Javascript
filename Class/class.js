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