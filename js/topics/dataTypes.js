// 'use strict';

/**
|--------------------------------------------------
  === <<<---  Question #1 --->>>  ===
Какие типы данных есть в JS?
I - примитивные типы данных - передаются по значению
Number
String
Boolean
null
undefined
symbol
bigInt
II - ссылочные типы данных - передаются по ссылке
Object
|--------------------------------------------------
*/

// // ===|=== ПРИМИТИВНЫЕ ТИПЫ ДАННЫХ
// console.log(' -- * NUMBER * -- ');
// console.log(typeof 123); // number
// console.log(typeof 5.4); // number

// // NaN - образуется при попытке что-то, что не является числом привести к числу
// console.log(typeof NaN); // number
// console.log(typeof (20 * 'hi')); // number
// console.log('is12' * 2); // NaN
// console.log('4a' * 2); // NaN
// console.log(0.5 + 0.1); // 0.6
// console.log(0.5 + 0.1 == 0.6); // true
// console.log(0.1 + 0.2 == 0.3); // false

// // Infinity - результат деления на ноль (- Infinity & - 0)
// console.log(typeof Infinity); // number
// console.log(typeof (11 / 0)); // number
// console.log(typeof (11 / 0)); // number
// console.log(Math.max()); // -Infinity
// console.log(Math.min()); // Infinity


// console.log(' -- * STRING * -- ');
// console.log(typeof 'Hello world'); // string
// console.log(typeof "Hello world"); // string
// console.log(typeof `Hello world`); // string
// console.log(typeof "24"); // string
// console.log(typeof '24'); // string


// console.log(' -- * BOOLEAN * -- ');
// console.log(typeof true); // boolean
// console.log(typeof false); // boolean
// console.log(0 != null); // true
// console.log(null == 0); // false
// console.log(undefined != 0); // true
// console.log(0 == undefined); // false
// console.log(0 <= null); // true
// console.log(0 >= null); // true
// console.log(null == null); // true
// console.log(null === null); // true
// console.log(null == undefined); // true
// console.log(null == undefined); // false
// console.log(undefined === null); // true
// console.log(8 <= 10); // true
// console.log(true + true + true === 3); // true
// console.log(true - true === 0); // true


// // null - это указатель, что некое значение отсутствует, или оно не известно.
// console.log(' -- * NULL * -- ');
// console.log(typeof null); // object - особенность языка JS (внутренняя ошибка)


// console.log(' -- * UNDEFINED * -- ');
// // undefined - значение переменной не установлено, переменная ничему не равна, или ей ничего не задано
// console.log(typeof undefined); // undefined


// // symbol - используется для задания уникальных идентификаторов для свойств объектов
// console.log(' -- * SYMBOL * -- ');
// console.log(typeof Symbol()); // symbol
// var last_name = Symbol("LN");
// var person = {
//   first_name: "John",
//   [last_name]: "Average"
// };
// person["first_name"] === "John";
// person[last_name] === "Average";



// // BigInt
// console.log(typeof 0n); // bigint
// console.log(typeof 1n === 'bigint'); // true
// console.log(typeof BigInt('1') === 'bigint'); // true
// console.log(0n == 0); // true
// console.log(0n === 0); // false








// ===|=== ССЫЛОЧНЫЕ ТИПЫ ДАННЫХ
// console.log(' -- * OBJECT * -- ');
// console.log(typeof {}); // object
// console.log(typeof []); // object
// console.log(typeof function(){}); // function (разновидность объекта)
// console.log(typeof ['false', 1, 'one', 2, 'two', 'true']); // object
// console.log([] + []); // ""
// console.log([] + {}); // [object Object]
// console.log({} + []); // [object Object]
// console.log((!+[] + [] + ![]).length); // 9 - ПОЧЕМУ
// console.log([] == 0); // true - ПОЧЕМУ
// console.log([] === 0); // false




