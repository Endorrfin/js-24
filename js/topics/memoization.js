

// 🚀 Essential JavaScript Quiz 1.10: Bonus Challenge
/*
Task
1. First, explain whether this code can work in JavaScript.
2. If you think it can, explain how this would work in JavaScript.
3. If you can explain it, implement the cache function so that repeated calls with the same arguments return a cached (previously computed) result instead of recalculating.

Important:
• Your explanation should be clear and use JavaScript concepts, not just intuition.
• Your implementation should handle functions with any number of arguments, not only two.

Note
You can use console.log() for debugging and research JavaScript syntax if needed.

Key JavaScript concepts used:
  - Higher-order functions: cache returns a function
  - Closures: The returned function has access to the cache variable
  - Rest parameters: Handle any number of arguments with ...args
  - JSON.stringify: Convert arguments array to a unique string key

*/

// SOLUTION I
function cash1 () {
  function sum(a, b) {
    console.log(`sum called with a: ${a} b: ${b}`);
    return a + b;
  }

  function cache(fn) {
    const cacheMap = new Map(); // Stores cached results

    return function(...args) { // Handle any number of arguments
      const key = JSON.stringify(args); // Create unique key from arguments

      if (cacheMap.has(key)) {
        return cacheMap.get(key); // Return cached result
      }

      const result = fn.apply(this, args); // Call original function
      cacheMap.set(key, result); // Store result in cache

      return result;
    };

  }

  const cachedSum = cache(sum);
  console.log("1️⃣ First call:", cachedSum(1, 2));
  console.log("2️⃣ Second call (should use cache):", cachedSum(1, 2));
  console.log("3️⃣ Third call with different args:", cachedSum(2, 3));
  console.log("4️⃣ Fourth call (should use cache):", cachedSum(1, 2));
}

// cash1();
// ✅ Explanation: Great job completing the bonus challenge! This demonstrates your ability to solve algorithmic problems with JavaScript.
// Uses Map for O(1) cache lookups
// JSON.stringify(args) creates unique keys from any number of arguments
// ...args handles functions with any arity
// fn.apply(this, args) preserves function context




// SOLUTION II
function cash2 () {
  function sum(a, b) {
    console.log(`sum called with a: ${a} b: ${b}`);
    return a + b;
  }

  // Cache implementation using Map and argument serialization
  function cache(fn) {
    const cacheMap = new Map(); // Stores cached results

    return function(...args) { // Handle any number of arguments
      const key = JSON.stringify(args); // Create unique key from arguments

      if (cacheMap.has(key)) {
        console.log(`🔺 Cache hit for args: ${JSON.stringify(args)}`);
        return cacheMap.get(key); // Return cached result
      }

      console.log(`🔺 Cache miss for args: ${JSON.stringify(args)}`);
      const result = fn.apply(this, args); // Call original function
      cacheMap.set(key, result); // Store result in cache

      return result;
    };

  }

  const cachedSum = cache(sum);
  console.log("1️⃣ First call:", cachedSum(1, 2));
  console.log("2️⃣ Second call (should use cache):", cachedSum(1, 2));
  console.log("3️⃣ Third call with different args:", cachedSum(2, 3));
  console.log("4️⃣ Fourth call (should use cache):", cachedSum(1, 2));
}

// cash2();



// SOLUTION III
function cash3 () {
  function sum(a, b) {
    console.log(`sum called with a: ${a} b: ${b}`);
    return a + b;
  }

  function cache(fn) {
    const cacheStore = {};

    return function(...args) {
      // Create a unique key form the arguments
      const key = JSON.stringify(args);

      // if the result is already cached, return it
      if (cacheStore.hasOwnProperty(key)) {
        console.log(`Fetching from cache store:`, args);
        return cacheStore[key];
      }

      // Otherwise, compute the result and store it in the cache
      const result = fn(...args);
      cacheStore[key] = result;
      return result;
    };

  }

// Use the functions to demonstrate caching
  const cachedSum = cache(sum);
  console.log("First call:", cachedSum(1, 2)); // Expected to compute
  console.log("Second call (should use cache):", cachedSum(1, 2)); // Expected to use cache
  console.log("Third call with different args:", cachedSum(2, 3)); // Expected to compute
  console.log("Fourth call (should use cache):", cachedSum(1, 2)); // Expected to use cache
}

// cash3();
