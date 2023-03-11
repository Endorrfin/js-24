
// ============ RECURSION ============
const array = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32] // [-5, -1, 0, 1, 1, 1, 2...]
let count = 0;


// ------------ Solution 1.1 - Factorial ------------
const factorial = (n) => {
  if (n === 1) {
    return 1
  }

  return n * factorial(n - 1)
}

// console.log(factorial(5));
// console.log(factorial(10));



// ------------ Solution 1.2 - Fibonacci ------------
// number of fibonacci - 1, 1, 2, 3, 5, 8, 13, 21;
const fibonacci = (n) => {
  if (n === 1 || n === 2) {
    return 1
  }

  return fibonacci(n - 1) + fibonacci(n - 2)
}

// console.log(fibonacci(8));
// console.log(fibonacci(10));
