// 'use strict';

// ======= SECTION #1 =======
/*
* Написать функцию, которая будет складывать 2 числа?
* Но надо стремиться к тому, чтоб код был универсальный и функция суммировала любое количество чисел
* source - https://www.youtube.com/watch?v=UHhQ74uwCns
* */


// -------------- Solution 1.1 --------------
function sum1(a, b, c, d) {
  c = c || 0;
  d = d || 0;
  return a + b + c + d;
}

// console.log(sum1(3, 4));
// console.log(sum1(3, 4, 5));
// console.log(sum1(3, 4, 5, 6));


// -------------- Solution 1.2 --------------
function sum2() {
  let result = 0;
  let elements = Array.from(arguments);
  for(let i = elements.length - 1; i >= 0; i--) {
    result += elements[i];
  }
  return result;
}

// console.log(sum2());
// console.log(sum2(1));
// console.log(sum2(1, 2));
// console.log(sum2(1, 2, 3));
// console.log(sum2(1, 2, 3, 4));
// console.log(sum2(1, 2, 3, 4, 5));


// -------------- Solution 1.3 --------------
// релизация еще одной функции для обработки неккорекных данных пользователем
function clean(elements) {
  return elements.filter((el) => !isNaN(Number(el)))
}


function verify(elements) {
  elements.forEach((el) => {if (isNaN(Number(el))) throw new Error("Not a number")})
  return elements;
}


function sumNumber() {
  // return Array.from(arguments).reduce((a, b) => a + b, 0)
  return verify(Array.from(arguments)).reduce((a, b) => Number(a) + Number(b), 0);
}

// Spesification
// console.log(sumNumber());
// console.log(sumNumber(1));
// console.log(sumNumber(1, 2));
// console.log(sumNumber(1, 2, 3));
// console.log(sumNumber(1, 2, 3, 4));
// console.log(sumNumber(1, 2, 3, 4, 5));

// Gigo
// console.log(sumNumber('5', '7'));
// console.log(sumNumber('as', '5'));
// console.log(sumNumber([], {}, '2', 4));
// console.log(sumNumber([3], {}, '2', 4));




// ======= SECTION #2 =======

// -------------- Solution 2.1 --------------
function multiply(a, b) {
  return a * b;
}

function square(n) {
  return multiply(n, n);
}

function printSquare(n) {
  var squared = square(n);
  console.log(squared);
}

// printSquare(8); // 64


// -------------- Solution 2.2 --------------
const msg1 = 'Welcome ';
function first1(msg) {
  var secondMsg = "message";

  function second(msg) {
    console.log( msg1 );
    console.log( secondMsg );
  }
  second(msg);
}
// first1("text");



// -------------- Solution 2.3 --------------
const msg2 = 'Welcome ';
function first2(msg) {
  var secondMsg = "message";

  function second(msg) {
    var msg = "Internal Msg";
    console.log( msg2 );
    console.log( secondMsg );
  }
  second(msg);
}
// first2("text");




// -------------- Solution 2.4 --------------
const msg3 = 'Welcome ';
function first3(msg) {

  var secondMsg = "message";
  var msg = "MiddleMsg";

  function second(msg) {
    console.log( msg3 );
    console.log( secondMsg );
  }
  second(msg);
}
// first3("text");



// -------------- Solution 2.5 --------------
const msg4 = 'Welcome ';
function first4() {

  const secondMsg = "message";

  function second() {
    console.log( msg4 );
    console.log( secondMsg );
  }
  second();
}
// first4("text");


// -------------- Solution 2.6 --------------
function first5(test2) {
const test1 = "test1";
return test1 + test2;

}

function second2() {
  const test2 = " test2";
  const test3 = first5(test2);
  console.log(test3);
}
// second2();



// -------------- Solution 2.7 --------------
function first6() {
  const test1 = "test1";
  return test1
  }

  function second3() {
    const test2 = " test2";
    return test2;
  }

  function third2() {
    const test3 = first6() + second3();
    console.log(test3);
  }

  // third2();



