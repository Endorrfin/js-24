
// ============ THIS ============

/*
* Как работает ключевое слово this?
* В большинстве языков программирования, по крайней мере С-подобных языков, есь ключевое слово this и оно ссылается
* на текущий объект. тоесть на объект, которому принадлежит метод, где использовано это ключевое слово.
*
* Однако в JS методы, они же функции не обязательно принадлежат какому-то объекту.
* Кроме того, они могут принадлежать нескольким объектам, или менять объекты, которым принадлежат.
* По причине выше перечисленного в JS ключевое слово this указывает не на текущий объект, а на контекст вызова функции.
*
* В отличии от других языков программирования в JS ключевое слово this можно использовать глобально, тоесть вне, какого-либо класса, или функции.
* Глобальный объект предоставляется средой выполнения.
* Если код будет выполняться node.js - то ключевое слово this будет ссылаться на объект global
* Если код будет выполняться в браузере - то ключевое слово this будет ссылаться на объект Window
* https://www.youtube.com/watch?v=qZDjK5BqLbM&list=PLwHvxJae2LazDrHm6ayqLKz6jszEn7ArQ&index=3
*
* В целом - контекст это то, на что будет ссылаться ключевое слово this если оно использовано в теле разных функций
*
* В JS функция является подвидом объекта.
* Поэтому, когда объявляется функция, она автоматически наследуется от некого базового объекта - FUNCTION PROTOTYPE
* Methods call, apply & bind являются методами этого базового объекта FUNCTION PROTOTYPE - это позволяет вызывать их на любой функции просто используя точку.
*
* Методы call & apply позволяют непосредственно выполнить функцию с определенным контекстом и параметрами
* Метод bind позволяет связать функцию с определенным контекстом и параметрами для того, чтоб выполнить позже
* */


// ------- Example I - execution this in browser -------

// console.log(this); // undefined - в VS Code
// console.log(this); // undefined - в IntellijIDEA
// console.log(this); // Window - в консоли браузера

// console.log("Content zone height is "+this.innerHeight); // Content area height is 594
// console.log("Content zone width is "+this.innerWidth); // Content area width is 1366


function getContentWidth () {
  return this.innerWidth;
}

// console.log("Content zone width is "+getContentWidth()); // Content area width is 1366


// ------- Example II - how work this -------
const person1 = {
  name: "Dolly",
};

function sayHello () {
    return "Hello, " + this.name;
}

// Указываем, что у объекта person будет метод sayHello, который будет соответствовать глобальной функции sayHello
person1.sayHello = sayHello;
// console.log(person1.sayHello()); // Hello, Dolly


/*
* Методы в JS необязательно принадлежать какому-то объекту.
* Поэтому, после объявления функции, мы можем указать, какому объекту, или объектам она будет принадлежать, это называется - установка контекста.
* */

const person2 = {
    name: "Bob",

    sayHello() {
        return "Hello, " + this.name;
    }
};

const person3 = {
    name: "Forstmann",

    sayHello() {
        return "Hello, " + this.name;
    }
};


const anotherPerson = {
  name: "Gabriella"
};

// anotherPerson.sayHello = person1.sayHello;
// console.log('anotherPerson', anotherPerson.sayHello()); // Hello, Gabriella

// console.log('person1', person1.sayHello()); // Hello, Dolly
// console.log('person2.1', person2.sayHello()); // Hello, Bob
// console.log('person2.2', person2.sayHello.call(anotherPerson)); // Hello, Gabriella
// console.log('person3', person3.sayHello.apply(anotherPerson, [])); // Hello, Gabriella




const employee1 = {
  name: "Hanna",
  position: "Project manager",
  salary: 1000
};


const employee2 = {
  name: "Bill",
  position: "Junior developer",
  salary: 800
};

// Global function promote
function promote (newPosition, salaryRise) {
  this.position = newPosition;
  this.salary += salaryRise;

  return this.name+" is "+this.position+" and earns "+this.salary
}

