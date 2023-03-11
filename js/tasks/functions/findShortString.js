/*
Написать функцию, которая параметром принимает строку, а на выходе дает самое короткое слово содержащееся в строке.
*/

// !Base
function findShort(string) {
    var wordsArray = string.split(' ');
    var sortedWordsArray = wordsArray.sort(function (a, b) {
        return a.length - b.length;
    });

    return sortedWordsArray[0];
}
// console.log(findShort('Do you want to send information and documents about your company'));


// !Advanced
function findShortAdvanced(string) {
    return string
        .split(' ')
        .sort(function (a, b) {
            return a.length - b.length;
        })[0];
}

// console.log(findShortAdvanced('You can also send an application to connect your Project site below'));


// !ES6 - самое длинное слово в строке
const findShortEs6 = string =>
    string
    .split(' ')
    .sort((a, b) => b.length - a.length)[0];

// console.log(findShortEs6('You can also send a document to connect your Project site below longestWordInLine'));




// arr1 = [1, 2, 3, 4, 5, 6]
// let result = [];
// let z = 7
// for (let i = 0; i < arr1.length; i++) {
//     if (z === i[0] + i) {

//     } else if (z = i[1] + i) {

//     }

// }

// return z ===



function findShortLength(string) {
    return string
        .split(' ')
        .sort(function (a, b) {
            return a.length - b.length;
        })[0];
}

// console.log(findShortAdvanced('You can also send an application to connect your Project site below'));