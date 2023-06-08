function myFunc(c, d){
	console.log(this);
	console.log(this.a + this.b + c + d);
}
// Implicitly call func call and apply
myFunc.call({a: 20, b: 15}, 10, 30); 
myFunc.apply({a: 100, b: 115}, [25, 5]);

// don't call immedietly bind
const test = myFunc.bind({a: 5, b: 10}, 15, 30);
test();

// const test = myFunc.bind({a: 5, b: 10});
// test(15, 15);
