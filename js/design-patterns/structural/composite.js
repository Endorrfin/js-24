
// ============ COMPOSITE ============

/*
* Composite - компоновщик это структурный паттерн проектирования, который позволяет сгруппировать множество объектов в древовидную структуру и работать с этой структурой так,
* как будто это один единственный объект.
* Паттерн работает со сложными компонентами через единый интерфейс с общим методом получения стоимости в нашем примере.
* * */

// -------------- Example 1.1 block I --------------
class Equipment {
  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getPrice() {
    return this.price || 0;
  }

  setPrice(price) {
    this.price = price;
  }
}

// -------------- Example 1.1 block II --------------

class Engine extends Equipment {
  constructor() {
    super();
    this.setName('Engine');
    this.setPrice(800);
  }
};


class Body extends Equipment {
  constructor() {
    super();
    this.setName('Body');
    this.setPrice(3000);
  }
};


class Tools extends Equipment {
  constructor() {
    super();
    this.setName('Tools');
    this.setPrice(4000);
  }
};


// -------------- Example 1.1 block III --------------

class Composite extends Equipment {
  constructor() {
    super();
    this.equipments = [];
  }

  add(equipment) {
    this.equipments.push(equipment);
  }

  getPrice() {
    return this.equipments
      .map(equipment => equipment.getPrice())
      .reduce((a, b) => a + b);
  }
}

// -------------- Example 1.1 block IV How it works --------------

class Car extends Composite {
  constructor() {
    super();
    this.setName('Audi');
  }
};

const myCar = new Car();
myCar.add(new Engine());
myCar.add(new Body());
myCar.add(new Tools());

// console.log(`${myCar.getName()} price is ${myCar.getPrice()} $`);
