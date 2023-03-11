/**
|--------------------------------------------------
  ======= <<<--- Topic #1 - Типы данных --->>> =======
В JS 7 типов данных:
null
undefined
boolean
number
string
object
symbol
|--------------------------------------------------
*/

console.log(typeof (0)); // number
console.log(typeof (true)); // boolean
console.log(typeof ('JavaScript')); // string
console.log(typeof (undefined)); // undefined
console.log(typeof (Math)); // object
console.log(typeof (Symbol('JS'))); // symbol
console.log(typeof (null)); // object -> это неточность JS, на самом деле null = null
console.log(typeof (function () {})); // function
console.log(typeof (NaN)); // number -> на самом деле NaN - это неточность JS
console.log(1 / 0); // Infinity
console.log(undefined * 1); // NaN
console.log(typeof (0)); // number

/**
 * В чем отличия undefined и null?
 * Тип undefined используется тогда, когда переменнная не объявлена, или она объявлена, но не имеет никакого значения.
 * Тип null - говорит о том, что переменная объявлена, но нет никакого значения.
 */




/**
|--------------------------------------------------
  ======= <<<--- Topic #2 - приведение типов --->>> =======
|--------------------------------------------------
*/

let language = 'JavaScript';
if (language) {
  console.log('The best language is: ', language); // The best language is:  JavaScript
}

/**
 * Существуют опеределенные значения, которые, когда приводятся к boolean значению дают false:
 *  1. ' ' - пустая строка;
 *  2. 0;
 *  3. undefined;
 *  4. NaN;
 *  5. false;
 */
console.log(Boolean('')); // false - пустая строка
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean('0')); // true - это строка, которая содержит в себе символ 0
console.log(Boolean('Hello')); // true - не пустая строка
console.log(Boolean(' ')); // true - это не пустая строка, а символ пробел, который содержиться в строке
console.log(Boolean([])); // true - пустой массив приводится к true
console.log(Boolean({})); // true - пустой объект приводится к true
console.log(Boolean(function () {})); // true - пустая функция приводится к true


// КАК РАБОТАЮТ СТРОКИ И ЧИСЛА

/**
 * оператор '+' применяется для чисел и для сткрок!
 * для чисел оператор '+' выполняет действие сложение
 * для строк оператор '+' выполняет действие конкатенации
 */
console.log(1 + '2'); // string 12 - приводит 1 к строковому формату - действие конкатенации
console.log('2' + 1); // string 21 - приводит 1 к строковому формату - действие конкатенации
console.log('' + 1 + 0); // string 10
console.log('' - 1 + 0); // number -1 - для строк не определен оператор '-', поэтому воспринимается все как число.
console.log(3 * 8); // number  24
console.log(4 + 10 + 'px'); // string 14px
console.log('px' + 5 + 10); // string px510
console.log('42' - 40); // number 2
console.log('42px' - 2); // NaN
console.log(null + 2); // number 2 - null приводится к числу
console.log(undefined - 42); // NaN - undefined невозможно привести к числу


// КАК РАБОТАЮТ == vs ===

/**
 * Чем отличаются между собой == vs ===?
 * Распространенный ответ == сравнивает только по значению, а === сравнивает и по значению и по типу
 * Более корректный ответ == сравнивает по значению, то с приведением типов
 * А === сравнивает по значению без приведения типов - более точная формулировка
 */

console.log(2 == '2'); // true
console.log(2 === '2'); // false
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log('0' == false); // true - интерпретатор все пытается привести к числу
console.log('0' === false); // false
console.log('0' == 0); // true
console.log('0' === 0); // false
console.log(0 === 0); // true

// неочевидные особенности при сравнении
console.log(false == ' '); // true
console.log(false == []); // true
console.log(false == {}); // false
console.log('' == 0); // true
console.log('' == []); // true
console.log('' == {}); // false
console.log(0 == null); // false
console.log(0 == []); // true
console.log(0 == {}); // false


/**
 *Рекомендуется всегда использовать ===, чтобы не было сюрпризов с приведением типов.
 */


/**
|--------------------------------------------------
  ======= <<<--- Topic #3 - Values in JS --->>> =======
|--------------------------------------------------
*/

let a1 = 42;
let b1 = a1;
b1++;
console.log('a1', a1); // 42
console.log('b1', b1); // 43


let a2 = [1, 2, 3];
let b2 = a2; // присваиваем не сами значения массива a2, а лишь ссылку на массив a2
b2.push(4);
console.log('a2 :', a2); // (4) [1, 2, 3, 4]
console.log('b2 :', b2); // (4) [1, 2, 3, 4]

let c2 = [1, 2, 3, 4];
console.log(a2 === b2) // true
console.log(a2 === c2) // false - разные ссылки


let a3 = [1, 2, 3];
let b3 = a3.concat(); // возвращаем клон массива, чтобы он не мутировал
b3.push(4);
console.log('a3 :', a3); // (3) [1, 2, 3]
console.log('b3 :', b3); // (4) [1, 2, 3, 4]

