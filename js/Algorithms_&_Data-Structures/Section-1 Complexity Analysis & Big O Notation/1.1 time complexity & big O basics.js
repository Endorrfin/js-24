
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 🟪 ISSUE 1: CLASSIFY THE COMPLEXITY
// Task: Determine the time complexity of each function. Don't run them — analyze by reading the code.

// --- Function A ---
// ✅ O(n) - One loop through entire array. Linear growth.
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// console.log("🟢 OUTPUT:", sumArray(arr));


// --- Function B ---
// ✅ O(n²) - Nested loop: n iterations × n iterations.
function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 0; k < arr.length; k++) {
        console.log(arr[i], arr[j], arr[k]);
      }
    }
  }
}

// printPairs(arr);


// --- Function C ---
// ✅ O(n) - n/2 iterations → drop the constant 1/2 → O(n). Common mistake: saying O(n/2). Big O drops constants.
function printHalf(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    console.log(arr[i]);
  }
}

// printHalf(arr);


// --- Function D ---
// ✅ O(log n) i doubles each step: 1, 2, 4, 8, ... until reaching n. Number of steps = log₂(n). This is the signature of O(log n).
function logTime(n) {
  let i = 1;
  while (i < n) {
    console.log(i);
    i *= 2;
  }
}

// logTime(10);


// --- Function E ---
// ✅ O(n) Two sequential loops: O(n) + O(n) = O(2n) → drop constant → O(n). NOT O(n²) — loops are sequential, not nested.
function twoLoops(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  for (let j = 0; j < arr.length; j++) {
    console.log(arr[j]);
  }
}

// twoLoops(arr);


// CONCLUSION: Key takeaway: Nested = multiply, sequential = add, constants are irrelevant.




// 🟪 ISSUE 2: Different Inputs Trap
// Task: What is the time complexity? Be precise about the variables.
const arrA = [1, 3, 5, 7, 9, 10, 11, 12, 13];
const arrB = [0, 2, 4, 6, 8, 10, 11, 12, 13];

function intersect(arrA, arrB) {
  const result = [];
  for (let i = 0; i < arrA.length; i++) {
    for (let j = 0; j < arrB.length; j++) {
      if (arrA[i] === arrB[j]) {
        result.push(arrA[i]);
      }
    }
  }
  return result;
}

// console.log("🟢 OUTPUT:", intersect(arrA, arrB));

/*
  Time: O(a * b)  — where a = arrA.length, b = arrB.length
  Common mistake: calling this O(n²).
  These are DIFFERENT inputs. If arrA has 1,000 elements and arrB has 5,
  it's effectively O(5000), not O(1,000,000).
  Rule: Different inputs → different variables.
  Only use O(n²) when BOTH loops iterate over the SAME input.
 */

// Optimized approach using a Set — O(a + b):
function intersectOptimized(arrA, arrB) {
  const setA = new Set(arrA); // O(a)
  console.log('setA', setA);
  const result = [];
  for (const val of arrB) { // O(b)
    if (setA.has(val)) {
      result.push(val);
    }
  }
  return result; // Total: O(a + b)
}

console.log("🟢 OUTPUT:", intersectOptimized(arrA, arrB));

/*
CONCLUSION:
When it matters: In production, your two inputs are often wildly different sizes (e.g., user's cart vs. product catalog).
Recognizing O(a * b) vs O(a + b) is the difference between a 3-second and 3-millisecond API response.
 */



// 🟪 ISSUE 3: Nested Loop with Dependent Bound
// Task: Determine the complexity. The inner loop depends on the outer counter.

function printTriangle(n) {
  for (let i = 0; i < n; i++) {
    for (let k = 0; k <= i; k++) {
      console.log(i, k);
    }
  }
}

// printTriangle(30);

