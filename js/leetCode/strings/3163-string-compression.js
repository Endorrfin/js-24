/*
3163. String Compression III

Given a string word, compress it using the following algorithm:

Begin with an empty string comp. While word is not empty, use the following operation:
Remove a maximum length prefix of word made of a single character c repeating at most 9 times.
Append the length of the prefix followed by c to comp.
Return the string comp.

Example 1:
Input: word = "abcde"

Output: "1a1b1c1d1e"
Explanation:
Initially, comp = "". Apply the operation 5 times, choosing "a", "b", "c", "d", and "e" as the prefix in each operation.
For each prefix, append "1" followed by the character to comp.

Example 2:
Input: word = "aaaaaaaaaaaaaabb"
Output: "9a5a2b"
Explanation:

Initially, comp = "". Apply the operation 3 times, choosing "aaaaaaaaa", "aaaaa", and "bb" as the prefix in each operation.
For prefix "aaaaaaaaa", append "9" followed by "a" to comp.
For prefix "aaaaa", append "5" followed by "a" to comp.
For prefix "bb", append "2" followed by "b" to comp.


Constraints:
1 <= word.length <= 2 * 105
word consists only of lowercase English letters.
 */



function compressedString(word) {
  debugger;
  const n = word.length;
  let comp = '';
  let prev = word.charAt(0);
  let count = 1;

  for (let i = 1; i < n; i++) {
    const current = word.charAt(i);
    if (prev === current && count < 9) {
      count++;
    } else {
      comp += count + prev;
      prev = current;
      count = 1;
    }
  }

  comp += count + prev;
  return comp;
}

console.log(compressedString('abcde'));
console.log(compressedString('aaaaaaaaaaaaaabb'));





function compressedString1(word) {
  let res = '';
  let i = 0;

  while (i < word.length) {
    const c = word[i];
    let characterCount = 1;

    while (i + 1 < word.length && word[i] === word[i - 1]) {
      characterCount++
      i++

    }

    while (characterCount > 9) {
      res += '9' + c
      characterCount -= 9

    }

    if (characterCount > 0) {
      res += characterCount + c;
    }

    i++
  }

  return res
}










// class Solution:
//   def compressedString(sef, word: str) => str:
//     res = ''
//     i = 0
//     while i < len(world):
//       c = word[i]
//       cc = 1
//
//       while i + 1 < len(word) and word[i] == word[i + 1]:
//         cc +=1
//         i +=1
//
//       while cc > 9:
//         res += '9' + c
//         cc -= 9
//
//       if cc > 0:
//         res += str(cc) + c
//       i += i
//     return res





//
// public String compressedString(String word) {
//   int n = word.length();
//   StringBuilder comp = new StringBuilder();
//   char pre = word.charAt(0);
//   in count = 1;
//
//   for (int i = 1; i < n; i++) {
//     char curr = word.charAt(i);
//     if (prev == curr && count < 9) {
//       count++;
//     } else {
//       comp.append(Integer.toString(count));
//       comp.append(prev);
//       perv = curr;
//       count = 1;
//     }
//   }
//
//   comp.append(Integer.toString(count));
//   comp.append(prev);
//   return comp.toString();
// }

















