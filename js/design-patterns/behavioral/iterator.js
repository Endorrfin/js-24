
// ============ ITERATOR ============

/*
* Iterator - это поведенческий паттерн, который дает возможность последовательно обходить элементы составных объектов не раскрывая их внутреннее представление.
* Визуально это похоже на то, как плеер перебирает песни, когда мы нажимаем перемотки вперед и назад.
*
* Самая распространенная структура данных - это коллекция.
* Коллекция - это совокупность объектов, объеденненная по каким-то критериям и технияески структуры этих коллекций могут быть абсолютно разными.
* Они могут быть простыми, или линейными, либо они могут быть сложными и выглядеть как деревья. Однако, какая бы коллекция не была,
* рано или поздно может появиться необходимость обойти эту коллекцию. При чем как сама коллекция, так и механизм ее обхода могут меняться
* и тем не менее всегда должна быть возможность перебрать эту коллекцию поэлементно.
* Таким образом, ключевая идея паттерна заключается в том, чтобы вынести поведение обхода коллекции из самой коллекции в отдельный класс.
* Сам же класс содержит 2 ключевых метода - это next (перемещение на следующий элемент коллекции) и hasNext (метод проверки существования следующего элемента).
* В случае, если метод hasNext возвращает false перебор останавливается.тр
*
* Основное преимущество итератора - это умный перебор коллекции без раскрытия внутреннего представления элементов. Таким образом запрещается изменять что-то внутри объектов.
* Предоставляется инструмент доступа к объектам без возможности как-то повлиять на эти объекты.
* * */

// -------------- Example 1.1 block I --------------
class IteratorSimple {
    constructor(el) {
        this.index = 0;
        this.elements = el;
    }

    next() {
        return this.elements[this.index++];
    }

    hasNext() {
        return this.index < this.elements.length;
    }
};

// -------------- Example 1.1 block II --------------
const collection = new IteratorSimple(['Audi', 'BMW', 'Tesla', 'Mercedes']);

// while (collection.hasNext()) {
//     console.log(collection.next());
// };


// -------------- Example 2.1 block I --------------
class IteratorComplex {
    constructor(el) {
        this.index = 0;
        this.keys = Object.keys(el);
        this.elements = el;
    }

    next() {
        return this.elements[this.keys[this.index++]];
    }

    hasNext() {
        return this.index < this.keys.length;
    }
};


// -------------- Example 2.1 block II --------------
const autos = {
    audi: {model: 'Audi', color: 'yellow', price: '20000'},
    bmw: {model: 'BMW', color: 'black', price: '30000'},
    tesla: {model: 'Tesla', color: 'red', price: '40000'},
    mercedes: {model: 'Mercedes', color: 'white', price: '50000'},
};

const collectionComplex = new IteratorComplex(autos);

// while (collectionComplex.hasNext()) {
//     console.log(collectionComplex.next());
// };
