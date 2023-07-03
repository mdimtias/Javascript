let age = [15, 5, 20, 10, 30, 12, 1, 9, 25];
let toReversed = age.toReversed(); // Immutable way
console.log(`Age: ${age} toReversed: ${toReversed}`);

let number = [5, 4, 1, 10, 20, 35, 30];
let toSplice = number.toSpliced(2, 1, 15, 25, 50); // toSpliced(start, deleteCount, item1)
console.log(toSplice); // immutable way 


let man = [1, 2, 3, 5, 4];
console.log(man.toString())

const languages = ["JavaScript", "TypeScript", "CoffeeScript"];
const updated = languages.with(2, "WebAssembly");
console.log(updated); // => [ 'JavaScript', 'TypeScript', 'WebAssembly' ]
console.log(languages); // => [ 'JavaScript', 'TypeScript', CoffeeScript' ]