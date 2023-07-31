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