/*
* На global function promote вызываем метод call и первым параметром передаем в нее новый контекст выполнения
* То, что будет подставлятся вместо ключевого слова this при выполнении этой функции
* */

const promotePMcall = promote.call(employee1, "Department head", 500);
const promotePMapply = promote.apply(employee1, ["Department head", 500]);
// console.log('promote using call:', promotePMcall);
// console.log('promote using apply:', promotePMapply);

const promoteMDcall = promote.call(employee2, "Middle developer", 300);
const promoteMDapply = promote.apply(employee2, ["Middle developer", 300]);
// console.log('promote using apply:', promoteMDcall);
// console.log('promote using apply:', promoteMDapply);

const promotePMbind = promote.bind(employee1, "Department head", 500);
const promoteMDbind = promote.bind(employee2, "Middle developer", 300);
// console.log('promote using bind:', promotePMbind());
// console.log('promote using bind:', promoteMDbind());


// ============ this. - htmlAcademy ============
/*
* this = контекст
* Контекст - то окружение, в котором выполняется функция.
* this - определяется во время вызова функции, а во время написания функции, нам еще не известно чему равно this.
* Не важно, как функция описана, где она расположена, но значение this определяется в момент ее запуска.
* Сам this запишется только в тот момент, когда функцию будут вызывать.
* Если некая функция вызывается не в контексте какого-то объекта, а просто сама по себе то:
*   - в строгом режиме this = undefined
*   - не в строгом режиме = глобальному объекту window
*   - в node (not browser) = глобальному объекту global
*
* Контекст в значении undefined - не интересен, это не то, для чего придумали this
* Интересно, когда this = какому-то объекту. this ровняется какому-то объекту, если функция, внутри которой есть
*  this является методом какого-то объекта и исполняется в его контексте.
* This определяется динамически в момент вызова функции / метода
*
* this в контексте вызова очень важна, когда мы хотим получить разные значения вызвал одну и ту же функцию
* Можно предположить, что если функция (метод) объявлен внутри какого-то объекта, то this будет ссылаться на этот
*  объект, но этот не так, this определяется в момент исполнения метода. У какого объекта мы this вызываем на тот
*  объект this и будет ссылаться.
*
* ARROW FUNCTION
* Если в качестве метода использовать стрелочную функцию, то значение this будет определяться по другому.
* У стрелочной функции нет собственного контекста. Контекст стрелочной функции ссылается на контекст родительской
*  функции.
*
*
* */

// ------- Example 1.1 - how it work -------
const whoAm = function () {
  console.log(`My name is: ${this.firstName} ${this.lastName}`);
  console.log(this);
}

const guitarPlayer = {
  firstName: 'Curt',
  lastName: 'Cobain',
  whoAm,
}

const anotherGuitarPlayer = {
  firstName: 'Richie',
  lastName: 'Sambora',
  whoAm,
}

// guitarPlayer.whoAm();
// anotherGuitarPlayer.whoAm();


// ------- Example 1.2 - this: depend on how call function -------
const europeCar = {
  name: 'Mercedes',
  color: 'white',
  country: 'Germany',
  whoAm: function () {
    console.log(`I was made in ${this.country}, my name is: ${this.name} and my color is: ${this.color}!`)
  }
}

const asianCar = {
  name: 'Toyota',
  color: 'red',
  country: 'Japan',
  whoAm: europeCar.whoAm,
}

// europeCar.whoAm();
// asianCar.whoAm();


// ------- Example 1.3 - this in arrow function -------
const usaCar = {
  name: 'Ford',
  color: 'gray',
  country: 'USA',
  whoAm: () => console.log(`I was made in ${this.country}, my name is: ${this.name} and my color is: ${this.color}!`)

}

const italianCar = {
  name: 'Maserati',
  color: 'blue',
  country: 'Italy',
  whoAm: usaCar.whoAm,
}

// usaCar.whoAm();
// italianCar.whoAm();


