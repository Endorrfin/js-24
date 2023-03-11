
// ============ SINGLETON ============

/*
* Singleton - это довольно простой порождающий паттерн, который гарантирует, что у класса есть только 1 экземпляр!
* */

// -------------- Solution 1.1 --------------
const instance1 = {
  name: "singleton",
};

const instance2 = {
  name: "singleton",
};

instance1 === instance2; // false
// {} === {}; // false


// -------------- Solution 1.2 --------------
let instance;

class Counter1 {
  constructor() {
    if (!instance) instance = this;
    return instance;
  }
};


// -------------- Solution 1.3 --------------
class Counter2 {
  constructor() {
    if (!instance) instance = this;
    instance.count = 0;
    return instance;
  }

  getCount() {
    return instance.count;
  }

  increaseCount() {
    return instance.count++;
  }
};

const myCount1 = new Counter2();
const myCount2 = new Counter2();

myCount1.increaseCount();
myCount1.increaseCount();
myCount2.increaseCount();
myCount2.increaseCount();

// console.log(myCount2.getCount()); // 4
// console.log(myCount1.getCount()); // 4


// -------------- Solution 1.4 --------------
class Counter3 {
  constructor() {
    if (typeof Counter3.instance === 'object') {
      return Counter3.instance;
    }
    this.count = 0;
    Counter3.instance = this;
    return this;
  }

  getCount() {
    return this.count;
  }

  increaseCount() {
    return this.count++;
  }
};

const myCount3 = new Counter3();
const myCount4 = new Counter3();

myCount3.increaseCount();
myCount3.increaseCount();
myCount4.increaseCount();
myCount4.increaseCount();

// console.log(myCount4.getCount()); // 4
// console.log(myCount3.getCount()); // 4
