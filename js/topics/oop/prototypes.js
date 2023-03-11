
// ============ PROTOTYPES ============

// -------------- function constructor --------------

/**
 * функция-конструктор - фабрика по созданию объектов, позволяет динамически создавать объекты.
 * new - это оператор. Если с помощью new вызываем функцию, то она вызывается как функция-конструктор.
 * Оператор new позволяет создать пустой объект и в контексте этого объекта вызвать эту функцию, чтоб она отработала как конструктор.
 *
 * Manager - это схема
 * mango & poly - экземпляр
 */

const Manager = function (name, sales = 0) {
  // this = {}
  this.name = name;
  this.sales = sales;

  this.sell = function (product, price) {
    console.log(`Manager ${this.name} sold ${product} for ${price}`);
    this.sales += 1;
  };

  //  return this // делает за нас
};

const mango = new Manager ('Mango', 5);
// console.log(mango); // Manager {name: "Mango", sales: 5}
// mango.sell('Ipod nano', 170)

const poly = new Manager ('Poly', 10);
// console.log(poly); // Manager {name: "Poly", sales: 10}
// poly.sell('Ipod micro', 192)





// -------------- function constructor - counter --------------
/**
 * Counter A & CounterB = называется экземпляр. Когда мы что-то сделали по конструктору - это называется экземпляр.
 * Два абсолютно независимых объекта с одинаковым функционалом.
 * Конструкторы - это много схем, из которых делаются экземпляры. Они абсолютно идентичны по количеству свойств, разные по значениям и не зависят друг от друга.
 */

const Counter = function ({ initialValue = 0, step = 1 }) {
  // this {}

  this.value = initialValue;
  this.step = step;

  this.increment = function() {
    this.value += this.step;
  };

  // return this;
};
// console.dir(Counter)


const counterA = new Counter({ initialValue: 10, step: 5 });
// console.log('counterA.value: ', counterA.value);
// counterA.increment();
// console.log('counterA.value: ', counterA.value);

const counterB = new Counter({ initialValue: 100, step: 15 });
// console.log('counterB.value: ', counterB.value);
// counterB.increment();
// console.log('counterB.value: ', counterB.value);
// console.log(counterA, counterB);





// -------------- General introduction to PROTOTYPE INHERITANCE --------------

/**
 * У каждой функции, кроме стрелочных есть внутреннее свойство prototype, которое содержит объект и хранит ссылку на саму эту функцию.
 * У каждого объекта есть __proto__
 *
 * Часто бывает путаница:
 * У объектов свойство prototype
 * У функций свойство prototype
 * Поэтому, когда говорят об объекте, обычно говорят __proto__
 * Когда говорят о функции конструкторе, говорят prototype.
 * [[Prototype]] === __proto__
 *
 * Как работает цепочка прототипов?
 * Когда вызывается какой-то метод, или идет обращение к свойству на объекте, сначала поиск этого свойства происходит в самом объекте.
 * Если в этом объекте свойства с таким ключом не найдено, то поиск осуществляется в его прототипе, заходит в свойство __proto__ и ищет там. Очень похоже на цепочку областей видимости.
 */

const Counter2 = function ({ initialValue = 0, step = 1 }) {
  // this {}
  // this.__proto__ = Counter.prototype

  this.value = initialValue;
  this.step = step;

  // return this;
};
// console.dir(Counter2)

Counter2.prototype.increment = function() {
  this.value += this.step;
};


const counterC = new Counter2({ initialValue: 10, step: 5 });
// console.log('counterC.value: ', counterC.value);
counterC.increment();
// console.log('counterC.value: ', counterC.value);

const counterD = new Counter2({ initialValue: 100, step: 15 });
// console.log('counterD.value: ', counterD.value);
counterD.increment();
// console.log('counterD.value: ', counterD.value);

// console.log(counterA, counterD);
// console.log(counterA, counterB);

