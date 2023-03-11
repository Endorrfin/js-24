// 'use strict';

/*
https://www.youtube.com/watch?v=BIHziPMbaJw&list=PLwHvxJae2LazDrHm6ayqLKz6jszEn7ArQ&index=5

Что такое замыкание?
Замыкание - это одно из ключевых понятий всей функциональной парадигмы програмирования.

К примеру объектно ориентированная парадигма программирования держиться на 3-х китах:
полиморфизме, наследовании и инкапсуляции, иногда еще выделяют 4-го кита абстракцию.

Функциональная парадигма програмирования, которую реализует JS тоже держиться на 3-х китах:
замыкании, каррировании и мемоизации.

ЗАМЫКАНИЕ - это функция, которая ссылается на переменные объявленные вне данной функции.
*/


// ------- Example I -------
function makeGreeting() {
  let someName = "Alvaro";

  function greeting(personName) {
    return `Hello ${personName}! My name's ${someName}.`;
  }

  return greeting;
}

const newGreeting = makeGreeting();
// console.log(newGreeting("Irvin"))
// console.log(newGreeting("Zig"))
// console.log(newGreeting("Ben"))
// console.log(newGreeting("Kir"))
// console.log(newGreeting("Rik"))



// ============ CLOSURE - METATECH ============
/*
* Closure = function + context
* */

// ------- Solution 1.1 - create closure using function declaration -------
function add1(x) {
  function closure(y) {
    const z = x + y;
    // console.log(`${x} + ${y} = ${z}`);
    return z;
  }
  return closure;
}

const result1 = add1(3)(5);
// console.log('result1', result1);


// ------- Solution 1.2 - create closure using arrow function -------
const add2 = (x) => (y) => {
  const z = x + y;
  // console.log(`${x} + ${y} = ${z}`);
  return z;
};

const result2 = add2(2)(4);
// console.log('result2', result2);


// ------- Solution 1.3 - create closure using arrow function: short version -------
const add3 = (x) => (y) => x + y;
// console.log('add3', add3(5)(10));

const add4 = (a) => (b) => (c) => (d) => (e) => a + b + c + d + e;
// console.log('add4', add4(10)(20)(30)(40)(50));























/*
вызываем функцию greeting из замыкания, передавая туда необходимые параметры.
Ключевым моментом является то, что функция makeGreeting уже отработала, и фактически переменной myName уже не существует,
но благодаря тому, что мы создали замыкание (упомянули) эту переменную в какой-то из вложенных функций, ее значение сохранилось.

Фактически, в переменной newGreeting содержитья не только ссылка на саму функцию greeting, но и некий словарь,
содержащий значение всех переменных объявленных на момент их создания.
Это позволяет нам при вызове функции newGreeting использовать значение не существующей уже переменной myName при построении строки вывода.
*/

// console.log(newGreeting("Bill")); // Hello, Bill! My name's Alex.
// console.log(newGreeting("Fredorika")); // Hello, Fredorika! My name's Alex.
// console.log(newGreeting("Skot")); // Hello, Skot! My name's Alex.


/**
 * Принципиальная разница между функциями makeGreeting & greeting не только то, что greeting вложенная в makeGreeting, но прежде всего то, что greeting использует переменную, которая не объявлена в этой функции и не является ее параметром - в данном случае переменная myName.
 * Таким образом функция greeting в отличии от makeGreeting будет являтся замыканием.
 */


// Самое распространенное применение это, наверное, приватные свойства и методы для классов. В JS нет модификаторов доступа к членам класса, но инкапсуляция кода иногда требуется. Еще замыкание полезно в callback-функциях. Внутри callback-функции мы имеем доступ ко всем переменным содержащей (где callback объявлялся) функции.
// Самая распространенная ошибка это создание замыканий в цикле, на каждой итерации цикла старое замыкание будет затираться новым. Это одна из причин, почему в JS добавили модификатор let.





