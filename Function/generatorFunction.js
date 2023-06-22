function* numberGenerator() {
  let number = 1;
  while (true) {
    yield number;
    number++;
  }
}

// Creating an instance of the generator
const generator = numberGenerator();

// Generating numbers using the generator
console.log(generator.next().value); // Output: 1
console.log(generator.next().value); // Output: 2
console.log(generator.next().value); // Output: 3
console.log(generator.next().value); // Output: 4