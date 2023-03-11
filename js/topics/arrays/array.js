let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// ============ CREATE ARRAY OF GIVEN LENGTH ============

// -------------- Solution 1.1 --------------
const createArray1 = number => {
  let numberArray = [];
  for(let index = 1; index <= number; index++) {
    numberArray.push(index);
  }
  return numberArray;
};
// console.log('createArray1', createArray1(10));


// -------------- Solution 1.2 --------------
const createArray2 = (num) => {
  return Array.from(Array(num).keys()).map(item => item + 1)
};

// console.log('createArray2', createArray2(20));


// -------------- Solution 1.3 --------------
const createArray3 = (num) => [...new Array(num)].map((item, index) => index + 1);

// console.log('createArray3', createArray3(30));


// ============ КОМБИНАЦИЯ РАБОТЫ МЕТОДОВ МАССИВА ============

// ------- Miscellaneous tricks -------
// console.log('Welcome to JS world'[0]); // W


// ------- Example I -------
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const evens = [];
const odds = [];

numbers
  .filter((element) => element % 3)
  .map((element) => element * 10)
  .forEach((element) => evens.push(element));

// console.log('evens', evens);


// ------- Example II -------
const arrayNames = ['Ric', 'Dilan', 'Ben', 'Silvia', 'Forstmann', 'Emma', 'Julia', 'Leonid'];

const getRandomName = () => arrayNames[Math.floor(Math.random() * arrayNames.length)];
// console.log('getRandomName', getRandomName());

// Если имя не определено, то будет использоваться параметр по умолчанию - getRandomName()
// const greet = (name = getRandomName()) => console.log(`Hi ${name}!`);
const greet = (name = getRandomName()) => {
  // console.log(`Hi ${name}!`);
}
greet();
greet('-Tom-');
greet();
greet('-Megan-');
greet();
greet('-Patrik-');


const greet2 = (name, ...titles) => {
  const [firstTitle = '', ...otherTitle] = titles;
  const aka = otherTitle.length > 0 ? ` известный как ${otherTitle.join(', ')}` : '';

  // console.log(`Привет ${firstTitle} ${name}${aka}`);
}

const nameAndTitles = ['Kind', 'Nice', 'Smart', 'Alone', 'Hanson'];

greet2(nameAndTitles[0], nameAndTitles[1]);

greet2(...nameAndTitles.slice(0, 2));
greet2("Viktor", ...nameAndTitles.slice(2));
greet2(undefined, ...nameAndTitles.slice(1));

// console.log(...nameAndTitles);


// ------- Example III -------
const generateArray = () => {
  const randomInt = (max) => Math.floor(Math.random() * max);

  const array = [];
  for(let i = randomInt(10); i--;) {
    array.push(randomInt(100));
  }

  return array;
};

// console.log(Math.max(...generateArray()));
// console.log(Math.min(...generateArray()));
// console.log(Math.max(...generateArray()));
// console.log(Math.min(...generateArray()));


// разбираем 1 массив и 2-й массив, в результате будет новый массив, созданные из 2-х
const max = (array, ...numbers) => Math.max(...[...array, ...numbers]);
// console.log(max(generateArray(), 102, 108, 143, 112));


// ------- Example IV - создание нового массива с помощью spread -------
const originalArray = [1, 2, 3, 4];
const newArray = [0, ...originalArray, 5];

// console.log('originalArray', originalArray);
// console.log('newArray', newArray);


// -------------- Changing the key name in an array of objects --------------
const listOfCountry = [
  {
    country: 'Ukraine',
    city: 'Kyiv',
  },
  {
    country: 'Pollen',
    city: 'Warsaw',
  },
  {
    country: 'USA',
    city: 'Washington',
  },
  {
    country: 'Great Britain',
    city: 'London',
  },
];

const newListOfCountry = listOfCountry.map(({
  city: capital, ...rest
}) => ({
  capital, ...rest
}));

// console.log(newListOfCountry);










