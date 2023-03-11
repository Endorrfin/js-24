// 'use strict';

/**
|--------------------------------------------------
  === <<<---  Quiz #1 --->>>  ===
(Q-6-1) Что не является отдельным типом данных?
null
undefined
NaN +++
symbol - примитивный тип данных
|--------------------------------------------------
*/

// console.log(typeof(null)); // object
// console.log(typeof(undefined)); // undefined
// console.log(typeof Symbol()); // symbol
// console.log(typeof(NaN)); // number


/**
|--------------------------------------------------
  === <<<---  Quiz #2  --->>>  ===
(Q-6-2) Что покажет console.log ?
{g: "here"} +++
{h: "there", g: "here"}
null

COMMENT:
Объект передается по ссылке, но не переменные.
var a = {g: 'here'}; - старая ссылка
var b = a; - сслылается на старую ссылку
a = {h: 'there'}; - новая ссылка
по ссылке меняется какое-то значение в объекте, но не сам объект
|--------------------------------------------------
*/

// var a = {
//   g: 'here'
// };

// var b = a;

// a = {
//   h: 'there'
// };

// console.log(b); // {g: "here"}


/**
|--------------------------------------------------
  === <<<---  Quiz #3 --->>>  ===  
(Q-6-3) Что покажет console.log ?
"there"
Error: reference error
"here" +++
"herethere"

COMMENT:
Простые типы данных, в них просто копируется значение
|--------------------------------------------------
*/

// var a = 'here';
// var b = a;
// a + 'there';

// console.log(b); // here

/**
|--------------------------------------------------
  === <<<---  Quiz #4 --->>>  ===
(Q-6-4) Что покажет console.log ?
Error
true
Symbol is not a function
false +++
|--------------------------------------------------
*/

// var a = Symbol("here");
// var b = Symbol("here");

// console.log(a === b); // false

/**
|--------------------------------------------------
  === <<<---  Quiz #5 --->>>  ===
(Q-6-5) Что покажет console.log ?
5, "5", Number {5} +++

COMMENT: 
new - всегда возвращает объект
|--------------------------------------------------
*/

// console.log(Number(5)); // 5
// console.log(String(5)); // 5
// console.log(new Number(5)); // Number {5}

/**
|--------------------------------------------------
  === <<<---  Quiz #6 --->>>  ===
(Q-7-1) Что не является отдельным типом данных
Array, Object, Function, Set
Array, Function, Infinity, arguments +++
Array, NodeList, Map, Object
Array, NodeList, Map, undfined
|--------------------------------------------------
*/



/**
|--------------------------------------------------
  === <<<---  Quiz #7 --->>>  ===
(Q-7-2) Код в какой переменной сработает и не упадет?
a, d
b, c +++
b, d
a, c


COMMENT: 
arguments - это псевдомассив, у которого нет методов массива, но есть forEach
|--------------------------------------------------
*/

// function fuctioName(a, b, c) {
//   var a = arguments.map(item => item)
//   var b = Array.from(arguments).slice(item => item)
//   var d = arguments.slice(item => item)
//   var c = [...arguments].filter(item => item)
// }

/**
|--------------------------------------------------
  === <<<---  Quiz #8 --->>>  ===
(Q-8-1) Что покажет console.log ?
undefined, undefined, 2, Error +++

COMMENT:
var is hoisting со значением undefined
function declaration - is hoisting
|--------------------------------------------------
*/

// console.log(a); // undefined
// console.log(b); // undefined
// console.log(func()); // 1
// console.log(func1()); // Error

// var a = 'there'
// var b = { h: 2 };

// function func() { return 2; }

// var func1 = function () { return 3; };

/**
|--------------------------------------------------
  === <<<---  Quiz #9 --->>>  ===
(Q-8-2) Что покажет console.log ?

Error, Error +++
|--------------------------------------------------
*/

// console.log(a); // Error
// console.log(b); // Error

// let a = 'there'
// const b = 'here';

/**
|--------------------------------------------------
  === <<<---  Quiz #10 --->>>  ===
(Q-8-3) Что покажет console.log ?
undefined, 'some' +++
|--------------------------------------------------
*/

// console.log(a); // undefined
// a = 'there';
// var a = 'some';
// console.log(a); // some


/**
|--------------------------------------------------
  === <<<---  Quiz #11 --->>>  ===
(Q-9-1) Что покажет console.log ?

undefined, undefined, undefined +++
|--------------------------------------------------
*/

// var b, t, c;

// (() => {
//   let b = 2; // undefined
//   let t = 4; // undefined
//   let c = 3; // undefined
// }) ()

// console.log(b, t, c);


/**
|--------------------------------------------------
  === <<<---  Quiz #12 --->>>  ===
(Q-9-2) Что покажет console.log ?

undefined, undefined, 3 +++

COMMENT: 
Блочная область видимости работает для переменных let и const!
|--------------------------------------------------
*/

// var b, t, c;

// if (true) {
//   let b = 2;
//   const t = 4;
//   var c = 3;
// }

