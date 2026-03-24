
/*
  Logarithmic — O(log n)
  A logarithm answers: "How many times must I divide n by 2 (or some base) to reach 1?"
    log₂(8)   = 3      →  8 → 4 → 2 → 1  (3 divisions)
    log₂(1024) = 10    →  1024 halved 10 times = 1
    log₂(1,000,000) ≈ 20


    In Big O, the base doesn't matter (log₂ n, log₃ n, log₁₀ n differ only by a constant), so we just write O(log n).
The signature pattern: If each step eliminates a fraction of the remaining work (typically half), it's O(log n).
You'll see this in binary search, balanced tree traversal, and exponentiation by squaring.

Linearithmic — O(n log n)
This means: "Do an O(log n) operation for each of n elements" — or equivalently — "divide the problem in half repeatedly, but at each level process all n elements."
This is the complexity of efficient sorting (merge sort, quick sort average case) and is the theoretical lower bound for comparison-based sorting.

  O(n log n) at scale:
  n = 1,000       → ~10,000 operations
  n = 1,000,000   → ~20,000,000 operations
  n = 1,000,000,000 → ~30,000,000,000 operations (still feasible)

  How to recognize each:
Pattern                                             Complexity    Example
Halve input each step, do O(1) work                 O(log n)      Binary search
Halve input each step, do O(n) work at each level   O(n log n)    Merge sort
For each element, do a binary search                O(n log n)    Search each item in sorted array
Balanced tree: one traversal root→leaf              O(log n)      BST lookup
Balanced tree: visit every node                     O(n)          Full tree traversal (NOT n log n)

 */



// 🟪 ISSUE 1: Recognizing the Halving Pattern
// 🙇‍♂️ Task: Determine the time complexity of each function. Focus on how the loop variable changes.

// --- Function A ---
function halvingLoop(n) {
  let i = n;
  while (i > 1) {
    console.log(i);
    i = Math.floor(i / 2);
  }
}

// --- Function B ---
function doublingLoop(n) {
  let i = 1;
  while (i < n) {
    console.log(i);
    i *= 2;
  }
}

// --- Function C ---
function triplingLoop(n) {
  let i = 1;
  while (i < n) {
    console.log(i);
    i *= 3;
  }
}

// --- Function D ---
function nestedHalving(n) {
  for (let i = 0; i < n; i++) {
    let j = n;
    while (j > 1) {
      j = Math.floor(j / 2);
    }
  }
}

// --- Function E ---
function logSquared(n) {
  let i = 1;
  while (i < n) {
    let j = 1;
    while (j < n) {
      j *= 2;
    }
    i *= 2;
  }
}

// 🎯 SOLUTION
// Function A: O(log n)
// n → n/2 → n/4 → ... → 1
// Dividing by 2 each step = log₂(n) steps.

// Function B: O(log n)
// 1 → 2 → 4 → 8 → ... → n
// Doubling to REACH n is the mirror of halving FROM n.
// Same number of steps: log₂(n).

// Function C: O(log n)
// 1 → 3 → 9 → 27 → ... → n
// Tripling each step = log₃(n) steps.
// log₃(n) = log₂(n) / log₂(3) — differs by constant.
// Big O drops constants → still O(log n).

// Function D: O(n log n)
// Outer loop: n iterations.
// Inner loop: halves from n to 1 = log(n) iterations.
// Nested = multiply → n × log(n) = O(n log n).
// This is the "for each element, do a log(n) operation" pattern.

// Function E: O(log²n) — "log squared n"
// Outer: i doubles from 1 to n → log(n) iterations.
// Inner: j doubles from 1 to n → log(n) iterations.
// Nested = multiply → log(n) × log(n) = O(log²n).
// This is rare but shows up in some divide-and-conquer algorithms.
// Note: O(log²n) is MUCH faster than O(n). For n = 1,000,000,
// log²n ≈ 400 vs n = 1,000,000.



// 🟪 ISSUE 2: Why Merge Sort is O(n log n)
// 🙇‍♂️ Task: Implement merge sort. Then walk through why its complexity is O(n log n) time and O(n) space — not O(n log n) space.

// 🎯 SOLUTION

