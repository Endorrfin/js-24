// -------------- Solution 1.1 case I --------------

const array = [1, 2, 3, 4, 5, 7, 9, 11, 12, 14, 16, 18, 20];

















let a1 = [[1,2,3],[4,5,6],[7,8,9]];
let b1 = a1[0][2];
// console.log(b1);

const even = (element) => element % 2 === 0;
// console.log(array.some(even));



var f = function() {
  console.log(1);
}

var execute = function(f) {
  setTimeout(f, 1000);
}

// execute(f); // что выведет в консоль и почему

f = function() {
  console.log(2);
}


// На імена змінних в JavaScript накладено всього два обмеження.
// 1. Ім'я може складатися з: букв, цифр, символів $ і _
// 2. Перший символ не повинен бути цифрою.


// Чому дорівнює foo.x?

var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};

// console.log(foo.x);

// Зверніть увагу на те, що змінна foo, на яку посилається foo.x, «встановлюється» перед тим як foo зміниться. foo.x посилається на старе значення foo.
// Це значить, що в старому foo з’явиться нова властивість x, що дорівнює {n: 2}. А в нове foo запишеться {n: 2}.


// Що виведе цей код?

(function() {

  var animal = ['cow', 'horse'];

  animal.push('cat');

  animal.push('dog', 'rat', 'goat');
  // console.log(animal.length);
})();


// Що виведе цей код?

(function f() {
  function f() {
    return 1;
  }

  return f();

  function f() {
    return 2;
  }
})(); // 2


// Оператори рівності (== і ===) не можуть використовуватися для перевірки значення на рівність NaN. Замість них слід використовувати функції Number.isNaN() абоisNaN().

NaN === NaN;        // false
Number.NaN === NaN; // false
isNaN(NaN);         // true
isNaN(Number.NaN);  // true


// Які імена змінних є валідними?


// var, let, const
//     _, $, someVariable
// foo, _foo, 1foo
// ba-r, _bar, foo_bar

// На імена змінних в JavaScript накладено всього два обмеження.
// 1. Ім'я може складатися з: букв, цифр, символів $ і _
// 2. Перший символ не повинен бути цифрою.


// Що виведе консоль?
let a, b, c = [1, 2, 3, 4, 5]
// console.log(a, c)


// Яким буде результат?
var arr = [0, 1, 2, 4];
// console.log(arr.indexOf(3));

// Метод indexOf() починає пошук від символу за індексом fromIndex всередині об'єкта String, з якого здійснюється виклик метода, і вертає індекс першого знайденого збігу із шуканим значенням.
// Синтаксис: str.indexOf(searchValue[, fromIndex])
// fromIndex — ціле число, що позначає індекс, з якого має розпочинатися пошук; типовим значенням є 0.
// Метод повертає індекс першого знайденого збігу, або -1, якщо жодного збігу не знайдено.
