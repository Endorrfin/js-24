// 'use strict';

/**
|--------------------------------------------------
  === <<<---  Quiz #1 --->>>  ===
What will show console.log?
[1, 2, 3, 4, 5] + ''
|--------------------------------------------------
*/

// console.log([1, 2, 3, 4, 5] + ''); // "1,2,3,4,5"


/**
|--------------------------------------------------
  === <<<---  Quiz #2  --->>>  ===
What will show console.log?
'123' + undefined
|--------------------------------------------------
*/
// console.log('123' + undefined); // "123undefined"


/**
|--------------------------------------------------
  === <<<---  Quiz #3 --->>>  ===  
What will show console.log?
String(null)
|--------------------------------------------------
*/
// console.log(String(null)); // "null"


/**
|--------------------------------------------------
  === <<<---  Quiz #4 --->>>  ===
What will show console.log?
112 + +'1ab'
|--------------------------------------------------
*/

// console.log(112 + +'1ab'); // NaN


// // another example
// console.log(112 + +'1 ab'); // NaN
// console.log(112 + +'1 '); // 113

/**
|--------------------------------------------------
  === <<<---  Quiz #5 --->>>  ===
What will show console.log?
112 + +' 1235'
|--------------------------------------------------
*/

// console.log(112 + +' 1235'); // 1347

/**
|--------------------------------------------------
  === <<<---  Quiz #6 --->>>  ===
What will show console.log?
null >= 0
|--------------------------------------------------
*/

// console.log(null >= 0); // true


// // another example
// console.log(null >= 0); // true
// console.log(null <= 0); // true
// console.log(0 >= null); // true
// console.log(0 <= null); // true
// console.log(0 == null); // false
// console.log(null == 0); // false


/**
|--------------------------------------------------
  === <<<---  Quiz #7 --->>>  ===
What will show console.log?
typeof(null)
|--------------------------------------------------
*/

// console.log(typeof(null)); // object - ошибка языка = typeof = object, but type is null
// console.log(typeof null); // object


/**
|--------------------------------------------------
  === <<<---  Quiz #8 --->>>  ===
What will show console.log?
typeof function() {}
|--------------------------------------------------
*/

// console.log(typeof function() {}); // function - чтобы отличать
// как еще по другому различать function?
// методы должны быть call, apply, bind или прототип.

/**
|--------------------------------------------------
  === <<<---  Quiz #9 --->>>  ===
What will show console.log?
typeof []
|--------------------------------------------------
*/

// console.log(typeof []); // object

/**
|--------------------------------------------------
  === <<<---  Quiz #10 --->>>  ===
What will show console.log?
0 || false || null

Все приводится к boolean!
Если ничего из перечисленного не true, то возвращается поледний false
|--------------------------------------------------
*/

// console.log(0 || false || null); // null


/**
|--------------------------------------------------
  === <<<---  Quiz #11 --->>>  ===
What will show console.log?
null || {prop: 2} || true
|--------------------------------------------------
*/

// console.log(null || {prop: 2} || true); // {prop: 2}

/**
|--------------------------------------------------
  === <<<---  Quiz #12 --->>>  ===
Will it work?
|--------------------------------------------------
*/

// if (1 && 0 && true) {
//   console.log('Will work'); // Will not work
// }

// // explanation
// console.log(1 && 0 && true); // 0

/**
|--------------------------------------------------
  === <<<---  Quiz #13 --->>>  ===
Choose te correct answer
b === undefined
b === false
Error +++
b === 'NEW'
|--------------------------------------------------
*/

// const b = 1 && 'here' && getVall(); // Error
// const getVall = () => 'NEW';

/**
|--------------------------------------------------
  === <<<---  Quiz #14 --->>>  ===
What will be the value of result variable?
() => "Breaking code" +++
"Doing code"
"Breaking code"
false

Комментарий: функция не сработает, но значение то будет выведено
|--------------------------------------------------
*/

// const doStuff = () => 'Doing code';
// const doStuff2 = () => 'Breaking code';

// const result = (1 > 0) && doStuff() && doStuff2;


/**
|--------------------------------------------------
  === <<<---  Quiz #15  --->>>  ===
What will be in console.log?
3
2
1 +++
Error
|--------------------------------------------------
*/

// function makeCounter() {
//   var currentCount = 1;

//   return function() {
//   return currentCount++;
//   };
//   }

//   var counter = makeCounter();

//   counter();
//   counter();

//   var counter = makeCounter();
//   var lastRes = counter();

//   console.log(lastRes); // 1


/**
|--------------------------------------------------
  === <<<---  Quiz #16 --->>>  ===
What will be 'this' value
window
undefined +++
null
f1 
|--------------------------------------------------
*/

// 'use strict'
// function f1() {
//   return this
// }


/**
|--------------------------------------------------
  === <<<---  Quiz #17  --->>>  ===
What will be in console.log?
{prop: 37, func: f}
window
{b:2, func: f} +++
undefined
  
|--------------------------------------------------
*/

// const o = {
//   prop: 37,
//   func: function () {
//     return this;
//   }
// };

// const b = {
//   b: 2,
//   func: o.func
// };

// console.log(b.func());



/**
|--------------------------------------------------
  === <<<---  Quiz #18 --->>>  ===
What will be in console.log?
{prop: 37, func: f}
window +++ - потому что =>
{b:2, func: f}
undefined
|--------------------------------------------------
*/

// const o = {
//   prop: 37,
//   func: () => {
//     return this;
//   }
// };

// const b = {
//   b: 2,
//   func: o.func
// };

// console.log(b.func());


/**
 |--------------------------------------------------
 === <<<---  Quiz #19 --->>>  ===
What will be in console.log?
{prop: 37, func: f}
window
{b:2, func: f}
undefined +++ - потому что 'use strict'
|--------------------------------------------------
*/
// 'use strict'

// const o = {
//   prop: 37,
//   func: () => {
//     return this;
//   }
// };

// const b = {
//   b: 2,
//   func: o.func
// };

// console.log(b.func());

/**
|--------------------------------------------------
  === <<<---  Quiz #20 --->>>  ===
What will be in console.log?
{prop: 37, func: f}
window
{b:2, func: f} +++
undefined
|--------------------------------------------------
*/

// 'use strict'

// const o = {
//   prop: 37,
//   func: function () {
//     return this;
//   }
// };

// const b = {
//   b: 2,
//   func: o.func
// };

// console.log(b.func());

/**
|--------------------------------------------------
  === <<<---  Quiz #21 --->>>  ===
What will be in console.log?
{prop: 37, func: f} +++
window
{b:2, func: f}
undefined
|--------------------------------------------------
*/

// const o = {
//   prop: 37,
//   func: function () {
//     return this;
//   }
// };

// const b = {
//   b: 2,
//   func: o.func.bind(o) // явное указание
// };

// console.log(b.func());

/**
|--------------------------------------------------
  === <<<---  Quiz #22 --->>>  ===
What will show console.log?
if: 2000, showCount: 2000, global: 23
if: 2000, showCount: 200, global: 20 30
if: 2000, showCount: 200, global: 300 2 +++
if: 2000, showCount: 2, global: 2 33
|--------------------------------------------------
*/

// let dogCount = 2;
// let catCount = 3;

// function showCount() {
//   let dogCount = 200;
//   catCount = 300;

//   if (true) {
//     let dogCount = 2000;
//     console.log('If: ', dogCount);
//   }
//   console.log('showCount: ', dogCount);

//   (() => {
//     let dogCount = 20;
//     let catCount = 30;

//     showCount();
//   })();

//   console.log('global:', catCount, dogCount);