//  *** 2019.11.28 |+|+|+|+|+|+|+|   Closure #8   |+|+|+|+|+|+|+|
// Замыкание (closure) - это функция и все переменные, которые ей доступны снаружи.

var messenger = function (firstName, secondName) {
  var count = 0;
  var greetingMessage = "Welcome " + firstName + " " + secondName + ".Glad to see you ";

  return {
    sayHello: function () {
      console.log(greetingMessage + (count++));
    },
    resetCount: function () {
      count = 0;
      console.log("Count is 0");
    }
  }
}

// var person1 = messenger("John", "Connor");
// person1.sayHello();
// person1.sayHello();
// person1.sayHello();
// person1.resetCount();
// person1.sayHello();
// person1.sayHello();


// var person2 = messenger("Anakin", "Skywalker");
// person2.sayHello();
// person2.sayHello();
// person2.sayHello();


// ------- Solution 1.1 Closure Counter -------
function makeCounter1() {
  let currentCount = 4;

  return function () {
    return currentCount++;
  };
}

const counter = makeCounter1();
  // каждый вызов увеличивает счетчик и возвращает результат
  // console.log( counter());
  // console.log( counter());
  // console.log( counter());

const counter2 = makeCounter1();
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());



// ------- Solution 1.2 Closure Counter -------
  function counter3() {
    let count = 0;

    return function() {
      const nexValue = count + 1;
      count = nexValue;
      return nexValue;
    }
  }

  var b = counter3();
  var c = counter3();

  // каждый вызов увеличивает счетчик на 1, b и c живут своей жизнью и не пересекаются
// console.log(b()); // 1
// console.log(b()); // 2
// console.log(b()); // 3
// console.log(b()); // 4
//
// console.log(c()); // 1
// console.log(c()); // 2
// console.log(c()); // 3
//
// console.log(b()); // 5
// console.log(c()); // 4



// ------- Solution 1.3 Closure Counter -------
const counter4 = () => {
  let count = 0;
  return () => {
    return count++
  }
}

let someCount = counter4();
// console.log(someCount());
// console.log(someCount());
// console.log(someCount());



/**
|--------------------------------------------------
  === <<<---  CLOSURE --->>>  ===
|--------------------------------------------------
*/

// function checkCred () {
//   const login = 'test';
//   const password = 'somePassword';

//   return {
//     checkLogin (value) {
//       return login === value;
//     },

//     checkPassoword (value) {
//       return password === value;
//     },
//   };
// }

// const check = checkCred();

// console.log(check); // {checkLogin: ƒ, checkPassoword: ƒ}
// console.log(check.checkLogin('admin')); // fasle
// console.log(check.checkLogin('test')); // fasle

// console.log(check.checkPassoword('qwerty')); // false
// console.log(check.checkPassoword('somePassword')); // true




/**
|--------------------------------------------------
  === <<<---  CLOSURE --->>>  ===
|--------------------------------------------------
*/

// // EXAMPLE with let

// function closureLet () {
//   const arrOfFunction = [];
//   let value = '';

//   for (let i = 0; i < 10; i++) {
//     value += i;
//     arrOfFunction.push(function() {
//       console.log(value, i); // closure
//     });
//   }
//   // console.log(arrOfFunction); // (10) [ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ]
//   return arrOfFunction;
// }

// const resLet = closureLet();
// resLet[0](); // 0123456789 0
// resLet[5](); // 0123456789 5
// resLet[9](); // 0123456789 9



// // EXAMPLE with var

// function closureVar () {
//   const arrOfFunction = [];
//   let value = '';

//   for (var i = 0; i < 10; i++) {
//     value += i;
//     arrOfFunction.push(function() {
//       console.log(value, i); // closure
//     });
//   }
//   // console.log(arrOfFunction); // (10) [ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ, ƒ]
//   return arrOfFunction;
// }

// const resVar = closureVar();
// resVar[0](); // 0123456789 10
// resVar[5](); // 0123456789 10
// resVar[9](); // 0123456789 10




