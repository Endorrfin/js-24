
// === 01. 1.Перечислите основные типы данных в JS.
// string
// number
// boolean
// null
// undefined
// symbol
// object



// === 02. В каком порядке будут выведены цифры 1,2,3 ?
// console.log(1);
// setTimeout(() => console.log(2));
// console.log(3);

// result 1, 3, 2



// === 03. Существуют ли нативные классы в JS?
// My answer - No



// === 04. Что из перечисленных относится к JS?
// 1. Динамическая типизация +++
// 2. Статическая типизация ---
// 3. Многопоточность --- но можно достичь +++
// 4. Автоматическое управление памятью +++
// 5. Прототипное программирование +++



// === 05. Каким будет результат работы данного скрипта?
// 'use strict'
// function f() {
//   console.log(this);
// }
// f(); // undefined



// === 06. Каким будет результат работы данного скрипта?
// console.log(x); // undefined
// var x = 4;
// console.log(x); // 4



// === 07. Чему равна переменная foo?
// var foo = 10 + "20";
// console.log(10 + "20"); // '1020'



// === 08. Какой тип вернет оператор typeof для функции?
// var f = function() {}
// console.log(typeof f) // function



// === 09. Можно ли в JS вызвать функцию без круглых скобок? Если да, то каким образом?

// my answer = I don't konow!



// === 10. What will show consol.log?
  // console.log(1);

  // setTimeout(function timeout() {
  //     console.log(2);
  // }, 0);

  // Promise.resolve().then(function(){
  //     console.log(3);
  // });

  // console.log(4);



// ===|=== Object.create
// if(!Object.create) {
//   Object.create = function(obj) {
//     if (arguments.length > 1) {
//       throw new Error ('Принимает только 1-й аргумент')
//     };

//     function F() {}
//     F.prototype = obj;
//     return new F;
//   }
// }



// ===|=== POLYFILL BIND
// if(typeof Function.prototype.bind !== 'function') {
//   Function.prototype.bind = function(context) {
//     var leftArgs = Array.prototype.slice.call(arguments, 1),
//     fn = this;
//     return function () {
//       fn.apply(context, leftArgs.concat(arguments));
//     };
//   };
// }




// ===|=== PROTOTYPE INHERITANCE
// function Animal (name, run) {
//   this.name = name;
//   this.run = run;
// };

// Animal.prototype.getName = function () {
//   return this.name;
// }

// Animal.prototype.getRun = function() {
//   return this.run;
// };




// function Rabbit(name, run, color) {
//   // вызываем super constructor
//   Animal.call(this, name, run)
//   this.color = color;
// }

// Rabbit.prototype = Object.create(Animal.prototype);
// Rabbit.prototype.setColor = function(color) {
//   this.color = color;
// }

// Rabbit.prototype.getColor = function() {
//   return this.color;
// }

// let rabbit = new Rabbit('Willy', '38', 'white');
// console.log(rabbit);



// ===|=== FUNCTIONAL INHERITANCE I VERSION
// function animal (spec) {
//   var obj = {};

// function getNane () {
//   return spec.name;
// }

// function getRun () {
//   return 'I can to run';
// }

// obj.getNane = getNane;
// obj.getRun = getRun;

// return obj;
// }


// function rabbit(spec) {
//   var obj = animal(spec);

//   function color () {
//     return 'white';
//   }

//   obj.color = color;
//   return obj;
// }

// var willy = rabbit({name: 'Willy', run: 38});
// console.log(willy.getNane());
// console.log(willy.getRun());
// console.log(willy.color());











// <+++|+++> FUNCTIONAL INHERITANCE II VERSION
// function Animal(name) {
//   this.name = name;

//   this.getName = function() {
//     return this.name;
//   }
// }


// function Rabbit() {
//   Animal.apply(this, arguments);

//   this.run = function() {
//     return 'Rabbit ' + this.getName() + 'is running';
//   }
// }


// var rabbit = new Rabbit('Willy');
// console.log(rabbit.getName());
// console.log(rabbit.run());






// ===|=== CLASSES INHERITANCE
// class Animal{
//   constructor(name, run) {
//     this.name = name
//     this.run = run
//   }


