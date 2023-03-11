/*
Есть ферма животных, у всех животных есть имена и возраст. Животные бывают разных типов: Кошки, Собаки, Коровы. 
У каждого животного могут быть дети. Если животное является родителем этих детей, в свою очередь глубина семейного древа может достигать N либо 0.
Опишите структуры данных для фермы животных и напишите функцию, которая делает подсчёт всех возрастов животных и выводит общий возраст для всей фермы.
*/

// !Родительский класс для всех животных
class Animal {
    constructor(name, age, childs = null) {
        this.name = name;
        this.age = age;
        this.childs = childs;
    }
}

// !Класс Cat - потомок класса Animal, имеет те же поля, что и Animal
class Cat extends Animal {
    constructor(name, age, childs = null) {
        super(name, age, childs);
    }
}

// !Класс Dog - потомок класса Animal, имеет те же поля, что и Animal
class Dog extends Animal {
    constructor(name, age, childs = null) {
        super(name, age, childs);
    }
}

// !Класс Cow - потомок класса Animal, имеет те же поля, что и Animal
class Cow extends Animal {
    constructor(name, age, childs = null) {
        super(name, age, childs);
    }
}

// !Рекурсивная функция для подсчета age обходит все дочерние элементы
function getAnimalsAge(animals) {
    let output = 0;

    if (animals.length > 0) {
        // !Применяем функцию reduce для получения общего age - https://learn.javascript.ru/array-iteration
        output += animals.reduce((acc, current) => {
            // !Сумма всех childs
            let count = 0;
            // !Если childs пустой, или его нет, тогда нет смысла пробегать по ним
            if (current.childs && current.childs.length > 0) {
                // !Применение рекурсии
                count += getAnimalsAge(current.childs);
            }
            // !Возвращаем сумму аккумулятора текущего животного, сумму age всех childs
            return acc + current.age + count
        }, 0);
    }

    return output;
}

// !Функция для получения опеределенного количества животных
function generateAnimals(type, count) {
    let output = [];

    for (let i = 0; i < count; i++) {
        let parameter = {
            name: `${type} ${i}`,
            age: i,
            childs: []
        };

        let item = null;

        switch (type) {
            case "Cat":
                item = new Cat(parameter.name, parameter.age);
                break;
            case "Dog":
                item = new Dog(parameter.name, parameter.age);
                break;
            case "Cow":
                item = new Cow(parameter.name, parameter.age);
                break;
        }

        if (item) {
            output.push(item);
        }
    }
    return output;
}

// !Добавление childs ко всем переданным животным
function addChildsTo(animals, count, type) {
    animals.forEach(animal => {
        if (!animal.childs) {
            animal.childs = [];
        }
        // !Важно, массив - ссылка, поэтому изменяя здесь его поля, поля изменяются глобально
        animal.childs = generateAnimals(type, count);
    });
}

let cats = generateAnimals("Cat", 5);
addChildsTo(cats, 10, "Cat");

let dogs = generateAnimals("Dog", 3);
addChildsTo(dogs, 3, "Dog");
// console.log('dogs', dogs);

let cows = generateAnimals("Cow", 7);
addChildsTo(cows, 1, "Cow")

// !Использование оператора Spread (ES6) - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Spread_syntax
let animals = [...cats, ...dogs, ...cows];
// console.log(getAnimalsAge(animals)); // 268