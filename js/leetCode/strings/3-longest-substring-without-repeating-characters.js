/*
3. Longest Substring Without Repeating Characters
Given a string s, find the length of the longest
substring
 without repeating characters.



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


// ------------ Solution 1.1 ------------
const s = "abcabcbb";
const s2 = "bbbbb";
const s3 = "pwwkew";

const lengthOfLongestSubstring = function(s) {
  let max = 0;
  let windowStart = 0;
  const soFar = {};

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    let rightChar = s[windowEnd];
    soFar[rightChar] = soFar[rightChar] + 1 || 1;

    while(soFar[rightChar] > 1) {
      let leftChar = s[windowStart];

      if (soFar[leftChar] > 1) {
        soFar[leftChar]--;
      } else {
        delete soFar[leftChar];
      }
      windowStart++
    }
    max = Math.max(max, (windowEnd - windowStart) + 1)
  }

  return max
}



// console.log('---> initial data <--- ', s);
// console.log(lengthOfLongestSubstring(s2));
// console.log('---> data after manipulation <--- ', s);
