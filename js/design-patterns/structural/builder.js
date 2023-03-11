
// ============ BUILDER ============

/*
* Builder - данный структурный паттерн используется для создания объекта со сложными состояниями.
* Может иметь дополнительный слой абстракции. Это директор, который управляет несколькими строителями.
*
* Данный паттерн в удобной форме позволяет создавать различные конфигурации объектов,
* не засоряя исходный конструктор дополнительной логикой, которая в нем фактически не нужна.
*
* Также данный шаблон проектирования нужен, если объект существует в разных вариациях
* и процесс инстанцирования состоит из нескольких шагов.
* */

// -------------- Example 1.1 --------------
class Car {
  constructor() {
    this.autoPilot = false;
    this.parktronic = false;
    this.signaling = false;
  }
}


class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  addAutoPilot(autoPilot) {
    this.car.autoPilot = autoPilot;
    return this;
  }

  addParktronic(parktronic) {
    this.car.parktronic = parktronic;
    return this;
  }

  addSignaling(signaling) {
    this.car.signaling = signaling;
    return this;
  }

  updateEngine(engine) {
    this.car.engine = engine;
    return this
  }

  build() {
    return this.car;
  }
};

const myCar = new CarBuilder()
  .addAutoPilot(true)
  .addParktronic(true)
  .updateEngine('V8')
  .build();

// console.log('myCar', myCar);


const myAnotherCar = new CarBuilder()
  .addSignaling(true)
  .updateEngine('V4')
  .build();

// console.log('myAnotherCar', myAnotherCar);




