// // SOURCES
// https://www.youtube.com/watch?v=Wbg1Iyx1cNQ&list=WL&index=27
// https://www.youtube.com/watch?v=0e9eyrxB-LU&list=PLwHvxJae2LazDrHm6ayqLKz6jszEn7ArQ&index=1

// ============ TASK #1 ============

// -------------- Solution #1 Вывести на экран числа находящиеся под главной диагональю матрицы --------------

const matrix =[
  [1, 4, 8, 9],
  [6, 2, 11, 1],
  [8, 0, 3, -5],
  [-2, 10, 8, -1]
];

// // === <<<--- Option I --->>>  ===
// for (let i = 1; i < matrix.length; i++) {
//   for (let j = 0; j < i; j++) {
//     console.log(matrix[i][j]); // 6, 8, 0, -2, 10, 8
//   }
// }


// // === <<<--- Option II --->>>  ===
// matrix.forEach(function(row, outerIndex) {
//   row.forEach(function(num, innerIndex) {
//     if (innerIndex < outerIndex) {
//       console.log(num); // 6, 8, 0, -2, 10, 8
//     } else {
//       return
//     }
//   });
// });


/**
|--------------------------------------------------
  === <<<---  TASK #2  --->>>  ===
Какие есть способы объявлять функции?

|--------------------------------------------------
*/


/**
|--------------------------------------------------
  === <<<---  TASK #5 --->>>  ===
Найти максимальное нечетное чило в массиве.

const arr = ['1', '3', '2', '4', '9', '5', '7', '10', '18'];

map - пробежиться по массиву и вернет те же элементы, только тип number

filter - результатом работы будет новый массив с только нечетными числами. Если результатом работы функции будет true, то те элементы останутся в новом массиве. number % 2 - если остаток деления на 2 будет не номль, а что-нибудь, то это true и этот элемент останется в новом массиве.

reduce - чтоб найти максимальное число в массиве. Reduce пробежиться по каждому оставшемуся элементу в массиве. Callback функция выполнит действие, которое мы передадим сохраняя результат. Если новое значение будет меньше max, то вернется max, если больше, то max обновится.
0 - исходное значение с которого мы начнем работать, до того, как функция дойдет до 1-го числа. 
|--------------------------------------------------
*/

// const arr = ['1', '3', '2', '4', '9', '5', '7', '10', '18'];

// // OPTION I - ES-6
// const res = arr
//       .map((el) => parseInt(el))
//       .filter((number) => number % 2)
//       .reduce((max, value) => Math.max(max, value), 0);

// console.log(res);


// // OPTION II - ES-5
// const res2 = arr
//       .map(function(el) {
//         return parseInt(el);
//       })
//       .filter(function(number) {
//         return number % 2;
//       })
//       .reduce(function(max, value) {
//         return Math.max(max, value)
//       }, 0);


// console.log(res2);


/**
|--------------------------------------------------
  === <<<---  TASK #6 --->>>  ===
Найти максимальное число в массиве / массивах?

Проще всего это сделать используя spread operator
|--------------------------------------------------
*/

// const arr1 = [2, 5, 7, 22];
// const arr2 = [5, 10, 15, 33];
// const arr3 = [7, 14, 21, 43];
// const arr4 = [53, 11, 24, 19];

// const res1 = Math.max(...arr1);
// const res2 = Math.max(...arr1, ...arr2);
// const res3 = Math.max(...arr1, ...arr2, ...arr3);
// const res4 = Math.max(...arr1, ...arr2, ...arr3, ...arr4);
// const res5 = Math.max(44, ...arr1, 55, ...arr2, 66, ...arr3, 77, ...arr4, 88);

// console.log(res1); // 2
// console.log(res2); // 33
// console.log(res3); // 43
// console.log(res4); // 53
// console.log(res5); // 88


/**
|--------------------------------------------------
  === <<<---  TASK #7 --->>>  ===
На основе строки “i am a frontend development” сделать новую строку где первые буквы каждого слова 
будут в верхнем регистре. Использовать for или while.
|--------------------------------------------------
*/

