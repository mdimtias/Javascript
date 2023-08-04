_salary = Symbol("salary");
class Person {
	constructor(name, email, salary){
		this.name = name;
		this.email = email;
		// Private Property
		this[_salary] = salary;
	}
	static country = "Bangladesh";
	
	static isValid(age){
		return age >= 18;
	}
	
	print(){
		console.log(`My Name is ${this.name} and Email ${this.email}`);
	}
}

const karim = new Person("Karim", "karim@gmail.com");
console.log(karim.print()); 

console.log(Person.country); // access Static proferty to direct class name
console.log(Person.isValid(19));
//  Inheritance
class ManOne extends Person {
	constructor(name, email, phone){
		super(name, email);
		this.phone = phone;
	}
	print(){
		console.log(`My Name is ${this.name} , Email ${this.email} and Phone ${this.phone}`);
	}
}

// Polymorphism
const personOne = new ManOne("rohim", "rohim@gmail.com", 01812000005);
const personTwo = new ManOne("Karim", "karim@gmail.com", 01814500005);

console.log(personOne.print());