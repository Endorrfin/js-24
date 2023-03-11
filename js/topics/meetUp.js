

// ======= Example I =======
var apples1 = 5;
if (true) {
  var apples1 = 10;
  // console.log(apples1); // 10 (внутри блока)
}
// console.log(apples1); // 10 (снаружи блока то же самое)




// ======= Example II =======
let apples2 = 5; // (*)

if (true) {
  let apples2 = 10;

  // console.log(apples2); // 10 (внутри блока)
}

// console.log(apples2); // 5 (снаружи блока значение не изменилось)



// ======= Example I var =======
// console.log(a); // undefined

// var a = 10;



// ======= Example II let =======
// console.log(a); // ошибка, нет такой переменной

// let a = 10;


// ======= Example III let =======
// let x;
// let x; // ошибка: переменная x уже объявлена


// ======= Example IV var =======
// for(var i = 0; i<5; i++) { /* … */ }
// console.log(i); // 5
// for(var i = 0; i<10; i++) { /* … */ }
// console.log(i); // 10

// ======= Example V let =======
// for(let i = 0; i<5; i++) {
//   console.log(i); // 0, 1, 2, 3, 4
// }
// console.log(i); // ошибка, нет такой переменной

// for(let i = 0; i<10; i++) {
//   console.log(i); // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
// }



// ======= Example ES5 =======
// var getCurrentDate = function(){
//   return new Date()
// }

// ======= Example ES6 =======
// const getCurrentDate = () => new Date()



// ======= Example ES5 =======
// function greet(name){
//   return 'Hello ' + name + '!' 
// }

// ======= Example ES6 =======
// const greet = (name) => `Hello ${name}`
// const greet2 = name => `Hello ${name}`


// ======= Example arrow function I =======
// const getArgs = () => arguments

// const getArgs2 = (...rest) => rest




// ======= Example arrow function II =======
// const data = {
//   result: 0,
//   nums: [1,2,3,4,5],
//   computeResult(){
//       const addAll = () => {
//       return this.nums.reduce((total, cur) => total + cur, 0)
//       }
//   this.result = addAll()
//   }
// }




// ======= Example classes ES5 =======
// function Person(firstName, lastName, age, address){
//   this.firstName = firstName
//   this.lastName = lastName
//   this.age = age
//   this.address = address
// }

// Person.self = function(){
//   return this
// }

// Person.prototype.toString = function(){
//   return '[object Person]'
// }

// Person.prototype.getFullName = function(){
//   return this.firstName + ' ' + this.lastName
// }




// ======= Example classes ES6 =======
// class Person{
//   constructor(firstName, lastName, age, address){
//       this.firstName = firstName
//       this.lastName = lastName
//       this.age = age
//       this.address = address
//   }

//   static self(){
//       return this
//   }

//   toString(){
//       return '[object Person]'
//   }

//   getFullName(){
//       return `${this.firstName} ${this.lastName}`
//   }
// }






// ======= Example classes ES5 =======
// Employee.prototype = Object.create(Person.prototype)

// function Employee(firstName, lastName, age, address, jobTitle, yearStarted){
//     Person.call(this, firstName, lastName, age, address)
//     this.jobTitle = jobTitle
//     this.yearStarted = yearStarted
// }
// Employee.prototype.describe = function(){
//     return `I am ${this.getFullName()} and I have a position of #{this.jobTitle} and I started at ${this.yearStarted}}`
// }
// Employee.prototype.toString = function(){
//     return '[object Employee]'
// }




// ======= Example classes ES6 =======
// class Employee extends Person{ // наследуемся от Person
//     constructor(firstName, lastName, age, address, jobTitle, yearStarted){
//         super(firstName, lastName, age, address)
//         this.jobTitle = jobTitle
//         this.yearStarted = yearStarted
//     }
//     describe(){
//        return `I am ${this.getFullName()} and I have a position of #{this.jobTitle} and I started at ${this.yearStarted}}` 
//     }
//     toString(){ // переопределяем метод toString класса Person
//         return '[object Employee]'
//     }
// }




// ======= Example ES5 =======
// var greet = 'Hi I\'m Mark'

// ======= Example ES6 =======
// let greet = `Hi I'm Mark`




// В шаблонных литералах нам не нужно экранировать одинарные кавычки.

// ======= Example ES5 =======
// var lastWords = '\n'
//     + ' I \n'
//     + ' am \n'
//     + 'Iron Man \n'

// ======= Example ES6 =======
// let lastWords = `
//     I
//     am
//     Iron Man
// `




// В ES6 нам не нужно использовать управляющую последовательность "\n" для перевода строки.

// ======= Example ES5 =======
// function greet(name){
//     return 'Hello ' + name + '!'
// }

