// Create a memoization cache
const cache = {};

// Function to be memoized
function fibonacci(n) {
  // Check if the result is already in the cache
  if (n in cache) {
    return cache[n];
  }

  // Base case
  if (n <= 2) {
    return 1;
  }

  // Calculate the result recursively
  const result = fibonacci(n - 1) + fibonacci(n - 2);

  // Store the result in the cache
  cache[n] = result;

  return result;
}

// Call the memoized function
console.log(fibonacci(10)); // Output: 55
console.log(fibonacci(10)); // Output: 55 (Result fetched from the cache)