// -------------- Solution 2.7 --------------
var msg5 = 'Welcome ';
function first(msg) {

  const secondMsg = "message";

  function second(msg) {
    msg5 = "Internal Msg";
    console.log( msg5 );
    // console.log( secondMsg );
  }
  second(msg);
  console.log( msg5 );
}
// first("text");



// -------------- Solution 2.8 --------------
// 5. Необходимо, чтобы этот код выводил в лог hey amy, но он выводит hey arnold. Почему?
function greetings(person) {
  if (person === { name: 'amy' }) {
    return 'hey amy'
  } else {
    return 'hey arnold'
  }
}
// console.log( greetings({ name: 'amy' }) )





// ======= SECTION #3 - default parameters of the functions =======
// -------------- Solution 3.1 Параметры функции по умолчанию до ES6 --------------
function doSomething1 (name, age) {
  name = typeof name !== 'undefined' ? name : "";
  age = typeof age !== 'undefined' ? age : 0;
  return `My name is ${name}, and my age is ${age}`
}

// console.log(doSomething1('Rik', 34));
// console.log(doSomething1());


function doSomething2 (name = "Kir", age = 94) {
  return `My name is ${name}, and my age is ${age}`
}

// console.log(doSomething2('Rik', 34));




// -------------- Solution 3.2 Деструктуризация в ES6 --------------
const employee = {
  id: 37,
  name: "Hanna",
  position: "Project manager",
  salary: 1000
};


// old approach
function promote1 (emp) {
  const name = emp.name;
  const position = emp.position;
  const salary = emp.salary;
  return `My mane is ${name}, my position is ${position} and my salary is ${salary}`
}
// console.log(promote1(employee));


// new approach
function promote2 ({name, position, salary}) {
  return `My mane is ${name}, my position is ${position} and my salary is ${salary}`
}

// console.log(promote2(employee));





// -------------- Solution 3.3 rest operator в ES6 --------------
/* 
Оператор "..." в JS имеет два похожих но разных применения:
  1) При вызове функции он позволяет передать несколько параметров в виде массива (и тогда он называется spread)
  2) При объявлении функции он позволяет принять несколько отдельных параметров в массив (и тогда называется rest)
*/



function musketeers (leader, priest, ... others) {
  for (var i = 0; i < arguments.length; i++) {
    console.log(i);
  }

  others.forEach(function(currentValue, index, array) {

  });
}
// musketeers('D\'Artagnan', 'Aranis', 'Atos', 'Portos');





// ======= SECTION #4 - What will show console.log? =======

// -------------- Solution 4.1 What will show console.log? --------------
/*
* Когда мы вызываем greetAll - внутри этой функции значение this - это объект greeter
* Но внутри функции, которую мы передаем в forEach - значение this теряется. Проэтому, это уже не будет объект greeter и найти в нем фунцию greet мы не сможем.
* */

const hello = {

  hello: function (name) {
    console.log("Hello", name);
  },

  greetAll: function (names) {
    names.forEach(function(name) {
      this.hello(name);
    });
  }
};

// hello.greetAll(['Bob', 'Mark', 'Peter']); // TypeError Cannot read property 'greet' of undefined




// -------------- Solution 4.2 What will show console.log? --------------
/*
* Обычная функция в forEach заменена на стрелочную фукнцию.
* Функция стрелка сохраняет значение лексического this. То есть, внутри стрелки this - this будет ровно то же, что и this был в том месте, где мы эту функцию объявили, то есть внутри функции greetAll.
* У arrow function нет свойства prototype.
* Из функции стрелки нельзя создавать новые объекты.
* */
const greeter = {
  greet: function (name) {
    console.log("Hello", name);
  },

  greetAll: function (names) {
    names.forEach((name) => {
      this.greet(name);
    });
  }
};

// greeter.greetAll(['Bob', 'Mark', 'Peter']); // Hello Bob, Hello Mark, Hello Peter
