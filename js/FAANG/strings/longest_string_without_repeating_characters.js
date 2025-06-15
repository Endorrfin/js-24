// 🎯 #2 Longest Substring Without Repeating Characters
/*
🔗 Reference leetcode: https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
🔗 Reference Explanation concept: https://betterexplained.com/articles/learning-how-to-count-avoiding-the-fencepost-problem/
Given a string s, find the length of the longest substring without duplicate characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Constraints:
0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
* */

const string = "abccabb"

// ✅ SOLUTION I
// Time: O(N^2);
// Space: O(N)

const lengthOfLongestSubstring = function(s) {
  if(s.length <= 1) return s.length;

  let longest = 0;

  for(let left = 0; left < s.length; left++) {
    let seenChars = {}, currentLength = 0;

    for(let right = left; right < s.length; right++) {
      const currentChar = s[right];

      if(!seenChars[currentChar]) {
        currentLength++;
        seenChars[currentChar] = true;
        longest = Math.max(longest, currentLength);
      } else {
        break;
      }
    }
  }

  return longest;
};

console.log(lengthOfLongestSubstring(string));



// ✅ SOLUTION II OPTIMAL V

const lengthOfLongestSubstringOptimal = function(s) {
  if(s.length <= 1) return s.length;

  const seen = {};
  let left = 0, longest = 0;

  for(let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    const previouslySeenChar = seen[currentChar];

    if(previouslySeenChar >= left) {
      left = previouslySeenChar + 1;
    }

    seen[currentChar] = right;

    longest = Math.max(longest, right - left + 1);
  }

  return longest;
};

console.log(lengthOfLongestSubstringOptimal(string));







