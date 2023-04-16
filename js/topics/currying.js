

/*
* CURRYING
* https://www.youtube.com/watch?v=lfNgrsBV9nI&list=PLwHvxJae2LazDrHm6ayqLKz6jszEn7ArQ&index=7
* Каррирование - это техника в функциональном программировании, когда функция принимающая несколько аргументов разбивается на набор функций, каждая из которых принимает только 1 аргумент.
* Чтобы по многу раз не передавать в функцию значения параметров, которые не изменяются, уместо применить каррирование. При каррировании запоминаются значения неизменяющихся параметров с помощью метода bind
*
* https://www.youtube.com/watch?v=pxgMoBMMMXU&list=PLJpSkcgOK72A7ky__8kHNckPpjHFQkC5m&index=6
* Карирование - это такой прием программиирования, который позволяет, скажем вызвать функцию частично, а позже, когда придут еще аргументы, то ее довызывать.
*
*
* */


// -------------- Example 1.1 --------------
// вычисляем объем кирпича. В него ширина и длинна одинаковая а высота всегда разная.
function getBrickValume(width, length, height) {
  return width * length * height;
}

var volume1 = getBrickValume (10, 20, 8);
var volume2 = getBrickValume (10, 20, 12);
var volume3 = getBrickValume (10, 20, 15);
// console.log(volume1);
// console.log(volume2);
// console.log(volume3);




// -------------- Example 1.2 --------------
function getBrickValume2(width, length, height) {
  return width * length * height;
}

var brickVolumeWithWidth = getBrickValume2.bind(null, 10);
// null - 1-й параметр метода bind = this. this нет, поэтому в качестве контекста передаем null
// 10 - 2-й параметр метода bind нужно передать 1-й параметр самой функции.


var brickVolumeWithWidthAndLength = brickVolumeWithWidth.bind(null, 20);
// null - 1-й параметр метода bind передача контекста. This нет поэтому null.
// 20 - 2-й параметр метода bind нужно передать 1-й параметр самой функции. Но 1-й параметр самой функции мы уже передали на предыдущем шаге. Поэтому передаем второй параметр - length = 20.

// // Манипуляции проделанные с переменными brickVolumeWithWidth и brickVolumeWithWidthAndLength позволяют нам вычислять объем каждого кирпича вызывая функцию в переменной brickVolumeWithWidthAndLength и передавая туда лишь height кирпича - тоесть изменяющийся параметр.

var volume4 = brickVolumeWithWidthAndLength (8);
var volume5 = brickVolumeWithWidthAndLength (12);
var volume6 = brickVolumeWithWidthAndLength (15);
// console.log(volume4);
// console.log(volume5);
// console.log(volume6); // 3000





// -------------- Example 1.3 --------------
// метод bind не единственный способ выполнения каррирования.
function getBrickVolume(width) {
  function getBrickVolumeWithWidth (length) {
    function getBrickVolumeWithWidthAndLength (height) {
      return width * length * height;
    }
    return getBrickVolumeWithWidthAndLength
  }
  return getBrickVolumeWithWidth
}

/*
Такая замысловатая структура вложенных функций позволяет нам устанавливать неизменные габариты нашего кирпича без использования метода bind
*/

var brickVolumeWithWidth = getBrickVolume (10);
var brickVolumeWithWidthAndLength = brickVolumeWithWidth (20);


var volume7 = brickVolumeWithWidthAndLength (8);
var volume8 = brickVolumeWithWidthAndLength (12);
var volume9 = brickVolumeWithWidthAndLength (15);
// console.log(volume7);
// console.log(volume8);
// console.log(volume9);



// -------------- Example 1.4 --------------
// на практике можно увидеть применения каррирования на месте, без записи в переменные
function getBrickVolume3(width) {
  
  function getBrickVolumeWithWidth (length) {

    function getBrickVolumeWithWidthAndLength (height) {
      return width * length * height;
    }
    return getBrickVolumeWithWidthAndLength
  }
  return getBrickVolumeWithWidth
}

// Такая замысловатая структура вложенных функций позволяет нам устанавливать неизменные габариты нашего кирпича без использования метода bind
var brickVolumeWithWidthAndLength = getBrickVolume3 (10)(20);

var volume10 = brickVolumeWithWidthAndLength (8);
var volume11 = brickVolumeWithWidthAndLength (12);
var volume12 = brickVolumeWithWidthAndLength (15);
// console.log(volume10);
// console.log(volume11);
// console.log(volume12);



// -------------- Example 2.1 --------------
function sum (a, b, c) {
  return a + b + c;
};


function multi(a, b, c) {
  return a * b * c;
}

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return curried.bind(this, ...args);
  }
};

const currySum = curry(sum);
const curryMulti = curry(multi);



// console.log(currySum(2, 3, 4));
// console.log(currySum(3) (5), (7));
// console.log(currySum(5, 7) (9));

// console.log(curryMulti(3, 3, 5));
// console.log(curryMulti(3) (5), (7));
// console.log(curryMulti(10, 10) (10));




