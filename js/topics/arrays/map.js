// Удвоить все элементы массива.
let nums = [2, 5, 8, 11, 14, 17, 20];
const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayCharacters = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

// !Option I
let resultFunction = nums.map(function (elem) {
    return elem * 2;
})
// console.log(resultFunction);

// Прибавить к каждому элементу массива единицу.
// !Option II
let resultArrowFunction = nums.map((elem) => elem + 1)
// console.log(resultArrowFunction);


// -------------- Example 1.1 case I --------------
/*
    Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
    Examples:
        valTimesIndex([1,2,3]) // [0,2,6]
        valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){
    return arr.map((value, index) => {
        return value * index;
    });
}

// console.log(valTimesIndex(arrayNumbers));



// -------------- Example 1.2 case I --------------
/*
    Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.
    Examples:
        extractValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}, {name: 'Ben'}, {name: 'Bri'}, {name: 'Kevin'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt', 'Ben', 'Bri', 'Kevin']
*/

function extractValue(arr, key){
    return arr.map((value) => {
        return value[key];
    });
}

// console.log(extractValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}, {name: 'Ben'}, {name: 'Bri'}, {name: 'Kevin'}], 'name'));



// -------------- Example 1.3 case I --------------
/*
    Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space.
    Examples:
        extractFullName([{first: 'Elie', last: "Shark"}, {first: 'Tim', last: "Garcia"}, {first: 'Matt', last: "Lane"}, {first: 'Colt', last: "Steele"}]) // ['Elie Shark', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){
    return arr.map((value) => {
        return `${value.first} ${value.last}`;
    });
}

// console.log(extractFullName([{first: 'Elie', last: 'Shark'}, {first: 'Tim', last: 'Garcia'}, {first: 'Matt', last: 'Lane'}, {first: 'Colt', last: 'Steele'}]));