// |+|+|+| === SECTION #1 ===  |+|+|+|
/* 
ПРЕОБРАЗОВАНИЕ ТИПОВ ДАННЫХ В JAVASCRIPT
js нет строгой типизации. Это означает, что в определенных случаях, данные одного типа могут быть преобразованы в другой тип автоматически.

значение	в Number	в String	в Boolean
false	    0	        «false»	  false
0	        0	        «0»	      false
null	    0	        «null»	  false
NaN	      NaN	      «NaN»	    false
«»	      0	        «»	      false
undefined	NaN	      «undefined»	false
true	    1	        «true»	  true
1	        1	        «1»	      true
«0»	      0	        «0»	      true
«1»	      1	        «1»	      true
Infinity	Infinity	«Infinity» true
«17»	    17	      «17»	    true
«test»	  NaN	      «test»	  true
[ ]	      0	        «»	      true
[17]	    17	      «17»	    true
[17,18]	  NaN	      «17,18»	  true
[«test»]	NaN	      «test»	  true
{ }	      NaN	      «[object Object]»	    true
{ key: «test» }	    NaN	    «[object Object]»	    true
function(){}	  NaN	    «function(){}»	     true
 */



// |+|+|+| === SECTION #2 ===  |+|+|+|
/* 
Преобразование к строке: в ручную: c помощью функции String():
*/

// var a = String(15); // "15"
// var b = String(true); // "true"
// var c = String(null); // "null"
// var d = String(undefined);// "undefined"


/* 
Преобразование к строке: С помощью метода toString(), только для Number и Boolean:
*/
// var a = (15).toString(); // "15"
// var b = (true).toString(); // "true"

/* 
Преобразование к строке: Автоматически: При выводе в консоль или alert, а так же при innerHTML:
*/
// var status = true;
// console.log(status); // "true"
// document.getElementById("container").innerHTML = status; // "true"

/* 
Преобразование к строке: При сложении через бинарный плюс: Если хотя бы один операнд (элемент) выражения является строкой, то и второй будет преобразован к строке:
*/

// "test" + 15     //"test15"
// "test" + true   //"testtrue"
// "test" + null   //"testnull"
// "test" + undefined   //"testundefined"
// "" + 15      //"15"
// "" + true  //"true"
// "" + null  //"null"
// "" + undefined  //"undefined"



// |+|+|+| === SECTION #3 ===  |+|+|+|
/* 
Преобразование к числу: В ручную: С помощью функции Number()
*/

// Number("5") // 5
// Number("a5") // NaN (не удалось распарсить число)
// Number("5a") // NaN (не удалось распарсить число)
// Number(true) // 1
// Number(false) // 0
// Number(null) // 0
// Number(undefined) // NaN

/* 
Преобразование к числу: С помощью оператора унарный +
*/

// 5 + "5" // "55" (произошло приведение к строке)
// 5 + +"5" // 10
// +"true" // NaN
// +true // 1
// +false // 0
// +"test" // NaN
// +null // 0
// +undefined // NaN

/* 
Преобразование к числу: С помощью функции parseInt()
*/

// parseInt("test", 10) // NaN
// parseInt(true, 10) // NaN
// parseInt(null, 10) // NaN
// parseInt(undefined, 10) // NaN
// parseInt("12a34", 10) // 12
// parseInt("1234", 10) // 1234
// parseInt("a1234", 10) // NaN


/* 
Преобразование к числу: Автоматически: при математических операциях (кроме случая сложения со строкой и строгое равенство ===, !==)
*/

// "2" < 5 // true
// "2" > 5 // false
// "2" * 5 // 10
// true > 0 // true (true преобразуется к 1)
// true * 5 // 5
// false * 5 // 0 (false преобразуется к 0)
// "2" + 5 // "25"
// "2" === 2 // false (разные типы данных)// undefined приводится к NaN
// undefined > 0 // false
// undefined < 0 // false
// undefined <= 0 // false
// undefined >= 0 // false

// console.log(false * 5); // 0
// console.log('false' * 5); // NaN

/* 
Преобразование к числу:
Null стоит рассмотреть отдельно. При сравнении больше/меньше кажется что null равен нулю. Но прямое сравнение показывает что null нулю НЕ равен. Этот случай является исключением, и его надо учитывать при сравнении различных величин с null.
*/

// console.log(null < 2); // true
// console.log(null > 2); // false
// console.log(null < 0); // false
// console.log(null > 0); // false
// console.log(false > 0); // false
// console.log(false > 0); // false
// console.log(null == 0); // false (как это возможно??? это исключение)
// console.log(null <= 0 ); //true
// console.log(null >= 0 ); //true