/**
|--------------------------------------------------
  ======= <<<--- Topic #4 - scope in JS - доступность определенных переменных --->>> =======
  Scope указывает на доступность определенных переменных - область видимости.
  Существует глобальный scope и локальный scope
  Глобальный scope - это когда переменная объявленная вне функции, но доступна внутри функций, которые находяться внутри этого scope.
  Например: в браузере объекты widow и document относятся к глобальному scope, но доступны во всех функциях сразу.

  Локальный scope - когда некая переменная доступна лишь в рамках одной функции, или в дочерних функциях.
|--------------------------------------------------
*/

function funcA() {
  let a = 1;

  function funcB() {
    let b = 2;

    function funcC() {
      let c = 3;

      console.log('funcC', a, b, c);
    }
    funcC(); // funcC 1 2 3

    console.log('funcB :', a, b);
  }

  funcB(); // funcB : 1 2

  console.log('funcA :', a);
}
funcA(); // funcA : 1






/**
|--------------------------------------------------
  ======= <<<--- Topic #5 - hoisting JS --->>> =======
|--------------------------------------------------
*/
console.log(sum(1, 41)); // 42 - мы можем обратиться к функции sum до того, как ее определили

function sum(a, b) {
  return a + b;
}
console.log(sum(1, 41)); // 42


console.log(i); // undefined
var i = 39;
console.log(i); // 39

/**
 * Переменный let и const - не подвержены хостингу!
 */
// console.log(num1); // ReferenceError: num1 is not defined
// const num1 = 40;
// console.log(num1); // 40

// console.log(num2); // ReferenceError: num2 is not defined
// let num2 = 41;
// console.log(num2); // 41


// Function EXPRESSION & Function DECLARATION - разные способы объявления функций
/**
 * Если мы объявляем функцию как Function EXPRESSION, то вызывать ее мы может только после ее определения.
 *
 * Если мы объявляем функцию как Function DECLARATION, то мы можем вызывать ее где-угодно, и нам всеровно, где она определена.
 */

// METHOD I - unction DECLARATION
console.log(square(25)); // 625 - вызываем до ее определения

function square(num) {
  return num ** 2 // num возведенная в степень 2
}

console.log(square(40)); // 1600 - вызываем после ее определения


// METHOD II - unction EXPRESSION
// console.log(cou(3)); // ReferenceError: cou is not defined

const cub = function (num) {
  return num ** 3 // num возведенная в степень 3
}

console.log(cub(5)); // 125 - вызываем после ее определения



/**
|--------------------------------------------------
  ======= <<<--- Topic #6 - переменные let и const --->>> =======
let позволяет создавать переменные, которые впоследствии мы можем изменить.
let доступна только внутри блочного scope

const - позволяет создавать переменные, которые невозможно изменять

|--------------------------------------------------
*/

let a = 'Variable a';
let b = 'Variable b';

{
  a = 'New Variable A';
  let b = 'Local Variable B';

  console.log('Scope A :', a); // New Variable A
  console.log('Scope B :', b); // Local Variable B
}

console.log('A :', a); // New Variable A
console.log('B :', b); // Variable b

const PORT = 8080;
// PORT = 2000; // TypeError: Assignment to constant variable.

const array = ['JavaScript', 'is', 'Awesome'];
array.push('!');
console.log('array', array) // (4) ["JavaScript", "is", "Awesome", "!"]

array[0] = 'JS';
console.log('array', array) // (4) ["JS", "is", "Awesome", "!"]

// array = array2; // ReferenceError: array2 is not defined



/**
|--------------------------------------------------
  ======= <<<--- Topic #7 - CLOSURES - ЗАМЫКАНИЯ В JS --->>> =======
Замыкание - это момент, когда функция имеет доступ до переменных из вышестоящего scope
Можно говорить - это функция внутри функции. Функция, которая замыкает в себе значения из вышестоящего scope.

|--------------------------------------------------
*/

function sayHelloTo(name) {
  const message = 'Hello ' + name;

  return function() {
    console.log(message) // Hello Elena
  };
};

const helloToElena = sayHelloTo('Elena');
const helloToIgor = sayHelloTo('Igor'); // теперь мы замыкаем переменную message со значение Игорь
const helloToVasil = sayHelloTo('Vasil');


console.log(helloToElena); // ƒ () {console.log(message) // Hello}
console.log(helloToElena()); // undefined - функция, которая ничего не возвращает, по умолчанию возвращает undefined
console.log(helloToIgor()); // Hello Igor
console.log(helloToVasil()); // Hello Vasil


// КАКАЯ ПРАКТИЧЕСКАЯ ПОЛЬЗА ОТ ЗАМЫКАНИЯ?
function createFrameworkManager() {
  const fw = ['Angular', 'React'];

  return {
    print: function() {
      console.log(fw.join(' '));
    },
    add: function(framework) {
      fw.push(framework);
    }
  }
}

const manager = createFrameworkManager();
// console.log(manager) // {print: ƒ, add: ƒ}
// console.log(fw) // ReferenceError: fw is not defined
manager.print(); // Angular React

manager.add('VueJS');
manager.print(); // Angular React VueJS


// ПРИМЕР С ЧИСЛАМИ ФИБОНАЧИ (setTimeout)
// Задача, через определенную задержку вывести все числа Фибоначи в консоль
const fib = [1, 2, 3, 5, 8, 13];

for (var i = 0; i < fib.length; i++) {
(function(j) {
  setTimeout (function() {
    console.log(`fib[${j}] = ${fib[j]}`);
  }, 1500)
})(i)
}