// ------- Example 1.4 - this in arrow function using closure -------
const franceCar = {
  name: 'Peugeot',
  color: 'yellow',
  country: 'France',
  whoAm: () => console.log(`I was made in ${franceCar.country}, my name is: ${franceCar.name} and my color is: ${franceCar.color}!`)

}

const swedishCar = {
  name: 'Volvo',
  color: 'brown',
  country: 'Swiss',
  whoAm: franceCar.whoAm,
}

// franceCar.whoAm();
// swedishCar.whoAm();






/**
|--------------------------------------------------
  === <<<---  TASK - THIS --->>>  ===
#1
Создать объект с розничной ценой и количеством продуктов.
Этот объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов)

#2
Создать объект из предыдущей задачи.
Создать второй объект, который описывает количество деталей и цену за одну деталь.
Для второго объекта нужно узнать общую стоимость всех деталей, но нельзя создавать новые функции и методы.
Для этого “позаимствуйте” метод из предыдущего объекта.

|--------------------------------------------------
*/

// // #1
// let product1 = {
//   price: 40,
//   counts: 20,
//   getTotalPrice() {
//     return this.price * this.counts;
//   },
// };

// console.log(product1.getTotalPrice()); // 800


// // #2
// let product2 = {
//   price: 100,
//   counts: 12,
// };

// const totalPriceProduct2 = product1.getTotalPrice.call(product2);
// console.log(totalPriceProduct2); // 1200

// console.log(product1.getTotalPrice.apply(product2));


/**
|--------------------------------------------------
  === <<<---  TASK  --->>>  ===
Даны объект и функция:
let sizes = {width: 5, height: 10},
getSquare = function () {return this.width * this.height};
Не изменяя функцию или объект, получить результат функции
getSquare для объекта sizes

|--------------------------------------------------
*/

// let sizes = {
//   width: 5,
//   height: 10
// },

// getSquare = function () {
//   return this.width * this.height
// };

// console.log(getSquare.call(sizes)); // 50
// console.log(getSquare.apply(sizes)); // 50


/**
|--------------------------------------------------
  === <<<---  TASK this.bind --->>>  ===
let element = {
    height: 25,
    getHeight: function () {return this.height;}
};

let getElementHeight = element.getHeight;
getElementHeight(); // undefined

Измените функцию getElementHeight таким образом, чтобы можно
было вызвать getElementHeight() и получить 25.
|--------------------------------------------------
*/

// let element = {
//   height: 25,
//   getHeight: function () {
//     return this.height;
//   }
// };

// let getElementHeight = element.getHeight.bind(element);
// console.log(getElementHeight()); // 25


// ------- Example I - THIS in FUNCTION -------
    /*
    * Когда создается функция с помощью ключевого слова function,
    * то this которая находиться внутри ключевого слова function
    * будет ссылаться именно на контекст этой функции
    * */
const Muhtar = {
    name: 'Keks',
    friends: ['Shakik', 'Barsik', 'Sirko', 'Bim'],
    showFriends: function () {
        this.friends.forEach((name) => {
            console.info(`${this.name} friends with ${name}`);
        });
    }
};

// Muhtar.showFriends();


// ------- Example II - THIS in ARROW FUNCTION -------
/*
* У стрелочной функции нет своего собственного контекста
* this - ссылается на контекст родителя
* в arrow function контекст берется из замыкания
*
* Conclusion - this - window
* In window not property friends and mean undefined
* And in undefined not forEach method
* */
const Roy = {
    name: 'Keks',
    friends: ['Shakik', 'Barsik', 'Sirko', 'Bim'],
    showFriends: () => {
        this.friends.forEach((name) => {
            console.info(`${this.name} friends with ${name}`);
        });
    }
};

// Roy.showFriends(); // Cannot read properties of undefined (reading 'friends')



// ------- Example II - THIS in ARROW FUNCTION -------
const checkThisOut = () => console.log(this);
// checkThisOut();



