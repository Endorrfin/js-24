
// ============ FILTER USING CALLBACKS ============
let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const stock = [
    { name: 'MacBook', quantity: 11 },
    { name: 'Ipad', quantity: 0 },
    { name: 'Imac', quantity: 4 },
    { name: 'Iphone', quantity: 6 },
    { name: 'MacMini', quantity: 0 },
    { name: 'AirPods', quantity: 28 },
    { name: 'AirPort', quantity: 0 },
];

const inStock = (item) => item.quantity > 0;
const available = stock.filter(inStock);
// console.log('available in stock', available);
// console.log('stock', stock);



// ============ FILTER ============
const array = [12, 15, 7, 19, 2, 9, 139];

// -------------- Case 1 --------------
let newArray = array.filter(function (elem) {
    return elem >= 15;
})
// console.log(newArray);


// -------------- Case 2 --------------
let isBigEnough = (elem) => elem > 8
let newSortArray = array.filter(isBigEnough)
// console.log(newSortArray);



// ============ FILTER in WORK ============
/*
* Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.
* */
// -------------- Case 1 --------------
let even = arrayNumbers.filter(element => !(element % 2));
// console.log('even', even);

const squareRootEven = even.reduceRight((accumulator, element) => accumulator + Math.round(Math.sqrt(element)), 0)
// console.log('squareRootEven', squareRootEven);


// -------------- Case 2 --------------
let odd = arrayNumbers.filter(element => (element % 2));
// console.log('odd', odd);

const squareRootOdd = even
  .reduce((accumulator, element) => accumulator +
    Math.round(
      Math.sqrt(element)
    ), 0)
// console.log('squareRootOdd', squareRootOdd);