//   getName () {
//     return this.name
//   };

//   getRun () {
//     return this.run
//   };
// }



// class Rabbit extends Animal {
//   constructor(name, run, color) {
//     super(name, run)
//     this.color = color
//   }

//   getColor() {
//     return this.color
//   }
// }


// function firstRabbit() {
//   let rabbit = new Rabbit('Willy', '38', 'white');
//   console.log(rabbit.getName());
//   console.log(rabbit.getRun());
//   console.log(rabbit.getColor());
// }





//===========================================================================
//===========================================================================


// <===||===> TASK FROM MENTOR I
// Promise.reject('a')
//   .catch(p => p + 'b')
//   .catch(p => p + 'с')
//   .then(p => p + 'd')
//   .finally(p => p + 'e')
//   .then(p => console.log(p))






// <===||===> TASK FROM MENTOR II
// Promise.resolve('BatMan')
//   .then(function (val) {
//     console.log('then', val); //
//     throw new Error('Error happen');
//     return 'OMG!';
//   })
//   .then((val) => console.log('then', val)) //
//   .catch((val) => {
//     console.log('catch', val); //
//     return Promise.reject();
//   })
//   .then(firstHandler, secondHandler) //
//   .then(firstHandler, secondHandler) //
//   .then(firstHandler, secondHandler); //

// function firstHandler(val) {
//   console.log('first', val);
// }

// function secondHandler(val) {
//   console.log('second', val);
// }




// <===||===> TASK FROM MENTOR III
// const firstPromise = new Promise((res, rej) => setTimeout(res, 500, "один"));
// const secondPromise = new Promise((res, rej) => setTimeout(res, 100, "два"));

// Promise.race([firstPromise, secondPromise]).then(res => console.log(res)); //
// Promise.all([firstPromise, secondPromise]).then(res => console.log(res)); //




// <===||===> TASK FROM MENTOR IV
// Promise.resolve('Error')
//   .then('12312321')
//   .then((e) => {
//     console.log(e); // Error
//     throw new Error('Error again')
//   })
//   .catch('undefinde happen')
//   .catch((e) => console.log(e)) // Error again => "Error again"
//   .then((a) => Promise.reject(a + ' is'))
//   .then((a) => a + ' not')
//   .catch((a) => console.log(a + ' undefined')) // undefined is undefined

// function catchError(arg1) {
//   return arg1 + ' happen';
// }



// ===|=== Конфликт имен и почему ()()
// function outside() {
//   var x = 5;
//   function inside(x) {
//     return x * 2;
//   }
//   return inside;
// }

// outside()(10); // возвращает 20 вместо 10









// -------------------------
// Написать функцию sum так чтобы переменные в нее передавались в разных скобках,
// когда в нее ничего не передается(пустые скобки), возвращется результат
// Пример вызова:
// console.log(sum(1)(2)(3)());

// function sum (a) {
//   let result = a;
//   return function innerSum (a) {
//     if (a !== undefined) {
//       result += a;
//       return innerSum;
//     }
//     return result;
//   }
// }

// sum(1)(2)(3)(5)(7)(8)(11)();
// console.log(sum(1)(2)(3)(5)(7)(8)(11)());





// -------------------------
// Написать функцию sum так чтобы переменные в нее передавались в разных скобках,
// результат возвращается, когда больше нет передачи скобок.
// Подсказка: Тут нужно переопределять метод объекта toString
// Пример вызова:
// console.log(sum(1)(2)(3));

// function sum(a) {
//   let result = a;
//   return function innerSum(a) {
//     if (a === toString(String)) {
//       result += a;
//       return innerSum;
//     }
//   }
// }

// sum();









// ===|=== TASK I - CLOSURE (from Mentor)
// function foo() {
//   function x() { }
//   var x = 2;
//   console.log(typeof x); // number // function
// };
// foo();


// ===|=== TASK II - CLOSURE (from Mentor)
// function foo() {
//   function x() { }
//   var x;
//   console.log(typeof x);
// };
// foo();


// ===|=== TASK III - TDZ (from Mentor)
// let x = 'outer value';
// (function () {
//   // start TDZ for x
//   console.log(x);
//   let x = 'inner value'; // declaration ends TDZ for x
// }());



