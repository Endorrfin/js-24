// Find sum of all elements inArray in

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ! Options I
let total = array.reduce((acc, elem, index) => {
    // console.log(index, 'acc', acc, 'elem', elem);
    return (acc + elem)
}, 0)

// console.log(total);


// ! Options II
let totalValue = array.reduce((acc, elem) => {
    return (acc + elem)
}, 11)


// ! Options II
let totalValueShort = array.reduce((acc, elem) => acc + elem, 0)

// console.log(totalValue);
// console.log(totalValueShort);


// ! Options III
const fruitsArray = ['apple', 'banana', 'peach', 'orange', 'lemon', 'kiwi']
let fruitsObj = fruitsArray.reduce((acc, elem) => {
    acc[elem] = 1
    return acc
}, {})
// console.log(fruitsObj);

// ! Options IV - получение частоты наличия элемента в массиве
const fruitsRepeatArray = ['apple', 'banana', 'peach', 'banana', 'orange', 'lemon', 'banana', 'kiwi', 'apple']
let fruitsRepeatObj = fruitsArray.reduce((acc, elem) => {
    if (acc[elem]) {
        acc[elem] += 1;
    } else {
        acc[elem] = 1;
    }
    return acc
}, {})
// console.log(fruitsRepeatObj);


// !====================================================================================

// Найти максиммальный элемент массива
const arr2 = [2, 4, 6, 8, 10];

// ! Option I
Math.max(...arr2)
// console.log(Math.max(...arr2));




// ! Option II
arr2.reduce((prev, current) => {
    return current > prev ? current : prev
})


// console.log(arr2.reduce((prev, current) => {
//     return current > prev ? current : prev
// }));



// -------------- Case 4.1  --------------
const pilots = [
    {
        id: 10,
        name: "Poe Dameron",
        years: 14,
    },
    {
        id: 2,
        name: "Temmin Wexley",
        years: 30,
    },
    {
        id: 41,
        name: "Tallissan Lintra",
        years: 16,
    },
    {
        id: 99,
        name: "Ello Asty",
        years: 22,
    }
];

const totalYears = pilots.reduce(function (accumulator, pilot) {
    return accumulator + pilot.years;
}, 0);

// console.log(totalYears);


const totalYearsOptimize = pilots.reduce((acc, pilot) => acc + pilot.years, 0);
// console.log(totalYearsOptimize);


const mostExperiencePilot = pilots.reduce((oldest, pilot) => {
    return (oldest.years || 0) > pilot.years ? oldest : pilot;
}, {});
// console.log(mostExperiencePilot);



// !====================================================================================
/*

Метод reduce() настолько хорош, что с его помощью можно создавать остальные методы массива, например map() или filter():

* */

// -------------- Case 5.1 - map --------------

const myMap = (array, fn) => {
    return array.reduce((mappedArray, element) => {
        return [...mappedArray, fn(element)]
    }, [])
}

// console.log(myMap(array, n => n * 5));


// -------------- Case 5.2 - filter --------------
const myFilter = (array, fn) => {
    return array.reduce((filteredArray, element) => {
        return fn(element)
            ? [...filteredArray]
            : [...filteredArray, element]
    }, [])
}


// console.log(myFilter(array, n => n % 5 !== 0));


// -------------- Case 5.3 - flat --------------
function flatDeep(array) {
    return array.reduce((flattenArray, element) => {
        return Array.isArray(element)
            ? [...flattenArray, ...flatDeep(element)]
            : [...flattenArray, element]
    }, [])
}

// console.log(flatDeep([1, 2, 3, [4, [[[5, [6, 7]]]], 8, [[[9, [[[[[10]]]]]]]]]]));

