'use strict';
// ============ Mapping Users to Get Usernames ============

/*
* 1. Write code to get array of names from given array of users,
* 2. Get back only active users,
* 3. Sort users by age descending
*
* */

const users = [
  {
    id: 1,
    name: 'Jack',
    isActive: true,
    age: 17
  },
  {
    id: 2,
    name: 'Nick',
    isActive: true,
    age: 52
  },
  {
    id: 3,
    name: 'Bob',
    isActive: false,
    age: 24
  },
  {
    id: 4,
    name: 'Georg',
    isActive: true,
    age: 38
  },
  {
    id: 5,
    name: 'Akim',
    isActive: false,
    age: 46
  }
];


// // Solve I
// const names = []
// for (let i = 0; i < users.length; i++) {
//   names.push(users[i].name);
// }


// // Solve II
// users.sort((user1, user2) => user1.age < user2.age ? -1 : 1)
// const names = []
// users.forEach((user) => {
//   if (user.isActive) {
//     names.push(user.name);
//   }
// })


// // Solve III
// const names = users
//   .sort((user1, user2) => user1.age < user2.age ? -1 : 1)
//   .filter((user) => user.isActive)
//   .map((user) => user.name);
//
// console.log(names);


// ============ Difference between null and undefined ============

// let var1;
// console.log(var1);
// console.log(typeof var1);
//
// let var2 = null;
// console.log(var2);
// console.log(typeof var2);


// ============ Hoisting ============

/*
* What will be console.logged here
* */

// // Question 1
// console.log(foo); // Error
// foo = 1;


// // Question 2
// console.log(foo); // undefined
// var foo = 2;


// // Question 3
// var foo;
// console.log(foo); // undefined
// foo = 3;


// // Question 4
// foo = 4;
// console.log(foo); // 4
// var foo;


// ============ Closures ============

/*
* Create a counter function which has increment and genValue functionality
* */

// const privateCounter = () => {
//   let count = 0;
//
//   return {
//     increment: (val = 1) => {
//       count += val;
//     },
//
//     getValue: () => {
//       return count;
//     },
//   };
// };
//
// const counter = privateCounter();
// console.log(counter.getValue()); // 0
// counter.increment();
// console.log(counter.getValue()); // 1
//
// console.dir(counter.getValue);
//
//
// const privateSecret = () => {
//   const secret = 'foo';
//
//   return () => secret;
// };
//
// const getSecret = privateSecret();
// console.log(getSecret()); // foo


// ============ Currying ============

/*
* Write a function which helps to achieve multiply(a)(b) and returns product of a and b
* Create a curry function
* */

// const multiply = (num1) => {
//   return (num2) => {
//     return num1 * num2;
//   };
// };
//
// console.log(multiply(2)(3)); // 6


// const multiply = (num1) => (num2) => num1 * num2;
// console.log(multiply(2)(3));


// const multiply = (num1) => {
//   return (num2) => {
//     return (num3) => {
//       return num1 * num2 * num3;
//     }
//   };
// };
//
// console.log(multiply(2)(3) (4)); // 24


// const curry = function (fn) {
//   var arity = fn.length;
//   console.log('arity', arity);
//
//   return function f1(...args) {
//     // console.log('f1', args);
//     if (args.length >= arity) {
//       console.log('enough arguments');
//       return fn(...args);
//     } else {
//       console.log('need mere arguments');
//       return function f2(...moreArgs) {
//         var newArgs = args.concat(moreArgs);
//         return f1(...newArgs);
//       };
//     }
//   };
// };
//
// const curriedSum = curry((a, b, c) => a + b + c);
// const partialLyCurriedSum = curriedSum(1);
// console.log(partialLyCurriedSum(2, 3));
// console.log(curriedSum(1, 2, 3));
//
//
// const get = curry((property, object) => object[property]);
// const getId = get('id');
// const map = curry((fn, values) => values.map(fn));
// const getIds = map(getId);


// ============ Adding Elements of the Array ============

/*
* Write a function which get's an array and an element and returns a array with this element at the end
* */

// ---- Option I ----
// const arr1 = [1, 2, 3, 4,];
// console.log(arr1.push(5));


// ---- Option II ----
// const numbers = [1, 2];
// const append = (arr, el) => {
//   // arr.push(el);
//
//   return [...arr, el];
// };
//
// console.log(append([1, 2, 3, 4, 5, 6, 7], 5));
// console.log(append(numbers, 3));
// console.log(append(numbers, 4));
// console.log(append(numbers, 11));
//
// const newNumbers = append(numbers, 3);
// console.log(newNumbers);
// console.log(numbers);