function mergeSort(arr) {
  // Base case: arrays of length 0 or 1 are already sorted
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Append remaining elements
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

// TIME ANALYSIS — O(n log n):

// Visualize the recursion as levels:

// Level 0:  [8 elements]                    → 1 array of size 8
// Level 1:  [4] [4]                         → 2 arrays of size 4
// Level 2:  [2] [2] [2] [2]                 → 4 arrays of size 2
// Level 3:  [1] [1] [1] [1] [1] [1] [1] [1] → 8 arrays of size 1

// Levels: log₂(n) = 3 (we halve until size 1)
// Work per level: merge touches ALL n elements exactly once

// Total: n work × log(n) levels = O(n log n)

// SPACE ANALYSIS — O(n), NOT O(n log n):

// Common mistake: "log(n) levels × n elements per level = O(n log n) space"

// Why it's wrong: levels don't exist simultaneously.
// The recursion goes depth-first:
//   - At any moment, only ONE level's merge buffers are active
//   - After merging, the buffer from the previous call is freed

// Max simultaneous memory:
//   - Call stack: O(log n) frames
//   - Merge buffer at deepest active merge: O(n) in the final merge
//   - Total: O(n) + O(log n) = O(n)

// The slices (.slice()) do add temporary O(n) per level, but only one
// level's slices exist at a time, so it's still O(n) total.




// 🟪 ISSUE 3: Binary Search — Build It, Break It, Analyze It
// 🙇‍♂️ Task: Implement binary search iteratively and recursively. Analyze time and space for both. Then handle three real-world edge cases that break naive implementations.

// 🎯 Solution A — Iterative: O(log n) time, O(1) space

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // IMPORTANT: avoid integer overflow with this formula
    // Math.floor((left + right) / 2) can overflow in other languages,
    // but in JS numbers are floating point, so both work.
    // Still, this form is a best practice across languages:
    const mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
  // Time: O(log n) — halves search space each step
  // Space: O(1) — only 3 variables
}


// 🎯 Solution B — Recursive: O(log n) time, O(log n) space

function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1;

  const mid = left + Math.floor((right - left) / 2);

  if (arr[mid] === target) return mid;
  if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, right);
  }
  return binarySearchRecursive(arr, target, left, mid - 1);

  // Time: O(log n) — same halving logic
  // Space: O(log n) — each recursive call adds a stack frame,
  //        and we recurse log(n) times.
  //
  // The iterative version is preferred in production precisely
  // because it avoids this O(log n) stack cost.
}

// Edge Case 1: Empty array
binarySearch([], 5); // → -1 (left = 0, right = -1, loop doesn't execute)

// Edge Case 2: Duplicates — find FIRST occurrence
function binarySearchFirst(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === target) {
      result = mid;       // Record this match...
      right = mid - 1;    // ...but keep searching LEFT for earlier occurrence
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
  // Standard binary search returns ANY matching index.
  // This variant finds the FIRST one — crucial for range queries.
}

// Edge Case 3: Off-by-one with `left < right` vs `left <= right`
//
// Using `left < right` (wrong for standard search):
//   arr = [5], target = 5 → left=0, right=0
//   Loop condition `0 < 0` is FALSE → returns -1 (BUG!)
//
// Rule: Use `left <= right` for standard binary search.
// Use `left < right` only in specific variants (like finding boundaries)
// where you intentionally converge left and right to the same index.




// 🟪 ISSUE 4: Exponentiation — From O(n) to O(log n)
// 🙇‍♂️ Task: Compute base^exponent without using Math.pow or **. Start with the obvious O(n) approach, then optimize to O(log n) using exponentiation by squaring.
//     Explain why this matters in real cryptographic and mathematical applications.

// 🎯 Solution A — Linear: O(n) time

function powerLinear(base, exp) {
  let result = 1;
  for (let i = 0; i < exp; i++) {
    result *= base;
  }
  return result;
  // Time: O(n) where n = exp
  // Multiplies `exp` times. For exp = 1,000,000 → 1 million multiplications.
}


// 🎯 Solution B — Exponentiation by squaring: O(log n) time

function powerLog(base, exp) {
  // Handle edge cases
  if (exp === 0) return 1;
  if (exp < 0) return 1 / powerLog(base, -exp);

  let result = 1;
  let current = base;

  while (exp > 0) {
    // If exp is odd, multiply result by current base
    if (exp % 2 === 1) {
      result *= current;
    }
    // Square the base, halve the exponent
    current *= current;
    exp = Math.floor(exp / 2);
  }

  return result;
  // Time: O(log n) — exp is halved each iteration
  // Space: O(1)
}

// WALKTHROUGH: powerLog(2, 10)

// Step 1: exp=10 (even) → current=2→4,    exp=5,   result=1
// Step 2: exp=5  (odd)  → result=1*4=4,   current=4→16,  exp=2
// Step 3: exp=2  (even) → current=16→256,  exp=1,  result=4
// Step 4: exp=1  (odd)  → result=4*256=1024, exp=0

// 2^10 = 1024 ✓ — only 4 steps instead of 10

// WHY IT WORKS — the math:
// 2^10 = (2^5)^2
// 2^5  = 2 * (2^2)^2
// 2^2  = (2^1)^2

// At each step: if exp is even → square; if odd → multiply once then square.
// This reduces the problem size by half each step → O(log n).



// In cryptography (RSA, Diffie-Hellman), you compute:
//   base^exp mod prime
// where exp can be a 2048-bit number (~10^616).
//
// O(n) approach: 10^616 multiplications — literally impossible.
// O(log n) approach: ~2048 multiplications — instant.
//
// This is called "modular exponentiation" and it's why
// public-key cryptography is feasible at all.

function modPow(base, exp, mod) {
  let result = 1;
  base = base % mod;

  while (exp > 0) {
    if (exp % 2 === 1) {
      result = (result * base) % mod;
    }
    exp = Math.floor(exp / 2);
    base = (base * base) % mod;
  }
  return result;
}
// Same O(log n) pattern, just adding `% mod` to prevent number overflow.









