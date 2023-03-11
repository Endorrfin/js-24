// 'use strict';

// ======= THIS #1 =======

/*
* https://www.youtube.com/watch?v=OaR9Go75hOY&list=PLwHvxJae2LazDrHm6ayqLKz6jszEn7ArQ&index=4
* Как использовать методы call apply & bind?
* Эти методы используются для вызова функции в определенном контексте.
* Контекст - это то, на что будет ссылаться this, если оно использовано в тебе данной функции
* В JS функции являются подвидом объекта.
* Когда мы объявляем функцию, к примеру:
* function doSomething() {
*   return "I did.";
* }
* doSomething(); // I did.
*
* Когда мы объявляем функцию, она автоматически наследуется от некоего базового объекта называемого function prototype - прототип функции.
* Методы call apply и bind являются методами function prototype. Это позволяет нам вызывать эти методы на любой функции через точку.
* Методы call и apply позволяют непосредственно выполнить функцию с определенным контекстом и определенными параметрами.
* Методы bind позволяет связать функцию с контекстом и параметрами для того, чтобы выполнить ее позже.
* */


// -------------- Method call --------------
const employeeA1 = {
  name: "Hanna",
  position: "Project manager",
  salary: 1000
};

const employeeA2 = {
  name: "Bill",
  position: "Junior developer",
  salary: 800
};

function promote1 (newPosition, salaryRise) {
  this.position = newPosition;
  this.salary += salaryRise;

  return this.name+" is " + this.position + " and earns $" + this.salary
}


promote1.call(employeeA1, "Department head", 500); // Hanna is Department head and earns $1500
promote1.call(employeeA2, "Middle developer", 300); // Bill is Middle developer and earns $1100


// -------------- Method apply --------------
const employeeB1 = {
  name: "Hanna",
  position: "Project manager",
  salary: 1000
};

const employeeB2 = {
  name: "Bill",
  position: "Junior developer",
  salary: 800
};

function promote2 (newPosition, salaryRise) {
  this.position = newPosition;
  this.salary += salaryRise;

  return this.name+" is "+this.position+" and earns $"+this.salary
}


promote2.apply(employeeB1, ["Department head", 500]); // Hanna is Department head and earns $1500
promote2.apply(employeeB2, ["Middle developer", 300]); // Bill is Middle developer and earns $1100



// -------------- Method bind --------------
const employeeC1 = {
  name: "Hanna",
  position: "Project manager",
  salary: 1000
};

function promote3 (newPosition, salaryRise) {
  this.position = newPosition;
  this.salary += salaryRise;

  return this.name+" is "+this.position+" and earns $"+this.salary
}

// option I
const promoteHanna = promote3.bind(employeeC1);
promoteHanna("Department head", 500) // Hanna is Department head and earns $1500

// option II
const promoteHannaToDepartmentHead = promote3.bind(employeeC1, "Department head");
promoteHannaToDepartmentHead(700); // Hanna is Department head and earns $1700








// -------------- Example 1.4 - call, apply, bind --------------
const sell = function (product, price) {
  console.log(`Manager ${this.name} sold ${product} for ${price}`);
  this.sales += 1;
}

const mango = {
  name: 'Mango',
  sales: 10
};

const poly = {
  name: 'Poly',
  sales: 20
};

// sell.call(mango, 'TV', 50); // вызываем функцию, привязываем контекст, передаем аргументы в виде списка
// sell.call(poly, 'CPY', 100); // вызываем функцию, привязываем контекст, передаем аргументы в виде списка


// sell.apply(mango, ['Phone', 350]); // вызываем функцию, привязываем контекст, передаем аргументы в виде массива
// sell.apply(poly, ['Wasch', 400]); // вызываем функцию, привязываем контекст, передаем аргументы в виде массива


// const polySell = sell.bind(poly, 'Imac', 1800);
// const mangoSell = sell.bind(mango, 'macBook', 1400);

// polySell(); // Manager Poly sold Imac for 1800
// mangoSell(); // Manager Mango sold Imac for 1400



const product = {
  label: 'Adidas',
  showLabel() {
    console.log(this); // {label: "Adidas", showLabel: ƒ}
    console.log(this.label); // Adidas

    return this.label;
  },
};


const printLabel = function(callback) {
  const label = callback();

  console.log(`Product label: ${label}`); // Product label: Adidas
};

const boundShowLabel = product.showLabel.bind(product);

// boundShowLabel();

// printLabel(boundShowLabel);






