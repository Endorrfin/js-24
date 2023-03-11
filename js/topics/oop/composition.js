
// ======= Inheritance =======

class Monster {
  constructor(name) {
    this.name = name;
  }

  attack() {
    console.log(`${this.name} attacked`);
  }

  walk() {
    console.log(`${this.name} walked`);
  }
}


class FlyingMonster extends Monster {
  fly() {
    console.log(`${this.name} flew`);
  }
}

class SwimmingMonster extends Monster {
  swim() {
    console.log(`${this.name} swam`);
  }
}

class FlyingSwimmingMonster extends SwimmingMonster {
  fly() {
    console.log(`${this.name} flew`)
  }
}


const bear = new Monster('bear')
// bear.walk();
// bear.attack();

const eagle = new FlyingMonster('eagle')
// eagle.walk()
// eagle.attack()
// eagle.fly()


const shark = new SwimmingMonster('shark')
// shark.walk()
// shark.attack()
// shark.swim()


// ======= Composition =======
function swimmer({ name }) {
  return {
    swim: () => console.log(`${name} swam`)
  }
}

function attackerAndWalker({ name }) {
  return {
    attack: () => console.log(`${name} attacked`),
    walk: () => console.log(`${name} walked`)
  }
}

function flyer({ name }) {
  return {
    fly: () => console.log(`${name} flew`)
  }
}

function swimmingMonsterCreator(name) {
  const monster = { name: name }

  return {
    ...monster,
    ...attackerAndWalker(monster),
    ...swimmer(monster)
  }
}

function flyingSwimmingMonsterCreator(name) {
  const monster = { name: name }

  return {
    ...monster,
    ...attackerAndWalker(monster),
    ...swimmer(monster),
    ...flyer(monster)
  }
}

const obj1 = swimmer({ name: 'Test' })
// obj1.swim()

const obj2 = swimmingMonsterCreator('Monster')
// obj2.swim()


const obj3 = flyingSwimmingMonsterCreator('Monster')
// obj3.attack()
// obj3.walk()
// obj3.swim()
// obj3.fly()