// ============ Concatenating Arrays ============

/*
* Write a function which can concatenate 2 arrays
* */

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5];
//
// // console.log('Option I', arr1.concat(arr2));
// // console.log('Option II', ...arr1, ...arr2);
//
//
// const mergeArrays = (arr1, arr2) => {
//   //return arr1.push(...arr2); // bad approach because push mutation initial array
//   return arr1.concat(...arr2); // good result
//   return [...arr1,...arr2]; // good result
// }
//
// const result = mergeArrays(arr1, arr2);
// console.log('result', result, 'arr1', arr1, 'arr2', arr2);
//
// // console.log('result', mergeArrays( arr1, arr2));


// ============ Check if User With Such Name Exists ============

/*
* Check that user with such name exists in array of objects
* */

// users.forEach((user) => {
//   if (user.name === 'Bob') {
//     console.log("Yes");
//   } else {
//     console.log('No');
//   }
// });


// // Option I
// const isNameExists1 = (name, array) => {
//   let exists = false;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].name === name) {
//       exists = true;
//     }
//   }
//   return exists;
// }
//
// console.log(isNameExists1('Georg', users));
// console.log(isNameExists1('Mike', users));
// console.log(isNameExists1('Julia', users));
// console.log(isNameExists1('Akim', users));


// // Option II
// const isNameExists2 = (name, arr) => arr.some((el) => el.name === name);
// console.log(isNameExists2('Georg', users));
// console.log(isNameExists2('Mike', users));
// console.log(isNameExists2('Julia', users));
// console.log(isNameExists2('Akim', users));


// // Option III
// const isNameExists3 = (name, arr) => {
//   const el = arr.find((el) => el.name === name);
//   return Boolean(el);
// }
// console.log(isNameExists3('Georg', users));
// console.log(isNameExists3('Mike', users));
// console.log(isNameExists3('Julia', users));
// console.log(isNameExists3('Akim', users));


// // Option IV
// const isNameExists4 = (name, arr) => {
//   const index = arr.findIndex((el) => el.name === name);
//   return index > 0;
// }
// console.log(isNameExists4('Georg', users));
// console.log(isNameExists4('Mike', users));
// console.log(isNameExists4('Julia', users));
// console.log(isNameExists4('Akim', users));


// ============ Remove all Duplicates in the Array ============

/*
* Remove all duplicates in the array
* */

// const arr = [1, 2, 3, 1, 2];
//
// const uniqueArr = [...new Set(arr)];
// console.log(uniqueArr);
//
//
// // Option I
// const uniqueArr1 = (arr) => {
//   return [...new Set(arr)];
// };
// console.log(uniqueArr1(arr));
//
//
//
// // Option II
// const uniqueArr2 = (arr) => {
//   const result = [];
//   arr.forEach((item) => {
//     if (!result.includes(item)) {
//       result.push(item);
//     }
//   })
//   return result;
// };
// console.log(uniqueArr2(arr));
//
//
// // Option III
// const uniqueArr3 = (arr) => {
//   return arr.reduce((acc, el) => {
//     return acc.includes(el) ? acc : [...acc, el];
//   }, []);
// };
// console.log(uniqueArr3(arr));


// ============ Sorting the array ============

/*
* Sort the array of numbers
* */

// const arr = [3, 5, 1];
// const result = arr.sort((a, b) => (a < b ? -1 : 1));
// console.log(arr, result);
//
//
// const books = [
//   { name: 'Harry Potter', author: 'Joanne Rowling' },
//   { name: 'Warcross', author: 'Marie Lu' },
//   { name: 'The Hunger Games', author: 'Suzanne Collins' },
// ];
//
// books.sort((book1, book2) => {
//   const authorLastName1 = book1.author.split(' ')[1];
//   const authorLastName2 = book2.author.split(' ')[2];
//   return authorLastName1 < authorLastName2 ? -1 : 1;
// })
// console.log(books);


// ============ Writing Range Function ============

/*
* Write a function which implement range
* range (1, 50)
* 1, 2, 3, 4, 5, 6, .... ,50
* */

// // Option I
// const range = (start, end) => {
//   const result = [];
//   for (let i = start; i <= end; i++) {
//     result.push(i);
//   }
//
//   return result;
// }
// console.log(range(1, 50));
//
// // Option II
// const range2 = (start, end) => {
//   return [...Array(end).keys()].map((el) => el + start);
// }
//
// console.log(range2(1, 11));


// ============ Writing Shuffle Function ============

/*
* Write a function which implements shuffle
* */

