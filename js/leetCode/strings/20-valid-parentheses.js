/*
20. Valid Parentheses
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:
Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
* */

const s = "()"; // true
const s2 = "()[]{}"; // true
const s3 = "(]"; // false
const s4 = "{[()]}"; // true
const s5 = "{[[]{}]]()}"; // true




// ------------ Solution 1.1 ------------
const isValidParentheses = function(s) {
  const stack = [];
  const parens = '() {} []';
  let i = 0;

  while (i < s.length) {
    stack.push(s[i]);
    i++;

    let open = stack[stack.length - 2];
    let closed = stack[stack.length - 1];

    let potParents = open + closed;

    if (parens.includes(potParents)) {
      stack.pop();
      stack.pop();
    }
  }
  return stack.length === 0;
}



// console.log('---> initial data <--- ', s);
// console.log(isValidParentheses(s3));
// console.log('---> data after manipulation <--- ', s);



// ------------ Solution 1.2 (time complexity O(n) | space complexity O(n) ------------
function isValidBrackets(string) {
  let stack = [];
  let mapBrackets = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (let i = 0; i < string.length; i++) {
    const current = string[i];

    if(isClosedBracket(current)) {
      if (mapBrackets[current] !== stack.pop()) return false;
    } else {
      stack.push(current);
    }
  }

  return stack.length === 0;
}


function isClosedBracket (ch) {
  // return[')', ']', '}'].includes(ch);
  return[')', ']', '}'].indexOf(ch) > - 1;
}


// console.log(s, isValidBrackets(s));
// console.log(s2, isValidBrackets(s2));
// console.log(s3, isValidBrackets(s3));
// console.log(s4, isValidBrackets(s4));
// console.log(s5, isValidBrackets(s5));
