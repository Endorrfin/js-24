// 'use strict';


/**
|--------------------------------------------------
  === <<<---  Quiz #1  --->>>  ===
(Q1-1) Что лишнее про Javascript
Интерпретируемый
Мультипародигменный
Строготипизированый +++ 
Однопоточный
|--------------------------------------------------
*/


/**
|--------------------------------------------------
  === <<<---  Quiz #2  --->>>  ===
  (Q1-2) Что про Javascript правда
Только клиентский
С автоматическим управлением памятью +++
Многопоточный
Компилируемый
|--------------------------------------------------
*/


/**
|--------------------------------------------------
  === <<<---  Quiz #3  --->>>  ===  
  (Q1-3) В каких сферах нельзя применить Javascript
Во всех можно применить +++ 
Серверная разработка
Микроконтроллеры
Нативные приложения для windows
|--------------------------------------------------
*/



/**
|--------------------------------------------------
  === <<<---  Quiz #4  --->>>  ===
(Q1-4) ECMAscript это
Язык на котором написан javascript
Отдельная версия Javascript
Спецификация языка Javascript +++
Интерпретатор для Javascript
|--------------------------------------------------
*/


/**
|--------------------------------------------------
  === <<<---  Quiz #5  --->>>  ===
  (Q-2-1) Что покажет console.log ?
|--------------------------------------------------
*/

// const func = () => 3;
// const b = '' || 1 || 'there';
// const c = 1 && 2 && func();
// const d = 1 && '' && func();
// console.log(b, c, d); // 1 3 ""


/**
|--------------------------------------------------
  === <<<---  Quiz #6  --->>>  ===

(Q-2-2) Что покажет console.log ? 
|--------------------------------------------------
*/

// const user = { name: "Bill" };
// const func = user => {
//   const currentUser = user || { name: "Bob"};
//   const userName = user && user.name; // user = undefined, user.name даже не возьмется!
//   console.log(currentUser.name, userName); // Bob undefined
// };

// func();


/**
|--------------------------------------------------
  === <<<---  Quiz #7  --->>>  ===

(Q-2-3) Что покажет console.log?

|| - оператор ищет true и возвращает 1-й найденный true, если не нашел, то последний false
&& - оператор ищет false и возвращает 1-й найденный fasle, если не нашел, то последний не false
const e = {} && 1 && 2 && 3 && {} && true && 19
console.log(e);
|--------------------------------------------------
*/

// const b = null || "there";
// const c = {} && 0 && 2;
// const d = false && 2 && 'here';
// console.log(b, c, d); // there 0 false



/**
|--------------------------------------------------
  === <<<---  Quiz #8  --->>>  ===
(Q-3-1) Что покажет console.log ?

 window
This is a wrong answer
Error +++
This is a correct answer
2
This is a wrong answer
null
This is a wrong answer
|--------------------------------------------------
*/
// ??????? = undefined

// 'use strict';

// const func = () => {
//   a = 2;
// };
// console.log(window.a); // Error



/**
|--------------------------------------------------
  === <<<---  Quiz #9  --->>>  ===
(Q-3-2) Что покажет console.log ? 
undefined +++
This is a correct answer
window
This is a wrong answer
null
This is a wrong answer
function() { ... }
This is a wrong answer
|--------------------------------------------------
*/
// ??????? = Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}

// 'use strict';

// const func = () => {
//   console.log(this);
// };
// func(); // undefined



/**
|--------------------------------------------------
  === <<<---  Quiz #10  --->>>  ===
(Q-3-3) Что покажет console.log ?
 window
result
undefined +++
null

Объяснение: в ES-6 'use strict' идет по умолчанию!
|--------------------------------------------------
*/

// import module from 'some-module';
// let result = null;
// const func = () => {
//   console.log(this); // undefined
//   result = this;
// };
// func();

// export default result;



/**
|--------------------------------------------------
  === <<<---  Quiz #11  --->>>  ===
(Q-4-1) Что покажет console.log ?
true, false, false
This is a wrong answer
true, true, false
This is a correct answer
false, false, true
This is a wrong answer
true, false, true
This is a wrong answer
|--------------------------------------------------
*/

// const a = false == 0;
// const b = '0' == 0;
// const c = {} == {};

// console.log(a, b, c); // true true false


/**
|--------------------------------------------------
  === <<<---  Quiz #12 --->>>  ===
(Q-4-2) Что покажет console.log ?
true, false, true, true
This is a wrong answer
false, false, true, false
This is a wrong answer
false, false, false, true +++
This is a correct answer
false, true, false, false
This is a wrong answer
|--------------------------------------------------
*/

// ??? false false false false

// const arr = [];
// const arr1 = arr;

// const a = false === 0;
// const b = '0' === 0;
// const c = [] === [];
// const d = arr === arr1;

// console.log(a, b, c, b); // false, false, false, true




/**
|--------------------------------------------------
  === <<<---  Quiz #13 --->>>  ===
(Q-4-3) Что покажет console.log ?
false, false, true,
This is a wrong answer
true, true, false
This is a wrong answer
true, false, false
This is a wrong answer
false, true, false +++
This is a correct answer
|--------------------------------------------------
*/
// ??? SyntaxError

// const func = () => {};
// const func1 = () => {};
// const func2 = func;

// const a = func === func1;
// const b = func2 === func;
// const c = func2 === () => {};

// console.log(a, b, c);



/**
|--------------------------------------------------
  === <<<---  Quiz #14  --->>>  ===
(Q-5-1) Что покажет console.log ?

Все, что приводиться к строке, становиться строкой!
let a = 1;
let b = '2';
let c = 3;
const d = [];
const e = {}
const f = [2, 4, 8]
const g = {name: 'Ivan', age: 26, marrid: false};

console.log(a + b); // 12
console.log(b + c); // 23
console.log(b + d); // 2
console.log(c + d); // 3
console.log(b + f); // 22,4,8
console.log(f + b); // 2,4,82
console.log(b + g); // 2[object Object]
console.log(g + b); // [object Object]2
console.log(c + g); // 3[object Object]
console.log(g + c); // [object Object]3
|--------------------------------------------------
*/

