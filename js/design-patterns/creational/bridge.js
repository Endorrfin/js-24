
// ============ BRIDGE ============

/*
* Bridge - порождающий паттерн, который разделяет 1 или несколько классов на несколько отдельных иерархий, называющихся абстракция м реализация,
* что в свою очередь помогает изменять их без зависимости друг от друга.
* Абстракция - это обертка, которая сама не выполняет работу, а делегирует ее одному из объектов реализаций.
* Реализация - это объект, в котором описана непосредственно сама реализация.
*
* Паттерн мост нужен для разделения непрекасающихся функциональностей в одном классе. Позволяет поместить всю реализацию в классы - абстракцию и реализацию.
* Абстракция - это интерфейс взаимодействия, который делегирует управления в реализацию.*
* Обычно паттерн Bridge вводят, когда корневой класс сильно разрастается и его нужно разделить, а это подразумевает серьезные структурные изменения,
* что тоже влияет на популярность данного шаблона проектирования.
* * */

// -------------- Example 1.1 block I --------------
class Model {
  constructor(color) {
    this.color = color;
  }
};

class Color {
  constructor(type) {
    this.type = type;
  }
  get () {
    return this.type;
  }
}

// -------------- Example 1.1 block II --------------
class BlackColor extends Color {
  constructor() {
    super('dark-black');
  }
}

class SilbrigColor extends Color {
  constructor() {
    super('Silbermetallic');
  }
}


// -------------- Example 1.1 block III --------------
class Audi extends Model {
  constructor(color) {
    super(color);
  }

  paint() {
    return `Auto: Audi, Color: ${this.color.get()}`;
  }
};


class Bmw extends Model {
  constructor(color) {
    super(color);
  }

  paint() {
    return `Auto: Bmw, Color: ${this.color.get()}`;
  }
};

// -------------- Example 1.1 block IV How it works --------------
// We avoided creation of very specific class:
// const blackBmw = new BlackColorBmw();

// Instead
const blackBmw = new Bmw(new BlackColor());
// console.log(blackBmw.paint());

