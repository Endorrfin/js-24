

// ------------ 👎😡 Example 1.1 bad approach ------------

class AutoB {
  constructor(public model: string) { }
  getCarModel() { }
}

const shop: Array<AutoB> = [
  new AutoB('Tesla'),
  new AutoB('Audi'),
];

const getPrice = (auto: Array<AutoB>): string | void => {
  for (let i = 0; i < auto.length; i++) {
    switch (auto[i].model) {
      case 'Tesla': return '80 000$';
      case 'Audi': return '50 000$';
      default: return 'No Auto Price';
    }
  }
}

getPrice(shop);




// ------------ 👍😊 Example 1.2 good approach ------------

abstract class CarPrice {
  abstract getPrice(): string;
}

class Tesla extends CarPrice {
  getPrice() {
    return '80 000$';
  }
}

class Audi extends CarPrice {
  getPrice() {
    return '50 000$';
  }
}

class Bmw extends CarPrice {
  getPrice() {
    return '70 000$';
  }
}

const store: Array<CarPrice> = [
  new Tesla(),
  new Audi(),
  new Bmw(),
];

const getTotalPrice = (auto: Array<CarPrice>): string | void => {
  for (let i = 0; i < auto.length; i++) {
    auto[i].getPrice();
  }
}

getTotalPrice(store);
