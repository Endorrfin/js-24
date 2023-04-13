/*
Палиндро́м — число, буквосочетание, слово или текст, одинаково читающееся в обоих направлениях. 
Например, число 101; слова «топот» и фин. saippuakivikauppias (продавец мыла; торговец щёлоком) — 
самое длинное слово-палиндром в мире; текст «а роза упала на лапу Азора» и пр.
*/

// !Base
function isPalindrome(string) {
    var arr = string.split('');
    console.log('array', arr);
    var reversArray = arr.reverse();
    console.log('reversArray', reversArray);
    var convertToString = reversArray.join('');
    console.log('convertToStrin', convertToString);
    var result = string === convertToString;
    console.log('result', result);
    return result;
}
// console.log(isPalindrome('saippuakivikauppias')); // true
// console.log(isPalindrome('Rur')); // false


// !Advanced
function isPalindromeShort(str) {
    // console.log(str = str.split('').reverse().join(''));
    return str = str.split('').reverse().join('');
}

// !ES6
const isPalindromeEs6 = str => str === str.split('').reverse().join('');
// console.log(str === str.split('').reverse().join(''));