// ------- Example III - CHANGE CONTEXT IN FUNCTION -------
const showThisFunction = function () { console.log(this); }
// showThisFunction();

const bindedThisInFunction = showThisFunction.bind({name: 'My function context'});
// bindedThisInFunction();

const myObject1 = {
    callMethod: showThisFunction
}

// myObject1.callMethod();



// ------- Example IV - CHANGE CONTEXT IN ARROW FUNCTION -------
const showThisArrowFunction = () => console.log(this);
// showThisArrowFunction();

const bindedThisInArrowFunction = showThisFunction.bind({name: 'My arrow function context'});
// bindedThisInArrowFunction();

const myObject2 = {
    callMethod: bindedThisInArrowFunction
}

// myObject2.callMethod();




// ======= THIS - КОНТЕКСТ ИСПОЛНЕНИЯ =======

/**
 * Во время вызова этого метода, this будет ссылаться на тот объект, который вызвал функцию!
 * Кто вызвал функцию, на тот объект this и ссылается во время ее вызова.
 * Ключевое слово this получает значение не во время объявления функции, а во время вызова.
 * this определяется не местом объявления, а местом вызова.
 * this есть в любых функциях, кроме стрелок.
 *
 * Проблема, когда метод объекта передаем как callback, то у нее теряется контекст.
 * THIS in arrow functions
 * Стрелочные функции были созданы для того, чтобы упростить передачу контекста на вложенные уровни. В отличии от обычных функций, контекст стрелки - называется лексический контекст, то есть это буквально сслыка на то лексическое окружение, в котором функция была создана.
 * В обычных функциях контекст определяется тем, как вызвана функция, а в стрелочных функциях this определяется тем местом, где она была создана.
 *
 *
 * CALL APPLY & BIND
 * call & apply - это методы функции, которые позволяют привязать контекст и вызвать функцию с этим контекстом здесь и сейчас.
 * bind - это метод функции, который позволяет сохранить функцию с каким-то контекстом для ее вызова в будущем.
 */

// -------------- Example 1.1 --------------
const product1 = {
  label: 'Adidas',
  showLabel () {
    console.log(product1.label);
  },
};

// product1.showLabel();


// -------------- Example 1.2 --------------
const product2 = {
  label: 'Adidas',
  showLabel () {
    console.log(this); // {label: "Adidas", showLabel: ƒ}
    console.log(this.label); // Adidas
  },
};

// product2.showLabel();



// -------------- Example 1.3 --------------
const fn = () => {
  console.log(this); // window
};

// fn();



//  =================================================================================================
/*
* WHAT WILL CONSOLE LOG?
* */

// ------- Case 1 -------
(function () {
  // console.log(this); // window
})();


// ------- Case 2 -------
const coffee1 = {
  strong: true,
  info: function() {
    // console.log(this.strong); // true
  }
}

coffee1.info();


// ------- Case 3 -------
const coffee2 = {
  strong: true,
  info() {
    // console.log(this.strong); // true
  }
}

coffee2.info();


// ------- Case 4 -------
const coffee3 = {
  strong: true,
  info: () => {
    // console.log(this.strong); // window
  }
};

coffee3.info();


// ------- Case 5 -------
const coffee4 = {
  strong: true,
  info() {
    setTimeout(function() {
      // console.log(this.strong); // window - because the function creates its own scope and it does not know that it is declared inside the object
    }, 0)
  },
};

coffee4.info();


// ------- Case 6 -------
const coffee5 = {
  strong: true,
  info() {
    setTimeout(() => {
      // console.log(this.strong); // true
    }, 0)
  },
};

coffee5.info();

// ------- Case 7 -------
function Coffee() {
  this.strong = true;

  return this;
}

const coffee6 = new Coffee()
// console.log(coffee6.strong); // true

// ------- Case 8 -------
function Maccoffee() {
  this.strong = true;

  return {};
}

const coffee7 = new Maccoffee()
// console.log(coffee7); // {}
// console.log(coffee7.strong); // undefined





