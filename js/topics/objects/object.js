'use strict';

// ============ DEFINITION ============
/*
 Object - составной тип, в который могут входить данные разного типа.
 Объект может состоять из строк, чисел, логических значений и т.д.
 id - ключ (свойство)
 15 - значение
 */

const months = {
  January: 31, February: 28, March: 31, April: 30, May: 31, June: 30, July: 31, August: 31, September: 30, October: 31, November: 30, December: 31,
};

const monthsBySeason = {
  winter: { January: 31, February: 28, December: 31 },
  spring: { March: 31, April: 30, May: 31 },
  summer: { June: 30, July: 31, August: 31 },
  autumn: { September: 30, October: 31, November: 30 }
};

const someObj = {
  id: 15, name: 'John', active: true
}


// ------- Example I -------
const obj = {};
Object.defineProperty(obj, 'a', { writable: true, configurable: true, value: 'a' });
Object.defineProperty(obj, 'b', { writable: false, configurable: true, value: 'b' });
Object.defineProperty(obj, 'c', { writable: false, configurable: false, value: 'c' });

// console.log(obj.a);
obj.a = 'b';
// console.log(obj.a);
delete obj.a;

// console.log(obj.b);
// obj.b = 'a'; // Cannot assign to read only property 'b' of object
// console.log(obj.b);
delete obj.b;

// console.log(obj.c);
obj.b = 'a';
// console.log(obj.c);
delete obj.b;


// ============ Object.assign ============
const products = { name: 'phone', price: 100 };
const phoneCase = { name: "phone", material: "leather" };
// console.log(products);
const clone = Object.assign({}, products);
// console.log(clone);
// console.log(products == clone);

const extendsProducts = Object.assign({}, products, { color: 'black' });
// console.log('extendsProducts', extendsProducts);

const combine = Object.assign({}, products, phoneCase);
// console.log('combine', combine);


// ============ ПРОВЕРКА ЕСТЬ ЛИ НЕКОЕ СВОЙСТВО В ОБЪЕКТЕ ============
const car = {
  type: "Mercedes", model: "ML-350", weight: '1650kg', color: "white",

  start() {
  }, drive() {
  }, brake() {
  }, stop() {
  }
};

// console.log('car', car);
// delete car.weight;

// Option I - not reliable
// console.log(car.weight !== undefined);

// Option II
// console.log('weight' in car);


// Option III - not reliable
// console.log(car.hasOwnProperty('weight'));


// ============ METHODS OF COPY OF OBJECTS ============
const guitarPlayer = {
  firstName: 'Rik', lastName: 'Martin', address: {
    city: 'Colorado', street: 'Ranger Avenue',
  }, soloSpeed: 10, birthDate: '11.07.1978', guitarCount: 277, isLeftHanded: false,

  play() {
    console.log(`Let's rock!`);
  },

  playSolo(speed = 2) {
    console.log(`Play solo ${speed}x`);
  },

  guitar: {
    strings: 6
  },
}


// ------- Case I - using Object.assign({} someObj) -------
const clonesObjectAssign = [];
const countObjectAssign = 10;

for(let i = 0; i < countObjectAssign; i++) {
  const newClone = Object.assign({}, guitarPlayer)
  clonesObjectAssign.push(newClone);
}

// console.log('clonesObjectAssign', clonesObjectAssign);
// console.log(clonesObjectAssign[0] === clonesObjectAssign[1]); // false
// console.log(clonesObjectAssign[0].address === clonesObjectAssign[1].address); // true
// console.log(clonesObjectAssign[0].play === clonesObjectAssign[1].play); // true


// ------- Case II - using ...spread -------
const clonesSpread = [];
const countSpread = 10;

for(let i = 0; i < countSpread; i++) {
  const newClone = {
    ...guitarPlayer
  };
  clonesSpread.push(newClone);
}

// console.log('clonesSpread', clonesSpread);
// console.log(clonesSpread[0] === clonesSpread[1]); // false
// console.log(clonesSpread[0].address === clonesSpread[1].address); // true
// console.log(clonesSpread[0].play === clonesSpread[1].play); // true


// ------- Case III - using Recursion -------
const isObject = (object) => {
  const type = typeof object;
  return type === 'function' || type === 'object';
};

const cloneObject = (source) => {
  const clone = {};

  for(const key in source) {
    if(source.hasOwnProperty(key)) {
      if(isObject(source[key])) {
        clone[key] = cloneObject(source[key]);
      } else {
        clone[key] = source[key];
      }
    }
  }
  return clone;
}