// const shuffleItems = (items) => {
//   return items
//     .map((item) => ({ sort: Math.random(), value: item }))
//     .sort((item1, item2) => item1.sort - item2.sort)
//     .map((a) => a.value);
// };
//
// console.log(shuffleItems([1,2]));


// ============ 16. Find the Number of Occurrences of Minimum Value in List ============

/*
* Find the number of occurrences of minimum value in the list
* */

// const arr = [1, 3, 3, 4, 5, 8, 3, 5, 1, 2, 1, 5, 1, 2, 1];
// const minValue = Math.min(...arr);
// const minArr = arr.filter((el) => el === minValue);
// console.log(minArr.length);


// ============ This ============

/*
* What will be logged here?
* */

// // Task 1
// function getItem() {
//   console.log(this); // window, if no 'use strict'
// }
//
// getItem();


// // Task 2
// const item = {
//   title: 'Ball',
//   getItem() {
//     console.log('this', this); // item object
//   },
// };
//
// item.getItem();


// // Task 3
// class Item {
//   title = 'Ball';
//   getItem() {
//     console.log('this', this); // item object
//   }
// }
//
// const item = new Item();
// item.getItem();


// // Task 4
// class Item {
//   title = 'Ball';
//
//   getItem() {
//     function someFn() {
//       console.log('this', this); // undefined
//     }
//
//     someFn();
//   }
// }
//
// const item = new Item();
// item.getItem();


// // Task 5
// class Item {
//   title = 'Ball';
//
//   getItem() {
//     const this_ = this;
//     [1, 2, 3].map(function(item) {
//       console.log(this_); // item object
//     })
//   }
// }
//
// const item = new Item();
// item.getItem();


// // Task 6
// class Item {
//   title = 'Ball';
//
//   getItem() {
//     [1, 2, 3].map((item) => {
//       console.log(this); // item object
//     })
//   }
// }
//
// const item = new Item();
// item.getItem();


// ============ Classes ============

/*
* 1. Design a class for employee which takes id and name during construction of object and has a salary property
* 2. Design a class for manager which is employee and can have department property
* */

// class Employee {
//
//   constructor(id, name) {
//     if (!id || !name) {
//       throw new Error('Employee id and name are mandatory');
//     }
//     this.id = id;
//     this.name = name;
//   }
//
//   setSalary(salary) {
//     this.salary = salary;
//   }
//
//   getId() {
//     return this.id;
//   }
//
//   getName() {
//     return this.name;
//   }
//
//   getSalary() {
//     return this.salary;
//   }
// }
//
// const employee = new Employee(1, 'Jack');
// employee.setSalary(1000);
//
// console.log(employee); // Employee {id: 1, name: 'Jack', salary: 1000}
// console.log(employee.getId()); // 1
// console.log(employee.getName()); // Jack
// console.log(employee.getSalary()); // 1000
//
//
// class Manager extends Employee {
//   setDepartment(name) {
//     this.department = name;
//   }
//
//   getDepartment() {
//     return this.department;
//   }
// }
//
//
// const manager = new Manager(2, 'John');
// manager.setDepartment('Development')
// console.log(manager);


// ============ Prototypes ============

/*
* 1. Design the same classes by using only Javascript prototypes
* */

// var Staff = function(id, name) {
//   if (!id || !name) {
//     throw new Error('Staff if and name are mandatory')
//   }
//
//   this.id = id;
//   this.name = name;
// };
//
// Staff.prototype.setSalary = function (salary) {
//   this.salary = salary;
// }
//
// Staff.prototype.getId = function() {
//   return this.id;
// }
//
// Staff.prototype.getName = function() {
//   return this.name;
// }
//
// Staff.prototype.getSalary = function() {
//   return this.salary;
// }
//
// var staff = new Staff(2, 'Mark');
// staff.setSalary(700);
// console.log(staff.getId());
// console.log(staff.getName());
// console.log(staff.getSalary());
//
//
// var Manager = function(params) {
//   Staff.apply(this, arguments);
// };
//
// Manager.prototype = Object.create(Staff.prototype);
// console.log(Manager.prototype);
// Manager.prototype.constructor = Manager;
//
// Manager.prototype.setDepartment = function(name) {
//   this.department = name;
// };
//
// Manager.prototype.getDepartment = function() {
//   return this.department;
// };
//
//
// const manager = new Manager(3, 'Bill');
// manager.setDepartment('Risk');
// console.log(manager);
// console.log(manager.getId());
// console.log(manager.getDepartment());


// ============ Modules ============

