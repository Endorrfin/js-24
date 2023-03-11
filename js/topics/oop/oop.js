

// ============ OOP - inheritance ============

// ------- Example I - pseudo classical inheritance -------

class Car {
    constructor(carName) {
        this.name = carName;
    }

    getName () {
        return this.name;
    }
}


class GermanyCar extends Car {

    constructor (carName) {
        super(carName);

        this.speed = 280;
        this.color = 'white';
    }
}

const mercedes = new GermanyCar("Mercedes");
const bmw = new GermanyCar("BMW");

// console.log('class Mercedes -> ', 'name', mercedes.getName(), 'speed', mercedes.speed, 'color', mercedes.color);
// console.log('class BMW -> ', 'name', bmw.getName(), 'speed', bmw.speed, 'color', bmw.color);


// ------- Example II - functional inheritance -------
function Cat (catName) {
    let name = catName;

    this.getName = function () {
        return name;
    }
};


function BobCat (catName) {
    let name = catName;

    /*
    * Вызывая метод call на функции конструкторе класса Cat, мы первым параметром передаем переменную контекста
    * класса BobCat, фактически подменяем контекст класса Cat контекстом класса BobCat
    * */

    Cat.call(this, catName);
    this.getName = function () {
        return name;
    }

    this.weight = 30;
    this.color = 'black';
};

const david = new BobCat ('David');

// console.log('function david -> ', 'name', david.getName(), 'weight', david.weight, 'color', david.color);



// ------- Example III - prototypal inheritance -------
/*
* Каждый класс в JS имеет прототип
* Прототип - это что-то ссылки на класс родителя.
* Когда мы на экзепляре какого-либо класса обращаемся к свойству, или методу, то это свойство или метод в 1-ю
* очередь будет искаться в теле самого класса, что логично, если же его там не обнаружено, то это свойство или
* метод будет искаться в теле класса прототипа, если его не обнаружено и там, то это свойство или метод будет
* искаться у прототипа его прототипа и т. д.
* */

function Leon (leonName) {
    let name = leonName;

    this.getName = function () {
        return name;
    }
};


function HatchLeon () {

    this.weight = 240;
    this.color = 'orange';
};

/*
* В двух предыдущих примерах мы указывали имя непосредственно при создании класса, но при прототипном наследовании
*  мы должны создать экземпляр нашего родительского класса.
* Это принципиальное отличие прототипного наследования от декларативного, в том что прототипом какого-либо класса
*  является именно объект другого класса.
* */
const leon = new Leon ('Riki');

// Через свойство prototype указываем, что пототипом класса HatchLeon будет экземпляр класса Leon
HatchLeon.prototype = leon;

// Создаем экземпляр класса HatchLeon и он сможет обращаться к свойствам и методам класса Leon
const riki = new HatchLeon();

// console.log('prototype riki -> ', 'name', riki.getName(), 'weight', riki.weight, 'color', riki.color);



// ------- Example IV - There is prototypal style -> rewirite ES6 syntax -------
function Bike(model, color) {
    this.model = model;
    this.color = color;
}

Bike.prototype.getDetails = function() {
    return this.model + ' bike has ' + this.color + ' color!';
};

bikeProto = new Bike ('SUZUKI', 'orange');
// console.log(bikeProto.getDetails()); // SUZUKI bike has orange color!

// ----------------------------------
class MotoBike {
    constructor (model, color) {
        this.model = model;
        this.color = color;
    }

    getDetails () {
        return `${this.model} motobike has ${this.color} color!`;
    }
}

const bikeClass = new MotoBike('KAWASAKI', 'yellow');
// console.log(bikeClass.getDetails()); // KAWASAKI motobike has yellow color!














