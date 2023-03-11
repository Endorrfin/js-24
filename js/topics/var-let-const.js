// source: https://dev.to/ahmetkapusuz/what-is-the-temporal-dead-zone-in-javascript-3hlc
// https://stackoverflow.com/questions/31219420/are-variables-declared-with-let-or-const-not-hoisted-in-es6/31222689#31222689
// top question on interview:   https://youtu.be/yLtNSqEF6HU?list=PLwHvxJae2LazDrHm6ayqLKz6jszEn7ArQ

// ============ BEHAVIOR var, let, const ============

// -------------- Example I --------------
var foo1 = 'foo';
// console.log(foo1); // foo


// -------------- Example II --------------
// console.log(foo2); // undefined
var foo2 = 'foo';


// -------------- Example III --------------
// console.log(foo3); // ReferenceError
let foo3 = 'foo';


// -------------- Example IV --------------
var foo4 = 'first';
function example() {
  // console.log(foo4); // undefined
  var foo4 = 'second';
}
example();


// -------------- Example V --------------
// let foo = 'first';
// function example() {
//   console.log(foo); // ReferenceError
//   let foo = 'second';
// }
// example();



// ============ setTimeout ============

// -------------- Example I --------------
for (var i = 1; i < 10; i++) {
    setTimeout(function(){
        // console.log(i);
    }, 0);
}


// -------------- Example II --------------
for (let i = 1; i < 10; i++) {
    setTimeout(function(){
        // console.log(i);
    }, 0);
}


// ============ SCOPES & HOISTING ============
var variable = 10;

// -------------- task 1.1  --------------
(()=>{
  // console.log(variable); // 10 -> undefined
  var variable = 20;
  // console.log(variable); // 20
})();


// -------------- task 1.2  --------------
(()=>{
  // console.log(variable);   // ReferenceError
  let variable = 20;
  // console.log(variable);   // 20
})();


// -------------- task 1.3  --------------
(()=>{
   // console.log(variable);   // 10
   variable = 20;
   // console.log(variable);   // 20
})();


// -------------- task 1.4  --------------
var variable2 = 10;
(()=>{
   // console.log(variable2);   // 10
  variable2 = 20;
   // console.log(variable2);   // 20
})();
var variable2 = 30;
// console.log(variable2); // 30


// -------------- task 1.5  --------------
var variable3;
variable3 = 10;
(()=>{
   // console.log(variable3);   // 10
   variable3 = 20;
   // console.log(variable3);   // 20
})();
variable3 = 30;
// console.log(variable3); // 30


// -------------- task 1.6  --------------
var variable4 = 10;
(()=>{
   // console.log(variable4);   // undefined
   var variable4 = 20;
   // console.log(variable4);   // 20
})();

// console.log(variable4); // 10
var variable4 = 30;


// -------------- task 1.7  --------------
var variable5;
variable5 = 10;
(()=>{
   var variable5;
   // console.log(variable5);   // undefined
   variable5 = 20;
   // console.log(variable5);   // 20
})();
// console.log(variable5); // 10
variable5 = 30;
// console.log(variable5); // 30


// -------------- task 1.8  --------------
var variable6 = 10;
(()=>{
   // console.log(variable6);   // 10
   variable6 = 20;
   // console.log(variable6);   // 20
})();

// console.log(variable6); // 10 -> 20
var variable6 = 30;


// -------------- task 1.9  --------------
var variable7 = 10;
(()=>{
   variable_3 = 35;
   // console.log(variable_3); // 35
   var variable_3 = 45;
   variable_2 = 15;
   // console.log(variable7);   // 10
})();

// console.log(variable_2); // Error -> 15
// console.log(variable_3); // 45 -> ReferenceError
var variable7=30;





// ============ SCOPES ============

// -------------- Example 1.1 --------------
var a = 111;
function func1 () {
  var b = 222;
  function func2 () {
    var c = 333;
  }
  func2();
}

func1();


// -------------- Example 1.2 --------------
var value1 = 1;
function doSomething () {
  var value1 = 2; // 2
  console.log(value1);
}

// doSomething();

// console.log(value1); // 1



// -------------- Example 1.3 --------------
var value2 = 1;
function doSomething2 () {
  value2 = 2; // 2
  console.log(value2);
}
// doSomething2();

// console.log(value2); // 2
















