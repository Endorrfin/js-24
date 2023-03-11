
// ============ FACTORY METHOD ============

/*
* Factory Method - основная цель и задача данного паттерна это создание класса, так пишем в OOP,
* который в свою очередь будет помогать создавать определенные объекты на основании каких-небудь входных данных.
* Исходный класс можно называть супер классом.
*
* Когда и зачем нужно использовать фабрику?
* Когда нужно создавать множество однотипных объектов, то есть объектов с одинаковой структурой, но разными данными,
* при чем объекты могут содержать как свойства, так и методы.
* */

// -------------- Solution 1.1 --------------
class Bmw {
  constructor(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}


// -------------- Solution 1.2 --------------
class BmwFactory {
  create(type) {
    if (type === 'X5') return new Bmw(type, 108000, 300);
    if (type === 'X6') return new Bmw(type, 111000, 320);
  }
}

const factoryMethod = new BmwFactory();
const x5 = factoryMethod.create('X5');
const x6 = factoryMethod.create('X6');

