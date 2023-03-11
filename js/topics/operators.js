// 'use strict';

// |+|+|+| ===  SECTION #1 ===  |+|+|+|
/* 
Бинарные операторы: в случае применения операторов к разным типам данных они будут преобразованоы в числа.
*/

// let multyplay = '12' * '7';
// console.log(multyplay); // 84

// let subtraction = 12 - 'text';
// console.log(subtraction); // NaN

// let divide = '20' / 2;
// console.log(divide); // 10

// let booleans = true + true;
// console.log(booleans); // 2

// let subtr = '10' - true;
// console.log(subtr); //9

// let addition = 10 + true;
// console.log(addition); // 11

// let additionStr = '10' + true;
// console.log(additionStr); // 10true



// |+|+|+| ===  SECTION #2 ===  |+|+|+|
/* 
Бинарные операторы: в случае применения бинарного оператора + к строкам, они объединяются в одну строку (конкатенация).
*/

// let string = 'Test' + 'string';
// console.log(string); // Teststring


/* 
Если хотя бы один операнд строка и испльзуется бинарный +, тогда все преобразуется в строку.
*/

// let string2 = 12 + 'text' + 17;
// console.log(string2); // 12text17



// |+|+|+| ===  SECTION #3 ===  |+|+|+|
/* 
Бинарные операторы: остатоко от деления (%) возвращает целый остаток от деления левого операнда на правый.
*/

// console.log(12 % 5); // 2
// console.log(6 % 3); // 0
// console.log(13 % 7); // 6


// |+|+|+| ===  SECTION #4 ===  |+|+|+|
/* 
Унарный оператор: унарный оператор +, то есть применяемый к одному операнду, преобразовывает строки к числу.
*/

// let one = +'50';
// console.log(one); // 50
// let two = 12 + '70';
// console.log(two); // 1270
// let three = 12 + +'70';
// console.log(three); // 82


// |+|+|+| ===  SECTION #5 ===  |+|+|+|
/* 
операторы сравнения: Во всех случаях, кроме === и !==, при сравнении значений сначала происходит приведение типов (преобразование к числу).
*/
// console.log(15 > 5); // true
// console.log(15 >= 14); // true
// console.log(2 == 2); // true
// console.log(2 != '2'); // false
// console.log(2 == '2'); // true
// console.log('15' < 25); // true
// console.log(true > 0); // true
// console.log(true > 5); // false
// console.log(false > 1); // false
// console.log(false < 1); // true
// console.log(false == 0); // true
// console.log(null == 0); // false
// console.log(null == null); // true


// |+|+|+| ===  SECTION #6 ===  |+|+|+|
/* 
операторы сравнения: сравнения строк происходит побуквенно (первая буква с первой, вторая со второй и т.д.) Каждый символ имеет свой числовый код, который и сравнивается.
*/

// console.log('d' < 'x'); // true
// console.log('d' != 'x'); // true
// console.log('d' > 'z'); // false
// console.log('d' > 'Z'); // true
// console.log('John' > 'Smith'); // false
// console.log('15' > '5'); // false


// |+|+|+| ===  SECTION #7 ===  |+|+|+|
/* 
операторы равенства: в не строгом равенстве (==) разные типы сначала приводяться к одному типу, а потом сравниваются.
*/

// console.log(0 == false); // true
// console.log(0 == ''); // true
// console.log('' == false); // true
// console.log(12 == '12'); // true
// console.log('12a' == 12); // false

/* 
В строгом равенстве (===) должен совпасть и тип и значение.
*/

// console.log('' === false); // false
// console.log('' === ''); // true
// console.log(false === 'false'); // false
// console.log(false === false); // true

/* 
сравнение с null и undefined: при математических операциях null преобразовывается к 0, а undefined - NaN;
null и undefined равны '==' только между собой, но не равны никакому другому значению.
*/

// console.log(null == 0); // false
// console.log(undefined == 0); // false
// console.log(null == undefined); // true




// |+|+|+| ===  SECTION #8 ===  |+|+|+|
/* 
логические операторы: || (ИЛИ)
Если хотя бы один из аргументов выражения "вычисляется" как true, то все выражения вычисляюбтся как true;
*/

// console.log(true || false); // true
// console.log(false || true); // true
// console.log(false || false); // false

/* 
логические операторы: || (ИЛИ)
Если аргумент не логического, а другого (числового, строчного и т.д.) типа, то он для вычисления приводится к логическому (к true либо к false).
*/

// console.log('test' || 0); // test ('test' интерпретируется как true,  поэтому = false)
// console.log(null || true); // true (false || true)

// let data = 350;
// let flag = false;
// console.log(data < 10 || data == 350 || flag); // true

/* 
Но само выражение вернет именно тот элемент, который был "вычеслен" как true.
*/

// console.log('test' || 0); // test
// console.log(null || true); // true
// console.log(null || 'done' || false); // done

/* 
Если все аргументы интерпретируются как false, то возвращается последний аргумент.
*/

// let data = 15;
// let empty = '';
// console.log(null || false || data); // 15
// console.log(null || false || empty); // ""

/* 
При помощи оператора || можно определять значение переменных. В переменную запишется первое значение, которое интерпретируется как true либо последнее значение.
*/

// let result = 0 || 'some test';
// console.log(result); // some text

// console.log(0 || 'test' || 'some text'); // test
// console.log(15 || 'test' || 'some text'); // 15
// console.log(15 || 0 || false); // 15
// console.log((15==15) || 'test' || false); // true


/* 
логические операторы: || (ИЛИ). Пример использования
*/

// let a = 0;
// let b = '';

// if (a || b) {
//   console.log("True");
// } else {
//   console.log("False"); // False
// }

// let a2 = 1;
// let b2 = '';

// if (a2 || b2) {
//   console.log("True"); // True
// } else {
//   console.log("False");
// }

/* 
Если переменная a или b (хотя бы одна из) имеет истинное значение (значение интерпретируется как true), то вывести сообщение в консоль
*/


// |+|+|+| ===  SECTION #9 ===  |+|+|+|
/* 
логические операторы: && (И)
Если все аргументы истинны, выражения вычисляется как true, иначе - false;
*/

// console.log(true && false); // false
// console.log(true && true); // true

/* 
Как только хотя бы один аргумент вычисляется как false, он же и возвращается. Если все аргументы true, то возвращается последний.
*/

// console.log('test' && 0); // 0
// console.log(null && true); // null
// console.log(true && 15 && 'string'); // string
// console.log(true && null && 'string'); // null

// let isReady = 'done';
// let open = true;
// console.log(open && isReady); // done


// |+|+|+| ===  SECTION #10 ===  |+|+|+|
/* 
логические операторы: ! (НЕ) и НЕ (!!)
Приводит выражение к логическому типу и меняет его на противоположное
*/

// console.log(!0); // true

/* 
Ноль приводится к логическому типу - false. Полученный результат меняется на противоположный true
*/

// console.log(!'true'); // false
// console.log(!true); // false

/* 
Двойной оператор НЕ (!!) просто преобразует аргумент к логическому типу.
*/

// console.log(!!null); // false
// console.log(!!undefined); // false
// console.log(!!0); // false
// console.log(!!false); // false
// console.log(!!''); // false

// console.log(!!'Some text'); // true
// console.log(!!'true'); // true
// console.log(!!true); // true
// console.log(!!(8==8)); // true
// console.log(!!1<=5); // true