// console.log(b, t, c); // undefined undefined 3

/**
|--------------------------------------------------
  === <<<---  Quiz #13 --->>>  ===
(Q-9-3) Что покажет console.log ?
7 +++

COMMENT:
Область видимости добавляется функции, когда она объявляется.
В зависимости от того, где объявлена функция, та область видимости ей видна.
|--------------------------------------------------
*/

// var a = 7;

// function test () {
//   console.log(a); // 7 - глобальная область видимости!
// }

// function func() {
//   var a = 10;
//   test();
// }

// func();




// === Example II ===
// var a = 7;

// function test (a) {
//   console.log(a); // 10
// }

// function func(a) {
//   var a = 10;
//   test(a);
// }

// func();

/**
|--------------------------------------------------
  === <<<---  Quiz #14 --->>>  ===
(Q-9-4) Что покажет console.log ?
7
10
5 +++
undefined

COMMENT:
все a это a объявлена в глобальной переменной, а далее по коду она просто переопределяется
|--------------------------------------------------
*/

// var a = 7;
// function func() {
//   a = 10;

//   function test () {
//     a = 5;
//   }

//   test();
// }

// func();

// console.log(a); // 5
 

/**
|--------------------------------------------------
  === <<<---  Quiz #15 --->>>  ===
(Q-9-5) Что покажет console.log ?
7, 15
10, 15
7, 10
10, 10 +++

COMMENT: 
a была переопределена на 10, console.log работает с глобальной переменной b, которая равна 10!
|--------------------------------------------------
*/

// var a = 7;
// var b = 10;

// function func() {
//   a = 10;
//   var b = 13;

//   if (true) {
//     const a = 12;
//     b = 15; // но она работает с внутренней b, поэтому b = 13 переопеделяется на b = 15
//   }
// }

// func();

// console.log(a, b); // 10, 10


/**
|--------------------------------------------------
  === <<<---  Quiz #16  --->>>  ===
(Q-9-6) Что покажет console.log ?

"Bob", undefined
"Bob", "Bill"
"John", "John" +++ 
"Bob", "John"
|--------------------------------------------------
*/

// var group = {
//   person: 'Bob'
// };

// function func(b) {
//   var newGroup = b;

//   newGroup.person = 'Bill';

//   if (b) {
//     newGroup.person = 'John';
//   }

//   return newGroup;
// }

// var newPerson = func(group).person;

// console.log(group.person, newPerson); // John John


// Все меняется по ссылке
// Ссылка на один и тот же объект, нигде объект не копируется, везде ссылка та же самая

/**
|--------------------------------------------------
  === <<<---  Quiz #17 --->>>  ===
(Q-9-7) Что покажет console.log ?
scope-7
15, 15
7, 15 +++
7, 10

COMMENT: 
Значение копируется в переменную
Мы не объявляем переменную, если бы объявили, то b осталось бы в блоке!
|--------------------------------------------------
*/

// var a = 7;

// function func(b) {
//   b = 10;

//   if (true) {
//     b = 15;
//   }

//   return b;
// }

// var b = func(a);

// console.log(a, b); // 7 15


/**
|--------------------------------------------------
  === <<<---  Quiz #18  --->>>  ===
(Q-10-1) Что покажет console.log ?
window, window
dom element (node), window +++
window, undefined
window, dom element (node)

COMMENT:
будет dom.element потому что на нем вызывается эелемент
window - потому что стрелочная функция, к ней приставляется this в тот момент, когда она создается.
|--------------------------------------------------
*/

// var node = document.querySelector('div');

// node.addEventListener('click', function() { console.log(this) });
// node.addEventListener('click', () => { console.log(this) }); 

// node.click();

/**
|--------------------------------------------------
  === <<<---  Quiz #19 --->>>  ===
(Q-10-2) Что покажет console.log ?
{ b:1, ... }, window
undefined, undefined
{ b:1, ... }, { b:2, ... }, +++
{ b:1, ... }, { b:1, ... }

COMMENT
getContext: function () { console.log(this) } - это не область видимости, а контекст вызова
this определяется на основе того, на каком объекте вызывается функция
если this вызывается в глобальной области видимости, то она ссылается на window
|--------------------------------------------------
*/

// var a = {
//   b: 1,
//   getContext: function () { console.log(this) }
// };

// var b = {
//   b: 2,
//   getContext: a.getContext
// };

// console.log( a.getContext()); // {b: 1, getContext: ƒ}
// console.log( b.getContext()); // {b: 2, getContext: ƒ}


/**
 |--------------------------------------------------
 === <<<---  Quiz #20 --->>>  ===
(Q-10-3) Что покажет console.log ?
{ b:1, ... }, { b:1, ... }, { b:2, ... }
{ b:1, ... }, { b:2, ... }, { b:3, ... }
{ b:1, ... }, { b:2, ... }, { b:2, ... }
{ b:1, ... }, window, { b:2, ... } +++

COMMENT:
1-й случай будет объект a
2-й случай c bind(this) - когда срабатывает a.getContext.bind(this)? 
Когда создается объект b, или когда вызываем функцию? А this на момент создания объекта b = window
3-й bind(b) - здесь будет всегда объект b. Срабатывает в момент создания объекта с
|--------------------------------------------------
*/