// const a = 'some' + false;
// const b = [1,2,3] + '1';
// const c = 'any' + 123;

// console.log(a, b, c); // somefalse 1,2,31 any123


/**
|--------------------------------------------------
  === <<<---  Quiz #15 --->>>  ===
(Q-5-2) Что покажет console.log ?

Если в строке есть что-либо, кроме пробелов ('123ab'), оно не конвертируется в число, а становится NaN
|--------------------------------------------------
*/

// const a = 1 + '123';
// const b = 1 + +'123';
// const c = 2 + +'123ab';

// console.log(a, b, c); // 1123 124 NaN


/**
|--------------------------------------------------
  === <<<---  Quiz #16  --->>>  ===
(Q-5-3) Что покажет console.log ?

|--------------------------------------------------
*/
// const a = !!'';
// const b = !!-1;
// const c = !![1];
// const d = !![];

// console.log(a, b, c, d); // false true true true



/**
|--------------------------------------------------
  === <<<---  Quiz #17  --->>>  ===
(Q-5-4) Что покажет console.log ?

|--------------------------------------------------
*/

// const a = true + false;
// const b = false + '';
// const c = !![1];
// const d = !![];

// console.log(a, b, c, d); // 1 "false" true true

/**
|--------------------------------------------------
  === <<<---  Quiz #18  --->>>  ===
(Q-5-5) Что покажет console.log ?

|--------------------------------------------------
*/

// const a = Boolean(NaN);
// const b = Boolean(null);
// const c = Boolean(undefined);
// const d = Boolean(false);

// console.log(a, b, c, d); // false false false false

/**
|--------------------------------------------------
  === <<<---  Quiz #19  --->>>  ===
(Q-6-1) Что покажет console.log ?

hoisting не свойственен function expression, лишь function declaration
|--------------------------------------------------
*/

// 'use strict';

// console.log( func1()); // dclaration
// console.log( func2()); // Error

// function func1() {
//   return 'dclaration';
// }

// const func2 = () => {
//   return 'arrow';
// }


/**
 |--------------------------------------------------
 === <<<---  Quiz #20  --->>>  ===
 (Q-6-2) Что покажет console.log ?

|--------------------------------------------------
*/

// const func2 = () => {
//   return 'arrow';
// }; 

// console.log( func1()); // declaration
// console.log( func2()); // arrow

// function func1() {
//   return 'declaration';
// }

/**
|--------------------------------------------------
  === <<<---  Quiz #21  --->>>  ===
(Q-6-3) Что покажет console.log ?

clickCount = 0 = потому что это функция на момент создания, которая еще не запущена.
|--------------------------------------------------
*/

// const createClicker = () => {
//   let clickCount = 0;

//   return {
//     get() { return clickCount },
//     increase() { clickCount += 1 },
//   }
// };

// const clicker1 = createClicker();

// clicker1.increase(); // 0+1
// clicker1.increase(); // 1+1

// console.log( clicker1.get() ); // 2

/**
|--------------------------------------------------
  === <<<---  Quiz #22  --->>>  ===
  (Q-6-4) Что покажет console.log ?

|--------------------------------------------------
*/

// const createClicker = () => {
//   let clickCount = 0;

//   return {
//     get() { return clickCount },
//     increase() { clickCount += 1 },
//   }
// };

// const clicker1 = createClicker();
// const clicker2 = createClicker();

// clicker1.increase(); // 0 + 1
// clicker1.increase(); // 1 + 1

// clicker2.increase(); // 0 + 1

// console.log( clicker1.get(), clicker2.get()); // 2, 1

/**
|--------------------------------------------------
  === <<<---  Quiz #23  --->>>  ===
  (Q-6-5) Что покажет console.log ?

  Все кликеры работают с одной переменной!
|--------------------------------------------------
*/

// let clickCount = 0;

// const createClicker = () => {
//   return {
//     get() { return clickCount },
//     increase() { clickCount += 1 },
//   }
// };

// const clicker1 = createClicker();
// const clicker2 = createClicker();

// clicker1.increase();
// clicker1.increase();

// clicker2.increase();

// console.log( clicker1.get(), clicker2.get()); // 3, 3







// EXAMPLES

// === <<<--- What will show console.log? -  --->>>  ===
// var a = {};

// (function b ( a ) {
//     a.a = 10;
//     a = null;
// })( a );

// console.log(a); // {a: 10}




// === <<<--- What will show console.log? -  --->>>  ===
// console.log(1);

// setTimeout(function timeout() {
//     console.log(2);
// }, 0);

// Promise.resolve().then(function(){
//     console.log(3); // event loop забрасывает в call stack из tasks queue в 1-ю очередь микро задачи.
// });

// console.log(4);



// === <<<--- What will show console.log? -  --->>>  ===
// console.log('10'+20+30); // 102030
// console.log(10+20+'30'); // 3030



// === <<<--- What will show console.log? -  --->>>  ===
// const a = {
//   field1: '1',
//   field2: 2
// };

// const b = a;
// const c = b;

// c.field2 = 222;
// b.field1 = '123';

// console.log(a === b); // true
// console.log(a === c); // true

// console.log(a.field1); // 123
// console.log(a.field2); // 222



// === <<<--- What will show console.log? -  --->>>  ===
// var a = 1;
// function f() {
//   console.log(a); // Cannot access 'a' before initialization
//   let a = 2;
// }
// f();










