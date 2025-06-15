// 🎯 #1 Backspace String Compare
/*
🔗 Reference leetcode: https://leetcode.com/problems/backspace-string-compare/description/
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
Note that after backspacing an empty text, the text will continue empty.

Example 1:
Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".

Example 2:
Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".

Example 3:
Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".


Constraints:
1 <= s.length, t.length <= 200
s and t only contain lowercase letters and '#' characters.


* */

const string1 = "ab#z"
const string2 = "az#z"

// ✅ SOLUTION I

const buildString = function (string) {
  const builtString = [];
  for (let p = 0; p < string.length; p++) {
    if (string[p] !== '#') {
      builtString.push(string[p]);
    } else {
      builtString.pop();
    }
  }

  return builtString;
}

var backspaceCompare = function (S, T) {
  const finalS = buildString(S);
  const finalT = buildString(T);

  if (finalS.length !== finalT.length) {
    return false
  } else {
    for (let p = 0; p < finalS.length; p++) {
      if (finalS[p] !== finalT[p]) {
        return false
      }
    }
  }

  return true;
};

console.log(backspaceCompare(string1, string2));


// ✅ SOLUTION II OPTIMAL V1
// @param {string} S
// @param {string} T
// return {boolean}

const backspaceCompareOptimal = function (S, T) {
  let p1 = S.length - 1, p2 = T.length - 1;
  while(p1 >= 0 || p2 >= 0) {
    console.log('🟣 p1, p2', {p1, p2})
    if(S[p1] === '#' || T[p2] === '#') {
      if (S[p1] === '#') {
        let backCount = 2;
        while (backCount > 0) {
          p1--;
          backCount--;
          if (S[p1] === '#') {
            backCount += 2;
          }
        }
      }
      if (T[p2] === '#') {
        let backCount = 2;

        while (backCount > 0) {
          p2--;
          backCount--;
          if (T[p2] === '#') {
            backCount = backCount + 2;
          }
        }
      }
    } else {
      if (S[p1] !== T[p2]) {
        return false
      } else {
        p1--;
        p2--;
      }
    }
  }
  return true
}

console.log(backspaceCompareOptimal(string1, string2));



// ✅ SOLUTION II OPTIMAL V2
const backspaceCompareFinal = function (s, t) {
  let p1 = s.length - 1, p2 = t.length - 1;
  while (p1 >= 0 || p2 >= 0) {
    console.log('🟢 p1, p2', { p1, p2 })
    if (s[p1] === '#' || t[p2] === '#') {
      if (s[p1] === '#') {
        let backTrackCount = 2;
        while (backTrackCount > 0) {
          p1--;
          backTrackCount--;
          if (s[p1] === '#') backTrackCount += 2;
        }
      }
      if (t[p2] === '#') {
        let backTrackCount = 2;
        while (backTrackCount > 0) {
          p2--;
          backTrackCount--;
          if (t[p2] === '#') backTrackCount += 2;
        }
      }
    } else {
      if (s[p1] !== t[p2]) return false;
      else {
        p1--;
        p2--;
      }
    }
  }
  return true;

}

console.log(backspaceCompareFinal(string1, string2));