/*
* 1. Create a es6 module with function getName, getSurname and default export getFullname
* 2. Create the same with commonJs module
* */


// import getFullName, { getName, getSurname } from './es6.js';
// const {getName, getSurname, getFullname} = require('./common');
//
// console.log(
//   getName('Jack'),
//   getSurname('Sparrow'),
//   getFullName('Jack', 'Sparrow')
// );


// ============ Implement Debounce Function ============

/*
* 1. Create debounce function
* */

// const debounce = (func, timeout = 300) => {
//   let timer
//   return (...args) => {
//     console.log('inner fn', args);
//     clearTimeout(timer);
//    timer = setTimeout(() => {
//       func.apply(this, args);
//     }, timeout);
//   }
// }
//
// const saveInput = (name) => {
//   console.log('saveInput', name);
// }
//
// const processChange = debounce(saveInput, 2000);
// processChange('foo');
// processChange('foo');
// processChange('foo');
// processChange('foo');


// ============ Implement Throttle Function ============

/*
* 1. Create throttle function
* */

// const throttle = (func, timeout = 300) => {
//   let isWaiting = false;
//   return (...args) => {
//     if (!isWaiting) {
//       func.apply(this, args);
//       isWaiting = true
//       setTimeout(() => {
//         isWaiting = false;
//       }, timeout);
//     }
//   };
// };
//
// const saveInput = (name) => {
//   console.log('saveInput', name);
// };
//
// const processChange = throttle(saveInput, 2000);
// processChange('foo');
//
// setTimeout(() => {
//   processChange('foo');
// }, 1000);
//
// setTimeout(() => {
//   processChange('foo');
// }, 1200);
//
// setTimeout(() => {
//   processChange('foo');
// }, 2400);
//
// setTimeout(() => {
//   processChange('foo');
// }, 1000);


// ============ Highlight all words over 8 chars with red ============

// const paragraph = document.querySelector('.text');
// paragraph.innerHTML = paragraph.innerHTML
//   .split(' ')
//   .map((word) => {
//     return word.length > 8
//       ? `<span style='background-color: red'>${word}</span>`
//       : word;
//   })
// .join(' ');


// ============ Add a link ============

/*
* 1. Ad a link back to the source of the text after the paragraph tag(https://forcemipsum.com/)
* */

// const link = document.createElement('a');
// link.href = 'https://forcemipsum.com/';
// link.innerHTML = 'Text generated from Lorem Ipsum';
// document.body.appendChild(link);


// ============ Split Each Sentence to a Separate Line ============

/*
* 1. Split each new sentence to a separate line in the paragraph text.
* A sentence can be assumed to be a string of text terminated with a period (.)
* */

// const paragraph = document.querySelector('p');
// paragraph.innerHTML = paragraph.innerHTML
//   // .split('.')
//   .split(/\.[^.|<]/)
//   .join('.<p></p>') + '<p>';


// ============ Event Delegation ============

/*
* 1. Implement a click on todo item as fast as possible
* */

// Option I
// const items = document.querySelectorAll('.item');
// items.forEach((item) => {
//   item.addEventListener('click', () => {
//     console.log('you clicked on item: ' + item.innerText);
//   });
// });


// Option II
// const app = document.querySelector('.todo-app');
// app.addEventListener('click', (e) => {
//   if (e.target && e.target.classList.contains('item')) {
//     console.log('you clicked on item: ' + e.target.innerText);
//   }
// })


// ============ Asynchronous JavaScript | Xml HTTP Request ============

/*
* 1. Write an example of fetching data with XMLHttpRequest.
* */

// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.github.com/users/gaearon/repos');
//
// xhr.send();
// xhr.onload = function () {
//   if (xhr.status !== 200) {
//     console.log('Error' + xhr.status + xhr.status);
//   } else {
//     console.log('Success', xhr.response);
//   }
// };
//
// xhr.onerror = function () {
//   console.log('xhr request failed');
// }


// ============ Asynchronous JavaScript | Fetch API ============

/*
* 1. Write an example of fetching data using fetch API.
* */

fetch('https://api.github.com/users/gaearon/repos')
  .then((res) => res.json())
  .then((data) => {
    console.log('success', data);
  })
  .catch((err) => {
    console.log(err);
  })


// ============ Asynchronous JavaScript | Basic Callback ============

/*
* 1. Write an asynchronous function which executes callback after finishing it's asynchronous task
* */

const asyncFn = (callback) => {
  setTimeout(() => {
    callback('done');
  }, 2000)
};

asyncFn((message) => {
  console.log('callback', message);
});


























