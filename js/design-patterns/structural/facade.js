
// ============ FACADE ============

/*
* Facade - задача скрыть сложную логику за простым фасадом.
* Прячет большую и не понятную реализацию внутри себя, а на ружу выдает понятный интерфейс взаимодействия.
* Другими словами facade собирает различные сложные структуры, объединить их и выдать простой способ манипуляции.
*
* Ключевая идея facade - скрыть под капотом различные сложные и не красивые реализации и предоставить удобный интерфейс взаимодействия.
* */

// -------------- Example 1.1 --------------

class Conveyor {
  setBody() { console.log('Body set!'); }
  getEngine() { console.log('Dismantle Engine!'); }
  setEngine() { console.log('Engine set!'); }
  setInterior() { console.log('Exterior added!'); }
  getInterior() { console.log('Update interior!'); }
  setExterior() { console.log('Added interior!'); }
  setWheels() { console.log('Wheels!'); }
  addElectronics() { console.log('Added electronics!'); }
  paint() { console.log('Car painted!'); }
}

class ConveyorFacade {
  constructor(car) {
    this.car = car;
  }

  assembleCar() {
    this.car.setBody();
    this.car.setEngine();
    this.car.setInterior();
    this.car.setExterior();
    this.car.setWheels();
    this.car.addElectronics();
    this.car.paint();
  }
};


// const conveyor = new ConveyorFacade(new Conveyor());
// const car = conveyor.assembleCar();

// console.log('car', car);


// -------------- Example 1.2 --------------
class ConveyorFacade2 {
  constructor(car) {
    this.car = car;
  }

  assembleCar() {
    this.car.setBody();
    this.car.setEngine();
    this.car.setInterior();
    this.car.setExterior();
    this.car.setWheels();
    this.car.addElectronics();
    this.car.paint();
  }

  changeEngine() {
    this.car.getEngine();
    this.car.setEngine();
  }

  changeInterior() {
    this.car.getInterior();
    this.car.setInterior();
  }
};


// const conveyor2 = new ConveyorFacade2(new Conveyor());
// let car2 = conveyor2.assembleCar();
// car2 = conveyor2.changeEngine();
// car2 = conveyor2.changeInterior();

// console.log('car2', car2);





