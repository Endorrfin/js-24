/**
 * Напишіть функцію, яка приймає рядок і повертає новий, в якому всі симводи, що дублюються, будуть видалені.
 */

// -------------- Solution 1.1 --------------
function removeDuplicates (str) {
  const res = [];
  const map = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!map[char]) {
      map[char] = true;
      res.push(char)
    }
  }

  return res.join('');
}

// console.log('removeDuplicates', removeDuplicates('Antananarivo'));
// console.log('removeDuplicates', removeDuplicates([10, 20, 30, 40, 50, 10]));



// -------------- Solution 1.2 --------------
function removeDupes(str) {
  return Array.from(new Set(str)).join('');
}

// console.log('removeDupes', removeDupes('abcd'));
// console.log('removeDupes', removeDupes('aabbccdd'));
// console.log('removeDupes', removeDupes('abcddbca'));
// console.log('removeDupes', removeDupes('abababcdcdcd'));
// console.log('removeDupes', removeDupes('dcbaabcdqr'));


// -------------- Solution 1.3 --------------
const array = [1, 4, 2, 4, 4, 3, 4];
const uniqueElements = [... new Set(array)];
// console.log('unique elements in array', uniqueElements);
