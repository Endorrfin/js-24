'use strict';

// What will show console log?
function showConsole () {
  console.log(1 + '2'); // 12
  console.log('1' + 2); // 12
  console.log(1 + 3 + '2'); // 42
  console.log([] + []); // ' '
  console.log([] + {}); // [object Object]
  console.log({} + []); // [object Object]
  console.log({} + {}); // [object Object][object Object]
  console.log('5' - 3); // 2
  console.log('5' + 3); // '53'
  console.log('5' - '4'); // 1
  console.log(3 + 2 - '1'); // 4
  console.log('3' + 2 - 1); // 31
  console.log(+'10' + 1); // 11
  console.log(null + 5); // 5
  console.log(true + undefined); // Nan
  console.log('5' + +'5'); // 55
  console.log(5 + +'5'); // 10
  console.log('foo' + 'foo'); // foofoo
  console.log('foo' + +'foo'); // fooNaN
  console.log('5' + -2); // '5-2'
  console.log(null == undefined) // true
  console.log(undefined === undefined) // true
  console.log(null === null) // true
  console.log(NaN == undefined) // false
  console.log(NaN == null) // false
  console.log(NaN === NaN) // false
  console.log(NaN == NaN) // false
  console.log(typeof typeof 1); // string
  console.log(typeof null); // object - признанный баг
}

// console.log(showConsole());





// ✳️ EXAMPLE 1.1 What will be the output of this code?

var a = {},
  b={key:'b'},
  c={key:'c'};

a[b]=123;
a[c]=456;

// console.log(a[b]);
// console.log({}.toString())


// ✳️ EXAMPLE 1.2 What will be the output of this code?
var x = 21;
var girl = function () {
  console.log(x);
  var x = 20;
};

// girl ();


// ✳️ EXAMPLE 1.3 Imagine you have this code?
var a = [1, 2, 3];
// a) Will this result in a crash?
a[10] = 99;
// b) What will this output?
// console.log(a[6]);



// ✳️ EXAMPLE 1.4 ему равно foo.length?
var foo = {};
foo.bar = 'hello';
// console.log(foo.length);


// ✳️ EXAMPLE 1.5 What will show console log?
var RED = 'red';
const red = 'red';
var RED = 'blue';
// red = 'blue';
// console.log(RED);




// ✳️ EXAMPLE 1.6 What will show console log?
var a = {};
var b = a;
// console.log(a === b);

var c = {};
var d = {};
// console.log(c === d); // false - передача по сслыке, а ссылки разные




// ✳️ EXAMPLE 1.7 What will show console log?
let num = 5;

// function run(fromWhom, fromWhom) {
//   return fromWhom
// }
// console.log( run(1, 2) );
// console.log( num );
// console.log( zombie );

// 13.
for (let i = 0; i < 10; i++) {
  let count = 10;
  count += i
}

// console.log(count);


// ✳️ EXAMPLE 1.8 What will show console.log?
 for(var i = 0; i < 3; i++) {
   setTimeout(function () {
     // console.log(i); // 3
   }, i * 1000);
 }


// ✳️ EXAMPLE 1.9 What will show console.log?
 for(let i = 0; i < 3; i++) {
  setTimeout(function () {
    // console.log(i); // 0, 1, 2
  }, i * 1000);
}



// ✳️ EXAMPLE 2.1 What will show console.log?
const multiply = new Function('x', 'y', 'return x * y');
// console.log(multiply(3, 4));


// ✳️ EXAMPLE 2.2 What will show console.log?
class User {
  constructor () {
    this.name = 'Frank';
    this.age = 101;
  }

  greet () {
    return this.name;
  }

  mother () {
    this.name = 'Arianne';
    return this.greet();
  }
}

const user = new User();
// console.log(user.greet());
// console.log(user.mother());


// ✳️ EXAMPLE 2.3 What will show console.log?
const capitalize = ([a, ...other]) => a.toUpperCase() + other.join('');
let result = capitalize('hello');
// console.log(result);


