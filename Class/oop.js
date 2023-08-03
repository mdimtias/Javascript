class Person {
	constructor(name, email){
		this.name = name;
		this.email = email;
	}
	static country = "Bangladesh";
	
	print(){
		console.log(`My Name is ${this.name} and Email ${this.email}`);
	}
}

const karim = new Person("Karim", "karim@gmail.com");
console.log(karim.print()); 

console.log(Person.country); // access Static proferty to direct class name

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