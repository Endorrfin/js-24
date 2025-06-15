// 🎯 #20. Valid Parentheses

/*
🔗 Reference leetcode: https://leetcode.com/problems/valid-parentheses/description/
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
  1. Open brackets must be closed by the same type of brackets.
  2. Open brackets must be closed in the correct order.
  3. Every close bracket has a corresponding open bracket of the same type.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([])"
Output: true

Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

Hint 1
Use a stack of characters.

Hint 2
When you encounter an opening bracket, push it to the top of the stack.

Hint 3
When you encounter a closing bracket, check if the top of the stack was the opening for it. If yes, pop it from the stack. Otherwise, return false.
* */

const Parens = {
  '(':')',
  '[':']',
  '{': '}'
}


// ✅ SOLUTION I
const isValidParentheses = function(s) {
  if(s.length === 0) return true;
  const stack = [];
  for (let i=0; i<s.length; i++){
    if(params[s[i]]){
      stack.push(s[i]);
    }else{
      const leftBracket = stack.pop()
      const correctBracket = Parens[leftBracket]
      if(s[i] !== correctBracket) return false;
    }
  }
  return stack.length === 0;
}




// ✅ SOLUTION II OPTIMAL
var isValidParentheses2 = function(str) {
  const stack = [];
  const characters = { ')': '(', '}': '{', ']': '['};
  for (const char of str) {
    if (!characters[char]){
      stack.push(char);
    }
    else if (stack.pop() !== characters[char]){
      return false;
    }
  }
  return stack.length === 0;
};

const validString = '({[]}{})';
const inValidString = "}}{{";
console.log(isValidParentheses2(validString)); // Output: true


