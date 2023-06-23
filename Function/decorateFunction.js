// Decorator function
function loggerDecorator(func) {
  return function(...args) {
    console.log(`Calling function: ${func.name}`);
    const result = func(...args);
    console.log(`Function ${func.name} executed successfully`);
    return result;
  };
}

// Original function
function add(a, b) {
  return a + b;
}

// Decorate the function
const decoratedAdd = loggerDecorator(add);

// Call the decorated function
const sum = decoratedAdd(5, 3);
console.log(sum); // Output: 8
