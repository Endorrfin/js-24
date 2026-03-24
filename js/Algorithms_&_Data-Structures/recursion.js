
// ============ RECURSION ============
const array = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32];
let count = 0;


// ------------ Solution 1.0 - Factorial ------------
const sum = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return n + sum(n - 1);
}

// console.log(sum(0));
// console.log(sum(1));
// console.log(sum(5));
// console.log(sum(10));
// console.log(sum(100));
// console.log(sum(1000));

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



// ------------ Solution 1.3 - FlattenSimple ------------
function flattenSimple(...data) {
  return data.reduce((acc, item) => (
    Array.isArray(item) ? acc.concat(flattenSimple(...item)) : acc.concat(item)
  ), []);
}

// console.log(flattenSimple('flattenSimple', [[1], [[2]], [[[3]]], [[[[4]]]], [[[[[5]]]]], [[[[[[6, 7, 8, 9]]]]]], 0]));
// console.log(flattenSimple('flattenSimple', ['a', ['b', 2], 3, null, [[4], ['c']]]));

// ------------ Solution 1.4 - FlattenHard ------------
function flattenHard(...data) {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    const currentElement = data[i];
    if (Array.isArray(currentElement)) {
      result.push(...flattenHard(...currentElement));
    } else {
      result.push(currentElement);
    }
  }

  return result;
}

// console.log(flattenHard('flattenHard', [[1], [[2]], [[[3]]], [[[[4]]]], [[[[[5]]]]], [[[[[[6, 7, 8, 9]]]]]], 0]));
// console.log(flattenHard('flattenHard', ['a', ['b', 2], 3, null, [[4], ['c']]]));








