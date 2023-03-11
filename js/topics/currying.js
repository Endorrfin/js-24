// 'use strict';

/**
|--------------------------------------------------
  === <<<--- CURRYING--->>>  ===
  https://www.youtube.com/watch?v=lfNgrsBV9nI&list=PLwHvxJae2LazDrHm6ayqLKz6jszEn7ArQ&index=7

  Каррирование - это техника в функциональном программировании, когда функция принимающая несколько аргументов разбивается на набор функций, каждая из которых принимает только 1 аргумент.

  Чтобы по многу раз не передавать в функцию значения параметров, которые не изменяются, уместо применить каррирование. При каррировании запоминаются значения неизменяющихся параметов с помощью метода bind 

  |--------------------------------------------------
*/

// // === <<<--- Option I --->>>  ===
// // вычисляем объем кирпича. В него ширина и длинна одинаковая а высота всегда разная.
// function getBrickValume(width, length, height) {
//   return width * length * height;
// }

// var volume1 = getBrickValume (10, 20, 8);
// console.log(volume1); // 1600
// var volume2 = getBrickValume (10, 20, 12);
// console.log(volume2); // 2400
// var volume3 = getBrickValume (10, 20, 15);
// console.log(volume3); // 3000




// // === <<<--- Option II --->>>  ===

// function getBrickValume(width, length, height) {
//   return width * length * height;
// }

// var brickVolumeWithWidth = getBrickValume.bind(null, 10);
// // null - 1-й параметр метода bind = this. this нет, поэтому в качестве контекста передаем null 
// // 10 - 2-й параметр метода bind нужно передать 1-й параметр самой функции.


// var brickVolumeWithWidthAndLength = brickVolumeWithWidth.bind(null, 20);
// // null - 1-й параметр метода bind передача контекста. This нет поэтому null. 
// // 20 - 2-й параметр метода bind нужно передать 1-й параметр самой функции. Но 1-й параметр самой функции мы уже передали на предыдущем шаге. Поэтому передаем второй параметр - length = 20.

// // Манипуляции проделанные с переменными brickVolumeWithWidth и brickVolumeWithWidthAndLength позволяют нам вычислять объем каждого кирпича вызывая функцию в переменной brickVolumeWithWidthAndLength и передавая туда лишь height кирпича - тоесть изменяющийся параметр.

// var volume1 = brickVolumeWithWidthAndLength (8);
// console.log(volume1); // 1600
// var volume2 = brickVolumeWithWidthAndLength (12);
// console.log(volume2); // 2400
// var volume3 = brickVolumeWithWidthAndLength (15);
// console.log(volume3); // 3000






// // === <<<--- Option III --->>>  ===
// // метод bind не единственный способ выполнения каррирования.
// function getBrickVolume(width) {
  
//   function getBrickVolumeWithWidth (length) {

//     function getBrickVolumeWithWidthAndLength (height) {
//       return width * length * height;
//     }

//     return getBrickVolumeWithWidthAndLength
//   }

//   return getBrickVolumeWithWidth
// }

// /* 
// Такая замысловатая структура вложенных функций позволяет нам устанавливать неизменные габариты нашего кирпича без использования метода bind
// */

// var brickVolumeWithWidth = getBrickVolume (10);
// var brickVolumeWithWidthAndLength = brickVolumeWithWidth (20);


// var volume1 = brickVolumeWithWidthAndLength (8);
// console.log(volume1); // 1600
// var volume2 = brickVolumeWithWidthAndLength (12);
// console.log(volume2); // 2400
// var volume3 = brickVolumeWithWidthAndLength (15);
// console.log(volume3); // 3000




// // === <<<--- Option IV --->>>  ===
// на практике можно увидеть применения каррирования на месте, без записи в переменные
// function getBrickVolume(width) {
  
//   function getBrickVolumeWithWidth (length) {

//     function getBrickVolumeWithWidthAndLength (height) {
//       return width * length * height;
//     }
//     return getBrickVolumeWithWidthAndLength
//   }
//   return getBrickVolumeWithWidth
// }

// /* 
// Такая замысловатая структура вложенных функций позволяет нам устанавливать неизменные габариты нашего кирпича без использования метода bind
// */

// var brickVolumeWithWidthAndLength = getBrickVolume (10)(20);

// var volume1 = brickVolumeWithWidthAndLength (8);
// console.log(volume1); // 1600
// var volume2 = brickVolumeWithWidthAndLength (12);
// console.log(volume2); // 2400
// var volume3 = brickVolumeWithWidthAndLength (15);
// console.log(volume3); // 3000