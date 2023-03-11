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