// ======= Example ES6 =======
// function greet(name){
//     return `Hello ${name}!`
// }


// let today = new Date();
// let text = `The time and date is ${today.toLocaleString()}`;





// ======= Destructuring  =======
// const employee = {
//   firstName: 'Marko',
//   lastName: 'Sworak',
//   position: 'Software Developer',
//   yearHired: 2017
// }



// ======= Example  =======
// var firstName = employee.firstName
// var lastName = employee.lastName
// var position = employee.position
// var yearHired = employee.yearHired

// let { firstName, lastName, position, yearHired } = employee

// let { firstName: fName, lastName: lName, position, yearHired } = employee

// let { firstName = 'Mark', lastName: lName, position, yearHired } = employee




// ======= Example I  =======
// fs.readFile('somefile.txt', function(e, data){
//   if(e){
//       console.log(e)
//   }
//   console.log(data)
// })



// ======= Example II  =======
// fs.readFile('somefile.txt', function(e,data){
//   // код
//   fs.readFile('directory', function(e, files){
//       // код
//       fs.mkdir('directory', function(e){
//           // код
//       })
//   })
// })


// ======= Promises  =======
// promReadFile('file/path')
// .then(data => {
//     return promReaddir('directory')
// })
// .then(data => {
//     return promMkdir('directory')
// })
// .catch(e => {
//     console.error(e)
// })



// ======= Promises  =======

// const myPromiseAsync = (...args) => {
//   return new Promise((resolve, reject) => {
//       doSomeAsync(...args, (error, data) => {
//           if(error){
//               reject(error)
//           } else{
//               resolve(data)
//           }
//       })
//   })
// }

// myPromiseAsync()
// .then(result => {
//   console.log(result)
// })
// .catch(reason => {
//   console.error(reason)
// })







// ======= spred & rest  =======

// function add(a, b, c){
//   return a + b + c
// }

// const nums = [5, 6, 9]
// const sum = add(...nums)
// console.log(sum) // 20



// function add(...rest){
//   return rest.reduce((total, current) => total + current)
// }

// console.log(add(1, 2)) // 3
// console.log(add(1, 2, 3, 4, 5)) // 15



// const [first, ...others] = [1, 2, 3, 4, 5]
// console.log(first) // 1
// console.log(others) // [2, 3, 4, 5]







// ======= ES5 =======
// function add(a,b){
//   a = a || 0
//   b = b || 0
//   return a + b
// }

// ======= ES6 =======
// function add(a = 0, b = 0){
//   return a + b
// }



// ======= default parameters =======
// function getFirst([first, ...rest] = [0, 1]){
//   return first
// }

// getFirst() // 0
// getFirst([10,20,30]) // 10

// function getArr({ nums } = { nums: [1,2,3,4] }){
//   return nums
// }

// getArr // [1,2,3,4]
// getArr({nums:[5,4,3,2,1]}) // [5,4,3,2,1]



// ======= default parameters =======
// function doSomethingWithValue(value = 'Hello World', callback = () => { console.log(value) }){
//   callback()
// }
// doSomethingWithValue() // Hello World






// ======= generators  =======
// function* idMaker() {
//   var index = 0;
//   while (index < 3)
//     yield index++;
// }

// var gen = idMaker();

// console.log(gen.next().value); // 0
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2
// console.log(gen.next().value); // undefined



// ======= generators example with yield*  =======
// function* anotherGenerator(i) {
//   yield i + 1;
//   yield i + 2;
//   yield i + 3;
// }

// function* generator(i) {
//   yield i;
//   yield* anotherGenerator(i);
//   yield i + 10;
// }

// var gen = generator(10);

// console.log(gen.next().value); // 10
// console.log(gen.next().value); // 11
// console.log(gen.next().value); // 12
// console.log(gen.next().value); // 13
// console.log(gen.next().value); // 20




// const symbol = Symbol('demo');
// const symbol2 = Symbol('demo');

// console.log(symbol); // Symbol(demo)
// console.log(symbol2); // Symbol(demo)

// console.log(symbol === symbol2); // false
// console.log(symbol == symbol2); // false


// const obj = {
//   name: 'Nik',
//   demo: 'DEMO',
//   [symbol]: 'meta'
// }

// console.log(obj); // {name: "Nik", demo: "DEMO", Symbol(demo): "meta"}
// console.log(obj[symbol]); // meta
// console.log(obj[symbol2]); // undefined


// for (let key in obj) {
//   console.log(key); // name, demo (без meta)
// }

// console.log(obj.demo); // DEMO
// console.log(obj[symbol]); // meta


// console.log(Symbol('name') == Symbol('name')); // false








































