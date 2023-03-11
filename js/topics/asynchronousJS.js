// 'use strict';

// ============ Асинхронный JS - В каком порядке выведутся выполнятся задачи ============

// ------- Option I -------

// console.log(1);
// console.log(2);

// setTimeout(() => {
//   console.log(3);
// }, 0);

// console.log(4);

// RESULT // 1, 2, 4, 3


// ------- Option II -------


// console.log(1);
// console.log(2);

// setTimeout(() => {
//   console.log(3); // попадает в browser API, а потом в tasks queue, а потом в call stack если он не занят.
//   setTimeout(() =>{
//     console.log(5);
//   },0)
// }, 0);

// console.log(4);
// // RESULT // 1, 2, 4, 3, 5


// ------- Option III -------

// console.log(1);
// console.log(2);

// setTimeout(() => {
//   console.log(3); // ожидает в tasks queue пока выполниться все вызовы и попадут в call stack
//   setTimeout(() =>{
//     console.log(5); // ожидает в tasks queue пока выполниться все вызовы и попадут в call stack
//   },0)
// }, 0);

// console.log(4);

// function a (){
//   debugger
//   console.log('a');
// }

// function b(){
//   console.log('b');
// }

// a();
// b();

// RESULT // 1, 2, 4, a, b 3, 5
