
// ============ PROTOTYPE ============

/*
* Prototype - это паттерн, который позволяет копировать объекты не вдаваясь в подробности их реализации.
* С одной стороны - это немного похоже на фабрику, но в действительности посыл здесь другой.
* В шаблоне прототип есть базовая реализация класса и используя упрощенный интерфейс создаются клоны объектов,
* а клоны могут понадобиться для того, чтобы в случае необходимости изменить их структуру и заточить под выполнения определенной задачи.
*
* Prototype - это паттерн с помощью которого можно создать копию объекта везде, где это требуется
* с минимальными затратами памяти, так как создается копия на основании уже существующей структуры.
* и в случае необходимости модифицировать каждый экземпляр точечно под определенные нужны, не изменяя базовой структуры.
* */

// -------------- Solution 1.1 --------------
class TeslaCar {
  constructor(model, price, interior, autopilot) {
    this.model = model;
    this.price = price;
    this.interior = interior;
    this.autopilot = autopilot;
  }

  produce() {
    return new TeslaCar(this.model, this.price, this.interior, this.autopilot);
  }
}


// Produce base auto
const prototypeCar = new TeslaCar('S', 80000, 'black', false);

// Cloning of base auto
const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

// Changes for particular auto
car1.interior = 'white';
car1.autopilot = true;

// console.log(car1);
// console.log(car3);
// console.log(car3);