// ===|=== TASK IV - CLOSURE (from Mentor)
// ------------------------
// Написать функцию add так чтобы переменные в нее передавались в разных скобках, после второго вызова возвращается результат
// Пример вызова:
// add(1)(2);//3

// function add (a) {

//   return function (b) {
//     return a + b;
//   }

// }

// add (2)(3);




// ===|=== TASK V - CLOSURE (from Mentor)
/**
Написать функцию sum так чтобы переменные в нее передавались в разных скобках, когда в нее ничего не передается(пустые скобки), возвращается результат
Пример вызова:
console.log(sum(1)(2)(3)());
 */

// function sum (a) {
//   let result = a;
//   return function innerSum (a) {
//     if (a !== undefined) {
//       result += a;
//       return innerSum;
//     }
//     return result;
//   }
// }

// console.log(sum(1)(2)(3)(8)(32)());




// ===|=== TASK VI - CLOSURE (from Mentor)
/**
Написать функцию sum так чтобы переменные в нее передавались в разных скобках, результат возвращается, когда больше нет передачи скобок.
Подсказка: Тут нужно переопределять метод объекта toString
Пример вызова:
console.log(sum(1)(2)(3));
 */

// function sum(a) {
//   let result = a;
//   return function innerSum(a) {
//     if (a === toString()) {
//       result += a;
//     }
//     return innerSum;
//   }
//   return sum()
// }

// console.log(sum(1)(2)(3));


// function sum(a) {
//   let result = a;
//   function innerSum (b) {
//     result += b;
//     return innerSum;
//   }

//   innerSum.toString = function() {
//     return result
//   }

//   return innerSum;

// }

// console.log(sum(-15)(24));
// console.log(sum(5)(-10)(15)(-20)('10'));




// function AddValue (i) {
//   let result = i;
//   function insideResult (k) {
//     result += k;
//     return insideResult;
//   }

//   insideResult.toString = function() {
//     return result;
//   }
//   return insideResult;
// }

// console.log(AddValue(4)(7));
// console.log(AddValue(100)(-700));
// console.log(AddValue(10)(-80)(80));






// ==========================================
// INTERVIEW MY MENTOR Саша Стрыжаков
// ==========================================


// ========== TASK 1 ==========
// function foo() {
//   var x = 2;
//   function x() { }
//   console.log(typeof x);
// };
// foo(); // string -> function



// ========== TASK 2 ==========
// add(1, 2);//3
// add(1)(2);//3

// function add (a, b) {
//   if(b !== undefined){
//     return a + b;
//   }
//   return function (b) {
//     return a + b;
//   }
// }



// ========== TASK 3 ==========
// if(!Object.create) {
//   Object.create = function(obj) {
//     if(arguments.length > 1) {
//       throw nneewrr
//     }
//     function F() {}
//     F.prototype = obj;
//     return new F;
//   }
// }


// ========== TASK 4 ==========
// Promise.resolve('BatMan')
//   .then(function (val) {
//     console.log('then', val); // 'then', 'OMG!' -> BatMan
//     throw new Error('Error happen');
//     return 'OMG!';
//   })
//   .then((val) => console.log('then', val)) // 'then' Error **
//   .catch((val) => {
//     console.log('catch', val); // -> Error hapen
//     return Promise.reject();
//   })
//   .then(
//     (val) => console.log('first', val),
//     (val) => console.log('second', val)
//     )
//   .then(firstHandler, secondHandler)
//   .then(firstHandler, secondHandler);

// function firstHandler(val) {
//   console.log('first', val); // 'first', Error -> unidefined
// }

// function secondHandler(val) {
//   console.log('second', val); // 'second', Error -> undefined
//   return undefined;
// }




// ==========================================
// INTERVIEW MY MENTOR Alexand Loginov
// ==========================================
// Promise.reject('a') //rej a
//   .then(p => p + 'b') //
//   .catch(p => p + 'c') //res ac
//   .catch(p => p + 'd') //
//   .then(p => p + 'e') //res ace
//   .finally(p => { //
//     p += 'f'
//     console.log(p) // undefined
//   })
//   .then(console.log(p)) //res ace
//   .catch(console.log(p)) //