/*
SOLUTION
  Inner loop runs: 1 + 2 + 3 + ... + n times
  This is the arithmetic series: n(n+1)/2
  Expanded: n²/2 + n/2
  Drop constants and lower terms → O(n²)

  Visual for n = 4:
  i=0: j runs 1 time    *
  i=1: j runs 2 times   **
  i=2: j runs 3 times   ***
  i=3: j runs 4 times   ****
  Total: 10 = 4*5/2

  Why this matters:
  Many real-world nested loops don't iterate the full n×n.
  But if the total operations sum to n(n+1)/2, it's still O(n²).

  Example: Comparing every pair in an array (like in bubble sort)
  has exactly this pattern — looks "cheaper" but is still quadratic.
```
  **Real-world example:** Comparing every user pair in a social network for friend suggestions.
    With 10,000 users, that's ~50 million comparisons. Recognizing this as O(n²) tells you it won't scale — you need a different approach.
---
 */



// 🟪 ISSUE 4: Multiple Expressions — Rank and Simplify
// **Task:** Rank these expressions from fastest to slowest growth, then simplify each to Big O notation.
/*
    a) 3n³ + 2n² + 100
    b) 2ⁿ + n³
    c) n + n/2 + n/4 + n/8
    d) 5 * log(n) + 3
    e) n * log(n) + n
    f) 100000
 */



/*
 SOLUTION
  Simplification:
  a) 3n³ + 2n² + 100           → O(n³)     // highest power dominates
  b) 2ⁿ + n³                   → O(2ⁿ)     // exponential dominates polynomial
  c) n + n/2 + n/4 + n/8       → O(n)      // geometric series ≈ 2n → O(n)
  d) 5 * log(n) + 3            → O(log n)  // drop constants
  e) n * log(n) + n            → O(n log n) // n log n dominates n
  f) 100000                    → O(1)       // no dependency on input

  Ranking (fastest → slowest):
  O(1) < O(log n) < O(n) < O(n log n) < O(n³) < O(2ⁿ)
    f        d         c        e           a        b

  Expression (c) is the tricky one.
  n + n/2 + n/4 + n/8 = n(1 + 1/2 + 1/4 + 1/8) = n * 1.875
  This geometric series converges to 2n regardless of how many terms.
  In practice, you'll see this pattern in algorithms that halve the
  remaining work each step but still touch each element (like certain
  heap operations).
 */


// 🟪 ISSUE 5: Real Code — Find the Bottleneck
// Task: This function has multiple parts. Identify the time complexity of each part and the overall complexity. Then optimize the bottleneck.

function findDuplicates(arr) {
  // part 1: sort the array
  const sortedArr = arr.slice.sort((a, b) => a - b);

  // part 2: find duplicates by comparing neighbors
  const duplicates = [];
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] === sortedArr[i - 1]) {
      // part 3: check if already added
      if (!duplicates.includes(sortedArr[i])) {
        duplicates.push(sorted[i]);
      }
    }
  }
  return duplicates;
}

/*
SOLUTION A: Analyze the original
  Part 1: arr.slice() is O(n), .sort() is O(n log n)   → O(n log n)
  Part 2: Single loop through array                      → O(n)
  Part 3: .includes() inside the loop is O(d) where d = duplicates found
          Worst case: d grows up to n → inner .includes() makes Part 2+3 → O(n²)

  Overall: O(n²) — Part 3 is the hidden bottleneck.

  The sort was fine at O(n log n), but the .includes() inside the loop
  silently made it quadratic. This is a VERY common bug in production code.
 */


// SOLUTION B: Fix with Set (O(n log n))
function findDuplicatesSorted(arr) {
  const sorted = arr.slice().sort((a, b) => a - b); // O(n log n)
  const duplicates = [];
  const seen = new Set(); // <-- FIX: Set.has() is O(1), not O(n)

  for (let i = 1; i < sorted.length; i++) {  // O(n)
    if (sorted[i] === sorted[i - 1] && !seen.has(sorted[i])) {
      duplicates.push(sorted[i]);
      seen.add(sorted[i]);
    }
  }
  return duplicates;
  // Total: O(n log n) — sort is now the bottleneck, which is fine
}


// SOLUTION C: Skip sorting entirely (O(n))
function findDuplicatesOptimal(arr) {
  const frequency = new Map();
  const duplicates = [];

  for (const val of arr) {  // O(n)
    frequency.set(val, (frequency.get(val) || 0) + 1);
  }

  for (const [val, count] of frequency) {  // O(n) worst case
    if (count > 1) {
      duplicates.push(val);
    }
  }
  return duplicates;
  // Total: O(n) time, O(n) space
}










