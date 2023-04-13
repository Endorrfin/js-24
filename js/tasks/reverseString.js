/*
Получив строку, необходимо развернуть её.
*/
// SOLUTION I
function reverseString(str) {
  let reversedString = '';
  for (let i = str.length; i > 0; i--) {
    reversedString += str.substring(i, i-1);
  }
  return reversedString;
}

// console.log(reverseString('Avatar'));


// SOLUTION II
function reverseString2(str) {
  let reversedString = '';
  for (let i = str.length-1; i >= 0; i--) {
    reversedString += str.charAt(i);
  }
  return reversedString;
}

// console.log(reverseString2('Elephant'));


// SOLUTION III
function reverseString3(str) {
  return str.split('').reverse().join('');
}

// console.log(reverseString3('Ukraine'));
