
// ============ DECORATOR ============

/*
* Decorator - с помощью данного структурного паттерна можно добавлять объектам новые свойства и методы.
* Другими словами оборачивать объект в класс декоратора и тем самым расширять его функциональность.
* */

// -------------- Example 1.1 --------------
class Car {
  constructor() {
    this.price = 10000;
    this.model = 'Car';
  }

  getPrice() {
    return this.price;
  }

  getDescription() {
    return this.model;
  }
}


// Create decorator I
class Autopilot {
  constructor(car) {
    this.car = car;
  }

  getPrice() {
    return this.car.getPrice() + 5000;
  }

  getDescription() {
    return `${this.car.getDescription()} with autopilot`;
  }
};

// Create decorator II
class Parktronic {
  constructor(car) {
    this.car = car;
  }

  getPrice() {
    return this.car.getPrice() + 3000;
  }

  getDescription() {
    return `${this.car.getDescription()} with parktronic`
  }
};


class Tesla extends Car {
  constructor() {
    super();
    this.price = 40000;
    this.model = 'Tesla';
  }
}


// Version with Autopilot & Parktronic
let tesla1 = new Tesla();
tesla1 = new Autopilot(tesla1);
tesla1 = new Parktronic(tesla1);

// console.log(tesla1.getPrice(), tesla1.getDescription());

// Version with Autopilot only
let tesla2 = new Tesla();
tesla2 = new Autopilot(tesla2);
// console.log(tesla2.getPrice(), tesla2.getDescription());



// -------------- Example 1.2 --------------
class Audi extends Car {
  constructor() {
    super();
    this.price = 20000;
    this.model = 'Audi';
  }
}

// Version with Autopilot only
let audi = new Audi();
audi = new Autopilot(audi);
// console.log(audi.getPrice(), audi.getDescription());



