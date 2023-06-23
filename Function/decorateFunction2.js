// Decorator function
function delayDecorator(func, delay) {
  return function(...args) {
    setTimeout(() => {
      func(...args);
    }, delay);
  };
}

// Original function
function greet(name) {
  console.log(`Hello, ${name}!`);
}

// Decorate the function
const delayedGreet = delayDecorator(greet, 2000);

// Call the decorated function
delayedGreet('John'); // Output: (after 2 seconds) Hello, John!