/**
|--------------------------------------------------
  === <<<---  TASK CLOSURE --->>>  ===
Создайте функцию которая бы умела делать:
minus(10)(6); // 4
minus(5)(6); // -1
minus(10)(); // 10
minus()(6); // -6
minus()(); // 0 - если число не передано, то оно равно 0
Подсказка, функция minus должна возвращать другую функцию.
|--------------------------------------------------
*/

// function minus (num1 = 0) {
//   // console.log(num1);

//   return function (num2 = 0) {
//     // console.log(num2);
//     return num1 - num2;
//   }
// }

// // minus(1)(2); // вызываем 1-ю функцию (1) и сразу 2-ю функцию (2)
// console.log(minus(5)(3));
// console.log(minus(10)(2));
// console.log(minus(7)(8));
// console.log(minus(100)(178));
// console.log(minus(1000)(1));
// console.log(minus()(3));


/**
|--------------------------------------------------
  === <<<---  TASK  --->>>  ===
Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
function multiplyMaker ...
const multiply = multiplyMaker(2);
multiply(2); // 4 (2 * 2)
multiply(1); // 4 (4 * 1)
multiply(3); // 12 (4 * 3)
multiply(10); // 120 (12 * 10)
Функция должна запоминать результат предыдущего multiply и умножать на следующее значение, которое передается.
|--------------------------------------------------
*/

// function multiplyMaker(num1) {
//   // console.log(num1);
//   return function (num2) {
//     // console.log(num2);
//     return num1 *= num2;
//   }
// }

// const multiply = multiplyMaker(2);
// console.log(multiply(1));
// console.log(multiply(2));
// console.log(multiply(4));
// console.log(multiply(1));
// console.log(multiply(6));


/**
|--------------------------------------------------
  === <<<---  TASK  --->>>  ===
Реализовать модуль, который работает со строкой и имеет методы:
  a. установить строку
    i. если передано пустое значение, то установить пустую строку
    ii. если передано число, число привести к строке
  b. получить строку
  c. получить длину строки
  d. получить строку-перевертыш
Пример:
модуль.установитьСтроку(‘abcde’);
модуль.получитьСтроку(); // ‘abcde’
модуль.получитьДлину(); // 5

|--------------------------------------------------
*/

// const module = (function () {
//   let str = '';

//   function setString(str = "") {
//     str = String(value); // приводим любое значение к строке.
//     return str;
//   }

//   function getString() {
//     return str;
//   }

//   function getStringlength() {
//     return str.length;
//   }

//   function reversString() {
//     return str
//       .split('')
//       .reverse()
//       .join('');
//   }

//   return {
//     setString,
//     getString,
//     getStringlength,
//     reversString
//   };
// }) ();


/**
|--------------------------------------------------
  === <<<---  TASK  --->>>  ===
  course - Современный JavaScript с нуля на реальных проектах
Замыкание - это функция, которая ссылается на свободные переменные.
Свободные переменные - это переменные, которые не были переданы этой функции, как параметры и не были объявлены внутри этой фукнции, как локальные переменные.

Другими словами - функция определенная в замыкании запоминает то окружение, в котором она была создана и имеет к нему доступ, а также она имеет доступ к окружению выше и может получать различные переменные из родительских окружений.
|--------------------------------------------------
*/

// OPTION I
// function getFullName (firstName, lastName) {
//   console.log(firstName, lastName);
//   return function () {
//     return `${firstName}, ${lastName}`;
//   };
// }

// const getName = getFullName('Steve', 'Jobs');
// console.log(getName); // str function
// console.log(getName('Larry', 'King')); // Steve Jobs



// OPTION II
// function updateValue (value = 0) {
//   let x = value;
//   return function (number = 0) {
//     return (x += number);
//   };
// }

// const updateData = updateValue(2);
// const updateInformation = updateValue(3);
// console.log(updateData(1)); // 3
// console.log(updateInformation(1)); // 4
// console.log(updateData(2)); // 5
// console.log(updateInformation(3)); // 7




