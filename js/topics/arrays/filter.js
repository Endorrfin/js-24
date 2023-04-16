
// ============ FILTER ============
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


// -------------- Case 1.1 --------------
let newArray = arrayNumbers.filter(function (elem) {
    return elem >= 6;
})
// console.log(newArray);


// -------------- Case 1.2 --------------
let isBigEnough = (elem) => elem > 8
let newSortArray = arrayNumbers.filter(isBigEnough)
// console.log(newSortArray);



// ============ FILTER in WORK ============
/*
* Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.
* */
// -------------- Case 2.1 --------------
let even = arrayNumbers.filter(element => !(element % 2));
// console.log('even', even);

const squareRootEven = even.reduceRight((accumulator, element) => accumulator + Math.round(Math.sqrt(element)), 0)
// console.log('squareRootEven', squareRootEven);


// -------------- Case 2.2 --------------
let odd = arrayNumbers.filter(element => (element % 2));
// console.log('odd', odd);

const squareRootOdd = even
  .reduce((accumulator, element) => accumulator +
    Math.round(
      Math.sqrt(element)
    ), 0)
// console.log('squareRootOdd', squareRootOdd);


// -------------- Case 3.1 --------------
const copyInitialArr = arrayNumbers.filter(item => item);
// console.log(copyInitialArr);




// -------------- Case 3.2 --------------
const personnel = [
    {
        id: 5,
        name: "Luke Skywalker",
        pilotingScore: 98,
        shootingScore: 56,
        isForceUser: true,
    },
    {
        id: 82,
        name: "Sabine Wren",
        pilotingScore: 73,
        shootingScore: 99,
        isForceUser: false,
    },
    {
        id: 22,
        name: "Zeb Orellios",
        pilotingScore: 20,
        shootingScore: 59,
        isForceUser: false,
    },
    {
        id: 15,
        name: "Ezra Bridger",
        pilotingScore: 43,
        shootingScore: 67,
        isForceUser: true,
    },
    {
        id: 11,
        name: "Caleb Dume",
        pilotingScore: 71,
        shootingScore: 85,
        isForceUser: true,
    },
];

const jediPersonnel = personnel.filter(function (person) {
    return person.isForceUser;
});
// console.log('jediPersonnel', jediPersonnel);


const jediPersonnelOptimize = personnel.filter(person => person.isForceUser);
// console.log('jediPersonnelOptimize', jediPersonnelOptimize);


const totalJediScore = personnel
    .filter((person) => person.isForceUser)
    .map((jedi) => jedi.pilotingScore + jedi.shootingScore)
    .reduce((acc, score) => acc + score, 0);

// console.log('totalJediScore', totalJediScore);

