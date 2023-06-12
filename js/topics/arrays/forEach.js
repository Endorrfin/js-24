// ============ FOREACH ============

// ------------ Solution 1.1 with for ------------
const arrayItems = ['item1', 'item2', 'item3'];
const copyItems = [];
for (let i = 0; i < arrayItems.length; i++) {
    copyItems.push('New' + arrayItems[i]);
}

// console.log('copyItems', copyItems);


// ------------ Solution 1.2 with forEach ------------
const newItems = [];
arrayItems.forEach(function(element, index, array) {
    newItems.push(index + 'New' + element);
});

// console.log('newItems', newItems);




const items = ['item1', 'item2', 'item3'];
const copy = [];
const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayCharacters = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

// Решение циклом for
for (let i = 0; i < items.length; i++) {
    // console.log(items[i]);
    copy.push('New' + items[i])
}
// console.log(copy);


// Решение forEach
items.forEach(function (elem, index, array) {
    copy.push(index, +'New' + elem)
});

// console.log(copy);


// -------------- Example 1.1 --------------
/*
    Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
    Examples:
        doubleValues([1,2,3]) // [2,4,6]
        doubleValues([5,1,2,3,10]) // [10,2,4,6,20]
*/

function doubleValues(arr) {
    const newArray = [];
    arr.forEach((element) => {
        newArray.push(element * 2);
    });
    return newArray
}

// console.log(doubleValues(arrayNumbers));



// -------------- Example 1.2 --------------
/*
    Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
    Examples:
        onlyEvenValues([1,2,3]) // [2]
        onlyEvenValues([5,1,2,3,10]) // [2,10]
*/

function getOnlyEvenValues(arr) {
    const evenArray = [];
    arr.forEach((element) => {
        if (element % 2 === 0) {
            evenArray.push(element);
        }
    });
    return evenArray;
}

// console.log(getOnlyEvenValues(arrayNumbers));



// -------------- Example 1.3 case I --------------
/*
    Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
    Examples:
        showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
        showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']
*/

function getFirstAndLastCharacters(arr) {
    const firstAndLastCharacter = [];
    arr.forEach((element, index) => {
        firstAndLastCharacter.push(element.slice(0, 1) + element.slice(-1));
    });
    return firstAndLastCharacter;
}

// console.log(getFirstAndLastCharacters(arrayCharacters));


// -------------- Example 1.3 case II --------------
function showFirstAndLast(arr){
    const newArr = [];
    arr.forEach((element) => {
        newArr.push(element[0] + element[element.length-1])
    });
    return newArr;
}

// console.log(showFirstAndLast(arrayCharacters));



// -------------- Example 1.4 case I --------------
/*
    Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object
    Examples:
        addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}, {name: 'Ben'}, {name: 'Bri'}, {name: 'Kevin'}], 'title', 'instructor')
        [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
*/

function addKeyAndValue(arr, key, value) {
    const newArray = [];
    let obj = {};

    arr.forEach((element) => {
        obj = element;
        obj[key] = value;
        newArray.push(obj);
    });
    return newArray;
}

// console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}, {name: 'Ben'}, {name: 'Bri'}, {name: 'Kevin'}], 'title', 'instructor'));


// -------------- Example 1.4 case II --------------
function addKeyAndValueOptimize(array, key, value){
    array.forEach((val) => {
        val[key] = value;
    });
    return array;
}

// console.log(addKeyAndValueOptimize([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}, {name: 'Ben'}, {name: 'Bri'}, {name: 'Kevin'}], 'title', 'instructor'));



// -------------- Example 1.5 case I --------------
/*
    Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string.
    This function should be case insensitive so a lowercase letter and uppercase letter should count
    Examples:
        vowelCount('Elie') // {e:2,i:1};
        vowelCount('Tim') // {i:1};
        vowelCount('Matt') // {a:1})
        vowelCount('hmmm') // {};
        vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str) {
    const strArr = str.split('');
    const obj = {};
    const vowels = /[AaEeIiOoUu]/;
    let result;

    strArr.forEach((val) => {
        result = vowels.exec(val.toLowerCase());
        if (result !== null) {
            if (!obj.hasOwnProperty(result[0])) {
                obj[result[0]] = 1;
            } else {
                obj[result[0]]++;
            }
        }
    });
    return obj;
}

// console.log('case I', vowelCount('Antananarivo'));
// console.log('case I', vowelCount('Madagascar'));
// console.log('case I', vowelCount('Ukraine'));



// -------------- Example 1.5 case II --------------
function vowelCountOptimize(str) {
    const splitArr = str.toLowerCase().split("");
    const obj = {};
    const vowels = "aeiou";

    splitArr.forEach((letter) => {
        if (vowels.includes(letter) || vowels.indexOf(letter) !== -1) {
            if (obj[letter]) {
                obj[letter]++;
            } else {
                obj[letter] = 1;
            }
        }
    });
    return obj;
}

// console.log('case II', vowelCountOptimize('Antananarivo'));
// console.log('case II', vowelCountOptimize('Madagascar'));
// console.log('case II', vowelCountOptimize('Ukraine'));


// -------------- Example 2.1 - case I - 2.1 ms --------------
const myHugeArray1 = Array.from(Array(1000).keys());
// console.log('1️⃣ ------- myHugeArray1 -------', myHugeArray1);

const myHugeArray2 = [...Array(100).keys()];
// console.log('2️⃣ ------- myHugeArray2 -------', myHugeArray2);

const n = 1000;
const myHugeArray3 = [...Array(n + 1).keys()].slice(1);
// console.log('3️⃣ ------- myHugeArray3 -------', myHugeArray3);



const hugeArray1 = new Array(1_000_0);
const timeStart1 = performance.now();
hugeArray1.forEach((element, index, array) => {
    // console.log('Case #1', element, index);
});

const timeFinish1 = performance.now();
// console.log(`#1. TIME Elapsed: ${(timeFinish1 - timeStart1).toFixed(2) / 1000} seconds.`);


// -------------- Example 2.2 - case II (for -> forward) - 1.6 ms --------------
const hugeArray2 = new Array(1_000_0);
const timeStart2 = performance.now();
for (let index = 0; index < hugeArray2.length; index++) {
    // console.log('Case #2', hugeArray2[index]);
};

const timeFinish2 = performance.now();
// console.log(`#2. TIME Elapsed: ${(timeFinish2 - timeStart2).toFixed(2) / 1000} seconds.`);


// -------------- Example 2.3 - case III (for -> reverse) - 1.5 ms --------------
const hugeArray3 = new Array(1_000_0);
const timeStart3 = performance.now();
for (let index = hugeArray3.length; index > 0; index--) {
    // console.log('Case #3', hugeArray3[index]);
};

const timeFinish3 = performance.now();
// console.log(`#3. TIME Elapsed: ${(timeFinish3 - timeStart3).toFixed(2) / 1000} seconds.`);



// -------------- Example 2.4 - case IV - 11.7 ms --------------
const hugeArray4 = new Array(1_000_0);
const timeStart4 = performance.now();
for (const element of hugeArray4) {
    // console.log('Case #4', element);
};

const timeFinish4 = performance.now();
// console.log(`#4. TIME Elapsed: ${(timeFinish4 - timeStart4).toFixed(2) / 1000} seconds.`);



