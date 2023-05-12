

/*
796. Rotate String
Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

A shift on s consists of moving the leftmost character of s to the rightmost position.
For example, if s = "abcde", then it will be "bcdea" after one shift.

Example 1:

Input: s = "abcde", goal = "cdeab"
Output: true
Example 2:

Input: s = "abcde", goal = "abced"
Output: false


Constraints:

1 <= s.length, goal.length <= 100
s and goal consist of lowercase English letters.
* */


// ------------ Solution 1.1 ------------
// const stringA = "abcde";
// const stringB = "cdeab";

const stringA = "abcde";
const stringB = "abced";

const rotateString = function(A, B) {
  if (A.length !== B.length) return false;
  if (A.length === 0 && B.length === 0) return true;

  A = A + A;
  return A.includes(B);
}



// console.log('---> initial data <--- ', stringA, stringB);
// console.log(rotateString(stringA, stringB));
// console.log('---> data after manipulation <--- ', stringA, stringB);
