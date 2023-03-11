
// ============ ABSTRACT FACTORY ============

/*
* Abstract factory - это паттерн, который создает интерфейс группирующий другие фабрики логически связаны друг с другом.
* Это своеобразная абстракция для фабрики и фабричного метода.
* Абстрактная фабрика - это дополнительная надстройка над другими фабриками.
* У подфабрик должен быть одинаковый интерфейс для создания объектов, чтобы им можно было управлять из абстрактной фабрики.
*
* Абстрактная фабрика - это дополнительная надстройка, или абстракция, которая управляя однотипными фабриками помогает создавать объекты со схожей структурой, но разными данными.
* При чем делает это ни привязываясь к конкретным данным создаваемых объектов.
* */

// -------------- Solution 1.1 --------------
// Abstract factory
function bmwProducer(kind) {
  return kind === 'sport' ? sportCarFactory : familyCarFactory;
};

// Factories
function sportCarFactory() {
  return new Z4();
};

function familyCarFactory() {
  return new I3();
};

class Z4 {
  info() {
    return "Z4 is a Sport car!";
  }
};

class I3 {
  info() {
    return 'i3 is a Family car'
  }
};


// Initializing Abstract factory of sport cars
const produce = bmwProducer('sport');

// Car producing (Factory)
const myCar = new produce();

// console.log(myCar.info());