// ✳️ EXAMPLE 2.4 What will show console.log?
const mixArray1 = [3, '', 14, false, 15.8, true, 0, 'name', undefined, 100, NaN, 'true', 'false', ' ', -0, [], {}];
const mixArray2 = mixArray1.filter(Boolean);
// console.log(mixArray2);


// ✳️ EXAMPLE 2.5 What will show console.log?
let a2 = 7;
function test (a2) {
  return a2++;
}

// console.log(test());


// ✳️ EXAMPLE 3.1 What will show console.log?
// const id = document.body.id = 1;
// console.log(id === 1);
// console.log(document.body.id === 1);



// What will show console.log group?
const whatShowConsole = () => {

  // 🔷🔶 CASE 1
  // x++ executes the statement and then increments the value.
  // ++x increments the value and then executes the statement.
  let x1 = 5;
  console.log('x1++', x1++);
  console.log('++x1', ++x1);


  // 🔷🔶 CASE 2
  console.log([] + false - null + true); // NaN


  // 🔷🔶 CASE 3
  let y3 = 1;
  let x3 = y3 = 2;
  // console.log(x3);


  // 🔷🔶 CASE 4
  // console.log([] + 1 + 2);


  // 🔷🔶 CASE 5
  // console.log("1" [0]);


  // 🔷🔶 CASE 6
  // console.log(2 && 1 && null && 0 && undefined); // null - оператор && запинается на лжи


  // 🔷🔶 CASE 7
  // console.log(!!(1 && 2) === (1 && 2));


  // 🔷🔶 CASE 8
  // console.log(null || 2 && 3 || 4); // правдивое и будет возвращаться && имеет приоритет перед || - запинается на правде


  // 🔷🔶 CASE 9
  let a9 = [1, 2, 3];
  let b9 = [1, 2, 3];
  // console.log(a9 == b9);


  // 🔷🔶 CASE 10
  // console.log(+"Infinity"); // унарный + делает его не строкой


  // 🔷🔶 CASE 11
  // console.log("Ëжик" > "яблоко");


  // 🔷🔶 CASE 12
  // console.log(0 || "" || 2 || undefined || true || false);


  // 🔷🔶 CASE 13
  // Яблоко стоит 1.15, апельсин стоит 2.30. Сколько они стоят вместе?
  // Чему равна сумма 1.15 + 2.30 с точки зрения JavaScript?
  // Число хранится в памяти в бинарной форме, как последовательность бит – единиц и нулей. Но дроби, такие как 1.15, 2.30, которые выглядят довольно просто в десятичной системе счисления, на самом деле являются бесконечной дробью в двоичной форме.

  let apple = 1.15;
  let orange = 2.30;
  console.log(apple + orange); // !3.4499999999999997

}

// console.log(whatShowConsole());


const arrayNumbers = [1, 2, 3, 4];
for (var index = 0; index < arrayNumbers.length; index++); {
  // console.log(`The number is ${arrayNumbers[index]}`) // reason ;
}

for (var index = 0; index < arrayNumbers.length; index++) {
  // console.log(`The number is ${arrayNumbers[index]}`)
}



const fruits1 = ['mango', 'apple'];
fruits1.length = 0;
// console.log(fruits1[0]); // array become clearable


const fruits2 = ['mango', 'apple'];
fruits2.length = 3;
// console.log(fruits2) // ['mango', 'apple', undefined];


// 🔷🔶 CASE 14 - context
var length = 4;
function callback() {
  // console.log(this.length);
}

const object = {
  length: 5,
  method() {
    arguments[0](); // context
  }
};

object.method(callback, 1, 2);



// 🔷🔶 CASE 15 - 1,5 !== 1.5
const someResult = (1,5 - 1) * 2; // 1,5 return the most right value
// console.log(someResult);


// 🔷🔶 CASE 16 - return boolean
const groceries = ['apple', null, 'milk', undefined, 'bread', '']
const list = groceries.filter(Boolean); // will remove all value that transform to false
// console.log(list);