// const str = "i am a frontend development" // output I Am A Frontend Development
// let newStr = '';

// for (let i = 0; i < str.length; i++) {
//   console.log(str[i]);
//   if (str[i - 1] === " " || i === 0) {
//     newStr += str[i].toUpperCase();
//   } else {
//     newStr += str[i];
//   }
// }
// console.log(newStr); // I Am A Frontend Development



/**
|--------------------------------------------------
  === <<<---  TASK #8 --->>>  ===
Дан объект:
let list = {
     name: ‘denis’,
     work: ‘easycode’,
     age: 29
}

Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре.
Использовать for in.
|--------------------------------------------------
*/

// let list = {
//   name: 'denis',
//   work: 'easycode',
//   age: 29
// }

// for (let key in list) {
//   if (typeof list[key] === 'string') {
//     list[key] = list[key].toUpperCase();
//   }
// }

// console.log(list);

/**
|--------------------------------------------------
  === <<<---  TASK #9 --->>>  ===
Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
|--------------------------------------------------
*/

// function multiply () {
//   // if (arguments.length === 0); return 0;
//   if (!arguments.length) return 0; // более короткая запись - если нет длинны, верни 0
//   let result = 1;
//   for (let i = 0; i < arguments.length; i++) {
//     // console.log(arguments[i]);
//     if (!isNaN(arguments[i])) {
//       result *= arguments[i];
//     }
//   }
//   console.log(result);
//   return result // функция должна возвращать наружу результат вычисления
// }

// multiply(1, 2, 3, 4, 5);


/**
|--------------------------------------------------
  === <<<---  TASK #10 --->>>  ===
Создать функцию угадай число. 
Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). 
Генерирует рандомное число от 1-10 и сравнивает с переданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. 
Числа в строке указаны как пример вы подставляете реальные числа.

Math.ceil - округление всегде вверх. Если 0.03 = 0.1
|--------------------------------------------------
*/
// function guessNumber (number) {
//   console.log(number);
//   if (number < 1 || number > 10) {
//     console.log("Функция должна принимать число от 1 до 10!");
//     return;
//   }

//   const random = Math.random();
//   const ceil = Math.ceil(random * 10);
//   console.log(random, ceil);

//   if (ceil === number) {
//     console.log("Победа!");
//   } else {
//     console.log(`Вы не угадали ваше число ${number}, а выпало число ${ceil}`);
//   }
// }

// guessNumber(4);


/**
|--------------------------------------------------
  === <<<---  TASK #11 --->>>  ===
Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений: 
changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.
|--------------------------------------------------
*/

// function changeCollection () {
//   // console.log(arguments);
//   let result = [];

//   for (let i = 0; i < arguments.length; i++) {
//     arguments[i].shift();
//     console.log(arguments[i]);
//     result.push(arguments[i]);
//     // result.push(arguments[i]);
//   }
//   console.log(result);
// }

// changeCollection([2, 3, 4], [5, 77, 21], [9, 5]);


/**
|--------------------------------------------------
  === <<<---  TASK #12 --->>>  ===
Создать две функции и дать им осмысленные названия:
- первая функция принимает массив и колбэк (одна для всех вызовов)
- вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

Первая функция возвращает строку “New value: ” и результат обработки:

firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
“New value: Jhon is 45, Aaron is 20,”
firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются


Подсказка: secondFunc должна быть представлена функцией, которая принимает
один аргумент (каждый элемент массива) и возвращает результат его обработки

|--------------------------------------------------
*/

// function firstFunc (arr, handler) {
//   let res = "NEW VALUE: ";
//   for (let i = 0; i < arr.length; i++) {
//     res += handler(arr[i]);
//   }

//   return res;
// }

// const res1 = firstFunc(['hello', 'world', 'i', 'like', 'a', 'javascript'], function(item) {
//   return item[0].toUpperCase() + item.slice(1) + " ";
// });
// console.log(res1);


// const res2 = firstFunc([10, 20, 30, 40, 50], function(item) {
//   return item * 10 + " ";
// });
// console.log(res2);
