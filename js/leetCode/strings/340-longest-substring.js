
/*
340. Longest Substring with At Most K Distinct Characters
Given a string, find the length of the longest substring T that contains at most k distinct characters.

Example 1:

Input: s = "eceba", k = 2
Output: 3
Explanation: T is "ece" which its length is 3.
Example 2:

Input: s = "aa", k = 1
Output: 2
Explanation: T is "aa" which its length is 2.
* */


// ------------ Solution 1.1 ------------

const s = "eceba";
const k = 2;

const lengthOfLongestSubstringKDistinct = function(s, k) {
  let windowStart = 0;
  const soFar = new Map();
  let max = 0;

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    let rightChar = s[windowEnd];

    if (!soFar.get(rightChar)) soFar.set(rightChar, 1);
    else soFar.set(rightChar, soFar.get(rightChar) + 1);

    while(soFar.size > k) {
      let leftChar = s[windowStart];

      if (soFar.get(leftChar) > 1) soFar.set(leftChar, soFar.get(leftChar) - 1);
      else soFar.delete(leftChar);

      windowStart++;
    }

    max = Math.max(max, (windowEnd - windowStart) + 1);
  }

  return max;
}



// console.log('---> initial string <--- ', stringA, stringB);
// console.log(lengthOfLongestSubstringKDistinct(s, k));
// console.log('---> after manipulation <--- ', stringA, stringB);