// OPTION III

// function checkCredit () {
//   const login = someLogin;
//   const password = somePassword;

//   return {
//     checkLogin(value) {
//       return login === value;
//     },
//     checkPassword(value) {
//       return password === value;
//     },
//   };
// }


/**
|--------------------------------------------------
  === <<<---  TASK  --->>>  ===
  source - https://www.youtube.com/watch?v=E0fzm2BaHiY&list=PLF5GvE7BxzVFnRaev8rNPCs4WB6eSGlHT&index=2
Стоит коробка с 6 игрушками.
Есть дети. Детей больше, чем игрушек.
К коробке походят дети по очереди и забирают по 1 игрушке.
Выбрав 1 игрушку, мы должны получить имя данной игрушки.
Когда подходит очередной ребенок и не обнаруживает в коробке игрушки, он начинает плакать.
Реализовать это с помощью функций и замыкания.
|--------------------------------------------------
*/

// function saveBoxOfToys() {
//   var toysIntoBox = ['Кошка', 'Собачка', 'Лев', 'Слон','Панда','Орел'];

//   function getToy() {
//     var max = toysIntoBox.length;
//     var min = 0;
//     var randomToys = Math.floor(Math.random() * (max - min) + min);
//     console.log(randomToys)
//     var toyName = toysIntoBox.splice(randomToys, 1);

//     if(toyName == 0) {
//       return 'хмык, хмык'
//     } else {
//       return toyName;
//     }
//   }

//   return getToy;
// }

// var saveToys = saveBoxOfToys();
// console.log(saveToys());
// console.log(saveToys());
// console.log(saveToys());
// console.log(saveToys());
// console.log(saveToys());
// console.log(saveToys());
// console.log(saveToys());
// console.log(saveToys());






/**
|--------------------------------------------------
  === <<<---  TASK  --->>>  ===
Дан ящик с новогодними игрушками, к нему подходят дети по одному.
Каждый берет из ящика игрушку.
Надо получить название игрушки.
Когда закончаться игрушки, то ребенок, которому уже не досталось игрушки должен заплакать.

Появляется дед Мороз и добавляет в ящик игрушки.
Написать код с помощью функций и замыкания?

Подсказки
Функция не может возвращать 2 return, но нам нужно вернуть 2 вещи.
Можно return вернуть массив функций.
|--------------------------------------------------
*/

// function saveBoxOfToys() {
//   var boxOfToys = ['cat', 'dog', 'leon', 'elephan', 'horse', 'pinguin'];

//   function putToys() {
//     for (var i = 0; i < arguments.length; i++) {
//       boxOfToys.push(arguments[i]);
//     }
//   }

//   function getToy() {
//     var max = boxOfToys.length;
//     var min = 0;
//     var randomToy = Math.floor(Math.random() * (max - min) + min);
//     var toyName = boxOfToys[randomToy];
//     boxOfToys.splice(randomToy, 1);
//     if (toyName !== undefined) {
//       return toyName;
//     } else {
//       return 'A-a-a-a-a';
//     }
//   }

//   return [getToy, putToys];
// }

//   var callFunction = saveBoxOfToys();
//   var callFunctionGetToy = callFunction[0];
//   var callFunctionPutToys = callFunction[1];

// console.log(callFunctionGetToy());
// console.log(callFunctionGetToy());
// console.log(callFunctionGetToy());

// callFunctionPutToys('moon', 'star');

// console.log(callFunctionGetToy());
// console.log(callFunctionGetToy());
// console.log(callFunctionGetToy());

// console.log(callFunctionGetToy());
// console.log(callFunctionGetToy());
// console.log(callFunctionGetToy());



// ============ PROMISE - learn.javascript.ru ============
// var value = 0;
// console.log(value); // 0

// function f() {
//     if(1) {
//         value = true;
//     }else {
//         var value = false;
//     }
//     console.log(value);
// }
// f();

