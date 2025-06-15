
// 🎯 #3.1 125. Valid Palindrome

/*
🔗 https://leetcode.com/problems/valid-palindrome-ii/description/

Given a string s, return true if the s can be palindrome after deleting at most one character from it.

Example 1:
Input: s = "aba"
Output: true

Example 2:
Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.

Example 3:
Input: s = "abc"
Output: false


Constraints:
1 <= s.length <= 105
s consists of lowercase English letters.
*/

const string = "A man, a plan, a canal: Panama"

// ✅ SOLUTION I

var validSubPalindrome = function(s, start, end) {
  while (start < end) {
    if (s[start] !== s[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

var validPalindrome = function(s) {
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    if (s[start] !== s[end]) {
      return validSubPalindrome(s, start + 1, end) || validSubPalindrome(s, start, end - 1);
    }
    start++;
    end--;
  }
  return true;
};

console.log(validPalindrome(string));











