/*
Написать функцию, которая параметром принимает строку, а на выходе дает самое короткое слово содержащееся в строке.
*/

// ------- SOLUTION 1.1 -------
// !Base
function findShort(string) {
    var wordsArray = string.split(' ');
    var sortedWordsArray = wordsArray.sort(function (a, b) {
        return a.length - b.length;
    });

    return sortedWordsArray[0];
}
// console.log(findShort('Do you want to send information and documents about your company'));


// ------- SOLUTION 1.2 -------
// !Advanced
function findShortAdvanced(string) {
    return string
        .split(' ')
        .sort(function (a, b) {
            return a.length - b.length;
        })[0];
}

// console.log(findShortAdvanced('You can also send an application to connect your Project site below'));


// ------- SOLUTION 1.3 -------
// !ES6 - самое длинное слово в строке
const findShortEs6 = string =>
    string
    .split(' ')
    .sort((a, b) => b.length - a.length)[0];

// console.log(findShortEs6('You can also send a document to connect your Project site below longestWordInLine'));


// ------- SOLUTION 1.4 -------
function findShortestLength(string) {
    return string
        .split(' ')
        .sort(function (a, b) {
            return a.length - b.length;
        })[0];
}

// console.log(findShortAdvanced('You can also send an application to connect your Project site below'));


// ------- SOLUTION 1.5 -------
function findLongestWordLength(str) {
    const arrOfWords = str.split(' ');
    const arrOfLengths = arrOfWords.map(item => item.length);

    return Math.max(...arrOfLengths);
}

// console.log(findLongestWordLength('You can also send an application to connect your Project site below'));
