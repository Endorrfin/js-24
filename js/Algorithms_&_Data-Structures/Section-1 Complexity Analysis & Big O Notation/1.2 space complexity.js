

/*
Theory
Space complexity measures how much additional memory an algorithm uses as input grows. We typically count auxiliary space — memory beyond the input itself.

Two components:
  Auxiliary space — extra memory your algorithm allocates (variables, data structures, temporary arrays)
  Input space — the memory the input itself occupies (usually excluded from analysis)

  When someone asks "what's the space complexity?", they almost always mean auxiliary space.
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 🟪 ISSUE 1: Classify the Space Complexity
// 🙇‍♂️ Task: Determine the auxiliary space complexity of each function.

// --- Function A ---
// ✅ O(1): Only one variable `max`, regardless of input size. This is in-place — no extra structure allocated.
function findMax(arr) {
  let max = - Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

// console.log("🟢 OUTPUT FIND MAX:", findMax(arr));


// --- Function B ---
// ✅ O(n):  `result` array grows linearly with input. Every element produces one new element.
function double(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
}

// console.log("🟢 OUTPUT DOUBLE:", double(arr));


// --- Function C ---
// ✅ O(n²): Creates an n×n matrix. n rows × n columns = n² cells.
// This is why 2D DP tables can be memory-expensive.
function buildMatrix(n) {
  const matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    // console.log('matrix[i]', matrix[i]);
    for (let j = 0; j < n; j++) {
      matrix[i][j] = i + j;
      // console.log('matrix[i][j]', matrix[i][j]);
    }
  }
  return matrix
}

// console.log("🟢 OUTPUT BUILD MATRIX:", buildMatrix(30));


// --- Function D ---
// ✅ O(n): Zero extra variables — but the CALL STACK is the cost. factorial(5) → factorial(4) → factorial(3) → factorial(2) → factorial(1)
// // 5 frames on the stack = n frames = O(n) space.
// // Common mistake: saying O(1) because there are no arrays/objects. The recursion stack IS memory.
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
  // const prevRes = n * factorial(n - 1);
  // console.log(prevRes);
  // return prevRes;
}

// console.log("🟢 OUTPUT FACTORIAL:", factorial(5));


// --- Function E ---
// ✅ O(n): The Map stores up to n key-value pairs in the worst case (when no two-sum pair is found until the last element).
function twoSum(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    // console.log('complement', complement);
    if (map.has(complement)) return [map.get(complement), i];
    map.set(arr[i], i);
    // console.log('map', map);
  }
  return [];
}

// console.log("🟢 OUTPUT TWO SUM:", twoSum(arr,8));



// 🟪 ISSUE 2: In-Place Reversal vs. Out-of-Place
// 🙇‍♂️ Task: Implement array reversal two ways. Analyze the space complexity of each. Explain when you'd choose one over the other.

// Solution A — Out-of-place: O(n) space
function reverseOutOfPlace(arr) {
  const result = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[arr.length - 1 - i];
  }
  return result;
  // Time: O(n), Space: O(n)
  // Original array is untouched — safe for shared/immutable data.
}


// Solution B — In-place with two pointers: O(1) space
function reverseInPlace(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Swap using destructuring
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
  // Time: O(n), Space: O(1)
  // Only two pointer variables — no extra array.
  // BUT: mutates the original. Callers must be aware.
}



// 🟪 ISSUE 3: Hidden Space in Built-In Methods
// 🙇‍♂️ Task: Each function looks simple, but uses a built-in method that allocates memory. Identify the hidden space cost.

// --- Function A ---
function sortAndFind(arr) {
  const sorted = arr.slice().sort((a, b) => a - b);
  return sorted[0];
}

// --- Function B ---
function getUnique(arr) {
  return [...new Set(arr)];
}

// --- Function C ---
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

// --- Function D ---
function flatten(arr) {
  return arr.reduce((acc, curr) => acc.concat(curr), []);
}


// SOLUTION
// Function A: O(n) space
// .slice() creates a full copy of the array → O(n).
// .sort() in V8 uses TimSort, which internally needs O(n) auxiliary space.
// If we only need the minimum, we don't need to sort at all:
function findMin(arr) {
  let min = Infinity;
  for (const val of arr) {
    if (val < min) min = val;
  }
  return min; // O(1) space, O(n) time — much better
}

// Function B: O(n) space
// new Set(arr) stores up to n unique values → O(n).
// The spread [...] creates another array → O(n).
// Total: O(n) — but that's unavoidable if you need unique values.

// Function C: O(n) space
// .split('') creates an array of n characters → O(n).
// .reverse() reverses in-place on that array (still O(n) from split).
// .join('') creates a new string → O(n).
// Better approach:
function isPalindromeOptimal(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true; // O(1) space — two pointers, no extra string/array
}

// Function D: O(n²) space — this is the dangerous one!
// .concat() creates a NEW array each iteration.
// Iteration 1: new array of size 1
// Iteration 2: new array of size 2 (copies previous + adds 1)
// ...
// Iteration n: new array of size n
// Total intermediate allocations: 1 + 2 + ... + n = O(n²)
// Even though GC cleans old arrays, the peak and churn is expensive.
// Better:
function flattenOptimal(arr) {
  return arr.flat(); // Built-in, single pass, O(n) space
  // Or: [].concat(...arr) — single concat call, O(n)
}



// 🟪 ISSUE 4: Recursion Space — Fibonacci Three Ways
// 🙇‍♂️ Task: Implement Fibonacci three ways. Compare the space complexity of each.

// Solution A — Naive recursion: O(n) space
function fibRecursive(n) {
  if (n <= 1) return n;
  return fibRecursive(n - 1) + fibRecursive(n - 2);

  // Time: O(2ⁿ) — exponential, terrible
  // Space: O(n) — WHY?

  // The recursion tree looks wide (2ⁿ nodes), but the CALL STACK
  // is what matters for space. The deepest path is n frames.

  // fib(5) → fib(4) → fib(3) → fib(2) → fib(1) — max 5 frames

  // After fib(1) returns, its frame is popped BEFORE fib(0) is called.
  // The stack never holds more than n frames simultaneously.
  // Space = max depth of recursion tree, NOT total number of calls.
}


// Solution B — Memoized recursion: O(n) space
function fibMemo(n, memo = new Map()) {
  if (n <= 1) return n;
  if (memo.has(n)) return memo.get(n);

  const result = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  memo.set(n, result);
  return result;

  // Time: O(n) — each fib(k) computed only once
  // Space: O(n) — memo Map holds n entries + call stack is O(n)

  // Huge time improvement, same space.
  // The Map trades space for time — classic trade-off.
}


// Solution C — Iterative: O(1) space
function fibIterative(n) {
  if (n <= 1) return n;

  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;

  // Time: O(n)
  // Space: O(1) — only 3 variables regardless of n.

  // No recursion = no stack frames.
  // No memo = no Map.
  // This is optimal for both time and space.
}