// var value = 0;
// console.log(value); // 0

// function f() {
//     if(1) {
//         value = true;
//     }else {
//         value = false;
//     }
//     console.log(value);
// }
// f();

// console.log(value); // true


// var a = 5
// (function() {
//     console.log(a); // Uncaught TypeError: 5 is not a function (нет точки с запятой после var a = 5)
// })();


// --------------  What will show console.log? --------------
/*
* Кручу верчу, запутать хочу.
* Где будет находиться шарик?
* */

function h() {
  function h(){
    var h = function() {
      console.log('шарик находится');
      console.log(h);
      h = 'под колпачком 3';
    };
    return h;
  }

  h = h();
  h();
  h = 'под колпачком 2';
}

// h();
// var h = 'под колпачком 1';



// --------------  What will show console.log? --------------
var xxx = 'zzz';
function say() {
  var xxx  = 'yyy';

  function name() {}

  function surname() {
    console.log(xxx); // yyy
  }
  return surname;
}

var aaa = say();
// aaa();




// --------------  Замыкание изнутри в JavaScript --------------

function sum(a, b) {
  console.log(a + b);

  function sayAB() {
    console.log(a + b);
  }
  sayAB();
}

// sum(2, 3);





// -------------- Case 1.1 - count --------------
/*
* При каждом вызове функции counter(), переменной count будет присваиваться новое значение.
* Нам важно, чтоб переменная count была в другой области видимости, поскольку, если бы она была в области видимости функции counter(), то при вызове counter() переменная count будет равна одному и тому же, а нам это не подходит!
* Нам необходимо, чтоб измененное состояние переменной count где-то сохранялось. Поэтому мы выносим переменную count в глобальную область видимости и обращаемся к ней из функции.
* А что, если задача создать несколько таких счетчиков?
* Нам каждый раз придется создавать глобальную переменную и функцию? Это не очень хорошо, поскольку мы стараемся в глобальной области видимости создавать поменьше переменных.
* */
let anotherCount = 0;
function anotherCounter () {
  // функция counter будет влиять на переменную count
  anotherCount++;
  return anotherCount;
}

// console.log(anotherCounter());
// console.log(anotherCounter());
// console.log(anotherCounter());






// -------------- Case 1.2 - closure --------------
function closureCounter() {
  var count = 0;

  return function() {
    count++;

    return count;
  }
}

/*
Создаем функцию Counter, которая внутри себя объявляет переменную count и возвращает новую функцию.
Вот эта новая функция, которая возвращается из Counter, про нее говорят, что она замкнутая на область видимости родителя (function Counter).

Как это использовать?
Мы вызываем родительскую функцию и создается наш счетчик.
Функция, которую возвращает Counter, она сохраняется в переменную и она замкнутая на ту область видимости, которая возникла.
*/

const oneCounter = closureCounter();

/*
Теперь, когда мы вот эту вернувшуюся функцию будем вызывать много, много раз, она будет обращаться к той переменной, которая видна только ей и отдуда будет считывать значение и туда же его и записывать.
*/

// console.log(oneCounter());
// console.log(oneCounter());
// console.log(oneCounter());

/*
При этом, если нам нужно будет создать еще один независимый счетчик, который будет независимость от предыдущего, нам достаточно будет еще раз вызвать Counter() и мы получим новый счетчик.
Каждый раз при вызове Counter создается новая область видимости, в ней есть переменная count, но каждый раз она своя и каждый раз из них возвращаются новые функции, которые мы и сохраняем в переменную, а потом и вызываем неоднократно.
Каждая из этих функций, она замкнута на свою область видимости и соответственно получает свой count, поэтому и счетчики независимы.
*/

const secondCounter = closureCounter();
const thirdCounter = closureCounter();

// console.log(secondCounter());
// console.log(thirdCounter());
// console.log(secondCounter());
//
// console.log(thirdCounter());
// console.log(secondCounter());
// console.log(thirdCounter());


