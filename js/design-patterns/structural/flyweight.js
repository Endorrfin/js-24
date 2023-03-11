
// ============ FLYWEIGHT ============

/*
* Flyweight (приспособленец, легковесный, кэш) - это структурный паттерн, который позволяет вместить большее количества определенных объектов в выделенную оперативную память.
* Он позволяет экономить ресурсы, разделяя общее состояние объектов между собою, вместо хранения одинаковых данных в каждом объекте, что похоже на кэширование данных.
* Легковес предназначается для єкономии памяти, занимаемой объектами. Если объект еще не создан, он создает его и помещает в свой внутренний пул.
* Если объект уже создан, тоесть содержится в пуле, то просто возвращает ссылку на него.
* * */

// -------------- Example 1.1 block I --------------
class Auto {
  constructor(model) {
    this.model = model;
  }
};


// -------------- Example 1.1 block II --------------
class AutoFactory {
  constructor(name) {
    this.models = {};
  }

  create(name) {
    let model = this.models[name];
    if (model) return model;
    // console.log('model'); // console counter
    this.models[name] = new Auto(name);
    return this.models[name];
  }

  getModels() {
    console.table(this.models);
  }
};


// -------------- Example 1.1 block III How it works --------------
const factory = new AutoFactory();

const bmw = factory.create('BMW');
const audi = factory.create('Audi');
const tesla = factory.create('Tesla');
const blackTesla = factory.create('Tesla');

// console.log(factory.getModels());