const clonesRecursion = [];
const countRecursion = 10;

for(let i = 0; i < countRecursion; i++) {
  const newClone = cloneObject(guitarPlayer);
  clonesRecursion.push(newClone);
}

// console.log('clonesRecursion', clonesRecursion);
// console.log(clonesRecursion[0] === clonesRecursion[1]);
// console.log(clonesRecursion[0].address === clonesRecursion[1].address);
// console.log(clonesRecursion[0].play === clonesRecursion[1].play);


// ------- Case IV - using Lodash cloneDeep -------


// ------- Case V - using JSON.stringify & JSON.parse -------


// -------------- Case 1.1 - copy simple objects --------------
const simpleUser = {
  name: 'John Doe', age: 37, title: 'Developer'
}

const simpleUserCopy1 = { ...simpleUser };
const simpleUserCopy2 = Object.assign({}, simpleUser);
const simpleUserCopy3 = Object.create(simpleUser);

// console.log('simpleUserCopy1', simpleUserCopy1);
// console.log('simpleUserCopy2', simpleUserCopy2);
// console.log('simpleUserCopy3', simpleUserCopy3);


// -------------- Case 1.1 - copy hard objects --------------
const developerUser = {
  name: 'John Doe', birthDate: new Date('1985-04-08'), title: 'Developer', skills: ['JavaScript', 'TypeScript', 'React'],
}

const developerUserCopy1 = { ...developerUser };
const developerUserCopy2 = Object.assign({}, developerUser);
const developerUserCopy3 = Object.create(developerUser);
const developerUserCopy4 = JSON.parse(JSON.stringify(developerUser));
const developerUserCopy5 = structuredClone(developerUser);

developerUserCopy1.skills.push('Angular', 'Vue');

// console.log('developerUser skills', developerUser.skills);
// console.log('developerUser date', developerUser.birthDate.getDate());

// console.log('developerUser using spread', developerUserCopy1);
// console.log('developerUser using Object.assign', developerUserCopy2);
// console.log('developerUser using Object.create', developerUserCopy3);

// console.log('developerUser using JSON', developerUserCopy4);
// console.log('developerUser using JSON get date', developerUserCopy4.birthDate.getDate()); // error
// console.log('developerUser using JSON get date', developerUserCopy4.birthDate); // date string

// console.log('developerUser using structuredClone', developerUserCopy5);
// console.log('developerUser using structuredClone get date', developerUserCopy5.birthDate.getDate());


// -------------- Case 1.3 - copy super hard objects --------------
const complexObject = {
  set: new Set([1, 2, 3]), map: new Map([[1, 2]]), regex: /foo/, deep: { array: [new Blob()] }, error: new Error('Boom!')
}

const complexObjectCopy1 = JSON.parse(JSON.stringify(complexObject))
const complexObjectCopy2 = structuredClone(complexObject);

// console.log('complexObjectCopy1 using JSON copy', complexObjectCopy1); // complex property transform in usual object
// console.log('complexObjectCopy2 using structuredClone', complexObjectCopy2); // amassing done deep clone


// -------------- Case 1.3 - method limitations --------------
class Developer {
  constructor(name, birthDate, title, skills = []) {
    this.name = name;
    this.birthDate = birthDate;
    this.title = title;
    this.skills = skills;
  }

  addSkill(skill) {
    this.skills.push(skill);
  }

  get firstName() {
    return this.name.split(' ')[0];
  }
}

const john = new Developer('John Doe', '1985-04-08', 'Frontend Engineer', ['JavaScript']);

john.addSkill('TypeScript');

// console.log(john.skills); // ['JavaScript', 'TypeScript']
// console.log(john.firstName); // John
// console.log(john instanceof Developer); // true

// const johnCopyUsingSpread = {...john };
// console.log(johnCopyUsingSpread.addSkill); // undefined
// console.log(johnCopyUsingSpread.firstName); // undefined
// console.log(johnCopyUsingSpread instanceof Developer); // false

// const johnCopyUsingJSON = JSON.parse(JSON.stringify(john));
// console.log(johnCopyUsingJSON.addSkill); // undefined
// console.log(johnCopyUsingJSON.firstName); // undefined
// console.log(johnCopyUsingJSON instanceof Developer); // false


// const johnCopyUsingStructuredClone = structuredClone(john);
// console.log(johnCopyUsingStructuredClone.addSkill); // undefined
// console.log(johnCopyUsingStructuredClone.firstName); // undefined
// console.log(johnCopyUsingStructuredClone instanceof Developer); // false

