// var a = {
//   b: 1,
//   getContext: function () { console.log(this) }
// };

// var b = {
//   b: 2,
//   getContext: a.getContext.bind(this)
// };

// var c = {
//   b: 2,
//   getContext: a.getContext.bind(b)
// };

// console.log( a.getContext() );
// console.log( b.getContext() );
// console.log( c.getContext() );


/**
|--------------------------------------------------
  === <<<---  Quiz #21 --->>>  ===

  (Q-10-4) Что покажет console.log ?
{prop: "here"}, window, function() { ... }
{prop: "here"}, {prop: "here"}, function() { ... } +++
window, window, {prop: "here"}
function() { ... }, {prop: "here"}, function() { ... }

COMMENT:
1-й call вызывает и сеттит this и аргументы, аргументы у нас пропущены, остается лишь this
2-й apply тоже вызывает
3-й bind создает новую функцию, не вызывает
|--------------------------------------------------
*/

// var a = {
//   b: 1,
//   getContext: function () { console.log(this) }
// };

// var d = { prop: 'here' };

// var b = a.getContext.call(d);
// var c = a.getContext.apply(d);
// var g = a.getContext.bind(d);

// console.log(b, c, g);

/**
|--------------------------------------------------
  === <<<---  Quiz #22 --->>>  ===
(Q-10-5) Что покажет console.log ?
window, window +++
{ b: 1, ...}, { b: 2, ...}
{ b: 1, ...}, window
window, { b: 2, ...}

COMMENT:
1-й стрелочная функция получает контекст в момент создания
2-й та же стрелочная функция и она не меняет свой контекс, а у нее он тот же, что и был в момент ее создания. Еще можно заменить на функции обернутую в bind.this - будет тот же результат
|--------------------------------------------------
*/

// var a = {
//   b: 1,
//   getContext: () => { console.log(this) }
// };

// var b = {
//   b: 2,
//   getContext: a.getContext
// };

// console.log( a.getContext() ); // Window
// console.log( b.getContext() ); // Window


/**
|--------------------------------------------------
  === <<<---  Quiz #23 --->>>  ===
(Q-10-6) Что покажет console.log ?
{ b: 3, ... } +++
{ b: 1, ... }
undefined
window

COMMENT:
Функция живет себе как строка! this сработает и функция создастся лишь в тот момент, когда будет вызвана. А до этого момента она просто живет, как строка
|--------------------------------------------------
*/

// var a = {
//   b: 1,
//   getContext: function() {
//     var self = this;

//     (() => {
//       console.log(self) // {b: 3, getThis: ƒ}
//     })();
//   }
// };

// var d = { b: 3 };

// d.getThis = a.getContext;

// d.getThis();


/**
|--------------------------------------------------
  === <<<---  Quiz #24 --->>>  ===
(Q-11-1) Что покажет console.log ?
1,2,3, "loop!"
3,3,3, "loop!"
"loop!", 3,3,3
"loop", 4,4,4 +++

COMMENT:
Если i = 4, только тогда выйдет из блока. var имеет функциональную область видимости, не блочную, поэтому var живет и вне for,соответственно на момент выполнения setTimeout i будет равна 4
callback setTimeout вызвется в конце, после выполнения всего кода console.log
|--------------------------------------------------
*/

// for (var i = 1; i < 4; i++) {
//   setTimeout(function(){ console.log(i) }, 0);
// }

// console.log('loop'); // loop, 4, 4, 4


// OPTION II
// for (let i = 1; i < 4; i++) {
//   setTimeout(function(){ console.log(i) }, 0);
// }

// console.log('loop'); // loop 1, 2, 3


/**
|--------------------------------------------------
  === <<<---  Quiz #25 --->>>  ===
(Q-11-2) Через какое минимальное время выполнится setTimeout?
Нет минимальной задержки
1мс
3мс
4мс +++
|--------------------------------------------------
*/

// setTimeout(function(){ }, 0);

/**
|--------------------------------------------------
  === <<<---  Quiz #26 --->>>  ===
(Q-11-3) Что покажет console.log ?
'loop!', 'finish!', 3, 1, 2, 0 +++
'loop!', 'finish!', 0, 1, 2, 3,
0, 'loop!', 1, 2, 3,'finish!'
3, 1, 2, 0, 'loop!', 'finish!',
|--------------------------------------------------
*/

// setTimeout(() => {console.log(0); }, 3000);
// // console.log('loop!'); // loop!

// setTimeout(() => {console.log(1); }, 1000);

// setTimeout(() => {console.log(2); }, 2000);

// setTimeout(() => {console.log(3); }, 0);

// console.log('finish!'); // finish!

// 3
// 1
// 2
// 0



// EXAMPLES

// === <<<--- What will show console.log? -  --->>>  ===