/* 
Преобразование к числу:
Null стоит рассмотреть отдельно. При операциях не строгого равенства (через двойное равно)
*/

// true == 1 // true
// true == 2 // false
// "a" == 2 // false
// "2" == 2 // true
// "2a" == 2 // false
// "a2" == 2 // false
// undefined == 0 // false
// null == 0 // false (это исключение!)
// "2" === 2 // false (разные типы данных)

// console.log("a" == 1); // false



// |+|+|+| === SECTION #4 ===  |+|+|+|
/* 
Преобразование к логическому типу: В ручную: С помощью функции Boolean()
*/

// Boolean("text") // true
// Boolean("false") // true
// Boolean("0") // true
// Boolean("1") // true
// Boolean("") // false
// Boolean(1) // true
// Boolean(0) // false
// Boolean(-5) // true
// Boolean(5) // true
// Boolean(null) // false
// Boolean(undefined) // false
// Boolean(NaN) // false
// Boolean(Infinity) // true



/* 
Преобразование к логическому типу: С помощью оператора !!
*/

// !!"test" // true
// !!"false" // true
// !!"0" // true
// !!"" // false
// !!0 // false
// !!1 // true
// !!-15 // true
// !!null // false
// !!undefined // false

// console.log(!!"text"); // true
// console.log(!!null); // false
// console.log(!null); // true
// console.log(!!undefined); // false
// console.log(!undefined); // true


/* 
Преобразование к логическому типу:
Автоматически: Все выражения, находящиеся внутри оператора if, всегда приводятся к логическому типу.

Причем выражение может состоять как с одного элемента так и из многих.
Если выражение состоит из одного элемента, то следует помнить что в false интерпретируются следующие значения:
пустая строка
число 0
null
undefined
NaN
*/

// if ("") { console.log("True"); } else { console.log("False"); } // False
// if (0) { console.log("True"); } else { console.log("False"); } // False
// if (null) { console.log("True"); } else { console.log("False"); } // False
// if (false) { console.log("True"); } else { console.log("False"); } // False
// if (NaN) { console.log("True"); } else { console.log("False"); } // False
// if (undefined) { console.log("True"); } else { console.log("False" );} // False
// if ("test") { console.log("True"); } else { console.log("False"); } // True
// if (452) { console.log("True"); } else { console.log("False"); } // True
// var status = true;
// if (status) { console.log("True"); } else { console.log("False"); } // True


// var a = "test", b = 4;
// if (a && b) { console.log("True"); } else { console.log("False"); } // True

// var a = {prop: 1}, b = false;
// if (a && b) { console.log("True"); } else { console.log("False"); } // False

// var a = {prop: 1}, b = false;
// if (a || b) { console.log("True"); } else { console.log("False"); } // True

// var a = 25, b = false;
// if (a > b) { console.log("True"); } else { console.log("False"); } // True

// var msg = "done";
// if (status == "done") { console.log("True"); } else { console.log("False"); } // True

// var result = false;
// if (result) { console.log("True"); } else { console.log("False"); } // False

// var statusCode = 115;
// if (statusCode != 0 && statusCode == 115) { console.log("True"); } else { console.log("False"); } // True



// EXAMPLES
// console.log(true + false); // 1
// console.log(12 / "6"); // 2
// console.log("number" + 15 + 3); // number153
// console.log(15 + 3 + "number"); // 18number
// console.log([1] > null); // true
// console.log("foo" + + "bar"); // fooNaN
// console.log('true' == true); // false
// console.log(false == 'false'); // false
// console.log(null == ''); false
// console.log(!!"false" == !!"true"); // true
// console.log(!!false == !!true); // false
// console.log(['x'] == 'x'); // true
// console.log([] + null + 1); // null1
// console.log([1,2,3] == [1,2,3]); // false
// console.log({}+[]+{}+[1]); // [object Object][object Object]1
// console.log(!+[]+[]+![]); // truefalse
// console.log(new Date(0) - 0); // 0
// console.log(new Date(0) + 0); // GMT+0300 (Eastern European Standard Time)0
// console.log(+[]); // 0
// console.log(+undefined); // NaN 




