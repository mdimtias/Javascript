function* generatorFunction() {
  yield 'First';
  yield 'Second';
  yield 'Third';
}

const generator = generatorFunction();

console.log(generator.next().value); // Output: 'First'
console.log(generator.next().value); // Output: 'Second'
console.log(generator.next().value); // Output: 'Third'
console.log(generator.next().value); // Output: undefined


// Example two 
function* countDownGenerator(start) {
  while (start > 0) {
    yield start;
    start--;
  }
}

const generatorTwo = countDownGenerator(5);

console.log(generatorTwo.next().value); // Output: 5
console.log(generatorTwo.next().value); // Output: 4
console.log(generatorTwo.next().value); // Output: 3
console.log(generatorTwo.next().value); // Output: 2
console.log(generatorTwo.next().value); // Output: 1
console.log(generatorTwo.next().value); // Output: undefined