// 🚀 Essential JavaScript Quiz 1.1: What is the order of console logs?
// https://claude.ai/public/artifacts/dfa1e00d-cf8f-419d-b9fe-1610f8c602c5?fullscreen=true
function quiz1 () {
  console.log('1: Start');

  setTimeout(() => console.log('2: Timeout'), 0);

  Promise.resolve().then(() => console.log('3: Promise'));

  Promise.all([
    Promise.resolve('A'),
    Promise.resolve('B')
  ]).then(() => console.log('4: Promise.all'));

  console.log('5: End');
}

// quiz1();

// ✅ Correct! Synchronous code runs first (1, 5). All microtasks (Promises) have higher priority than macrotasks (setTimeout). Both individual Promise and Promise.all are microtasks that run before setTimeout (3, 4, then 2).


// 🚀 Essential JavaScript Quiz 1.2: What does this code output?
function quiz2 () {
  function createCounter() {
    let count = 0;
    return function() {
      count++;
      return count;
    };
  }
  const counter = createCounter();
  console.log(counter());
  console.log(counter());
}

// quiz2();
// ✅ Correct! The returned function forms a closure, maintaining access to the 'count' variable even after createCounter finishes executing. Each call increments the same count.


// 🚀 Essential JavaScript Quiz 1.3: What is the complete output?
function quiz3 () {
  Promise.resolve('success')
      .then(result => {
        console.log(result);
        throw new Error('oops');
      })
      .then(result => console.log('This runs'))
      .catch(err => console.log('Caught:', err.message));
}

// quiz3();
// ✅ Correct! The first .then() logs 'success' but throws an error. This skips the second .then() and goes directly to .catch(), which logs 'Caught: oops'.


// 🚀 Essential JavaScript Quiz 1.4: What is the output of these two calls?
  const obj = {
    name: 'Alice',
    arrow: () => console.log(this.name),
    method() { console.log(this.name); }
  };

  // obj.arrow();
  // obj.method();
  // ✅ Correct! Arrow functions don't bind their own 'this' - they inherit from the enclosing scope. Regular methods bind 'this' to the calling object.



// 🚀 Essential JavaScript Quiz 1.5: What happens when this code runs?
function quiz5 () {
  async function main() {
    async function getValue() {
      return 42;
    }
    console.log(getValue());
    console.log(await getValue());
  }
  main();
}

// quiz5();
// ✅ Correct! Async functions always return a Promise object, so getValue() logs a Promise. The await keyword resolves the Promise and logs 42.



// 🚀 Essential JavaScript Quiz 1.6: What is logged?
function quiz6 () {
  const obj1 = { value: 10 };
  const obj2 = obj1;
  const obj3 = { ...obj1 };
  obj2.value = 20;
  console.log(obj1.value, obj3.value);
}

// quiz6();
// ✅ Correct! obj1 and obj2 reference the same object, so changing obj2 affects obj1. obj3 is a shallow copy (spread operator), so it's independent.



// 🚀 Essential JavaScript Quiz 1.7: What is the output?
function quiz7 () {
  const user = { name: 'Bob' };
  const { name, age = 25, city = 'Unknown' } = user;
  console.log(name, age, city);
}

// quiz7();
// ✅ Correct! Destructuring allows default values for missing properties. 'name' exists in the object, while 'age' and 'city' use their default values.



// 🚀 Essential JavaScript Quiz 1.8: What are the five outputs (in order)?
function quiz8 () {
  console.log([] == false);
  console.log([] === false);
  console.log(Boolean([]));
  console.log(0 == '');
  console.log(null == undefined);
}

// quiz8();
// ✅ Correct! [] converts to '' then 0, which equals false (==). === checks type too. Boolean([]) is true (truthy). 0 == '' both convert to 0. null == undefined is a special case that's true.



// 🚀 Essential JavaScript Quiz 1.9: What are the two console outputs?
function quiz9 () {
  const numbers = [1, 2, 3, 4, 5];
  const result = numbers
      .filter(n => n > 2)
      .map(n => n * 2)
      .reduce((sum, n) => sum + n, 0);
  console.log(result);
  console.log(numbers);
}

// quiz9();
// ✅ Correct! filter(n > 2) gives [3,4,5], map(n * 2) gives [6,8,10], reduce sums to 6+8+10=24. The original array remains unchanged as these methods don't mutate.






