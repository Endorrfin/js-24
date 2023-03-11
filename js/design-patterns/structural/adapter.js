// ============ ADAPTER ============

/*
* Adapter - оборачивает несовместимый с чем-то объект и делает его совместимым не изменяя исходный код объекта.
*
* Самый элементарный пример адаптера из реальной жизни - это кардридер. Есть несколько носителей информации (flesh, cd, microCd, type-C) и всего лишь 1 port usb.
* Чтобы скопировать информацию на компьютер используем картридер.
*
* Adapter - это структурный паттерн, который оборачивает объект с уникальным, или специфическим внутренним устройством
* и подгоняет его под использование в уже стандартизированной системе классов.
* тоесть адаптирует его специфические свойства и методы под уже использующееся, что позволяет объектам с несовместимыми интерфейсами работать вместе.
* */

// -------------- Example 1.1 --------------
class Engine2 {
  simpleInterface() {
    console.log('Engine 2.0 = tr-tr-tr');
  }
};


class EngineV8 {
  complecatedInterface() {
    console.log('Engine V8! - wroom wroom!');
  }
};


class EngineV8Adapter {
  constructor(engine) {
    this.engine = engine;
  }

  simpleInterface() {
    this.engine.complecatedInterface();
  }
};


class Auto {
  startEngine(engine) {
    engine.simpleInterface()
  }
};


// Engine 2.0
const myCar1 = new Auto();
const oldEngine = new Engine2();

// myCar1.startEngine(oldEngine); // 'Engine 2.0 = tr-tr-tr'


// Engine V8 with adapter
const myCar2 = new Auto();
const engineAdapter = new EngineV8Adapter(new EngineV8());

// myCar2.startEngine(engineAdapter); // 'Engine V8! - wroom wroom!'


// Engine V8 without adapter
// const myCar3 = new Auto();
// const engineAdapter = new EngineV8();

// myCar3.startEngine(engineAdapter); // ERROR




