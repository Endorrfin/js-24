"use strict";
// ------- CREATE CLASS -------
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Vehicle_price;
class User {
    constructor(name) {
        this.name = name;
    }
}
const user = new User('Vasyl');
console.log('user');
user.name = 'Pieter';
console.log(user);
class Admin {
}
const admin = new Admin();
admin.role = 1;
// ------- METHODS -------
var IPaymentStatus;
(function (IPaymentStatus) {
    IPaymentStatus[IPaymentStatus["Holded"] = 0] = "Holded";
    IPaymentStatus[IPaymentStatus["Processed"] = 1] = "Processed";
    IPaymentStatus[IPaymentStatus["Reversed"] = 2] = "Reversed";
})(IPaymentStatus || (IPaymentStatus = {}));
class Payment {
    constructor(id) {
        this.id = id;
        this.createdAt = new Date();
        this.status = IPaymentStatus.Holded;
    }
    getPaymentLifeTime() {
        return new Date().getTime() - this.createdAt.getTime();
    }
    unholdPayment() {
        if (this.status == IPaymentStatus.Processed) {
            throw new Error('Платёж не может быть возвращен!');
        }
        this.status = IPaymentStatus.Reversed;
        this.updatedAt = new Date();
    }
}
const payment = new Payment(1);
payment.unholdPayment();
console.log(payment);
const time = payment.getPaymentLifeTime();
console.log(time);
// ------- GETTER & SETTER -------
class User2 {
    set login(l) {
        this._login = 'user2-' + l;
    }
    get login() {
        return 'no_login';
    }
}
const user2 = new User2();
user2.login = 'myLogin';
console.log(user2);
console.log(user2.login);
class Payment2 {
    constructor(id) {
        this.status = 'new';
        this.id = id;
    }
    pay() {
        this.status = 'paid';
    }
}
class PersistedPayment extends Payment2 {
    constructor() {
        const id = Math.random();
        super(id);
    }
    save() {
        // Save to DataBase
    }
    pay(date) {
        super.pay();
        if (date) {
            this.paidAt = date;
        }
    }
}
new PersistedPayment();
// ------- КОМПОЗИЦИЯ ПРОТИВ НАСЛЕДОВАНИЯ -------
class Users extends Array {
    searchByName(name) {
        return this.filter(u => u.name === name);
    }
    toString() {
        return this.map(u => u.name).join(', ');
    }
}
const users3 = new Users();
users3.push(new User('Vasyl'));
users3.push(new User('Rik'));
console.log(users3.toString());
// Example I
class UserList {
    push(u) {
        this.users.push(u);
    }
}
// Example II
class Payment3 {
}
class UserWithPayment extends Payment3 {
}
class UserWithPayment2 {
    constructor(user, payment) {
        this.payment = payment;
        this.user = user;
    }
}
// ------- ВИДИМОСТЬ СВОЙСТВ -------
class Vehicle {
    constructor() {
        _Vehicle_price.set(this, void 0); // private from JS
    }
    set model(m) {
        this._model = m;
        __classPrivateFieldSet(this, _Vehicle_price, 100, "f");
    }
    addDamage(damage) {
        this.damages.push(damage);
    }
    isPriceEqual(v) {
        return __classPrivateFieldGet(this, _Vehicle_price, "f") === __classPrivateFieldGet(v, _Vehicle_price, "f"); // has access for equal
    }
}
_Vehicle_price = new WeakMap();
class EuroTruck extends Vehicle {
    setDamage() {
        //
    }
    setRun(km) {
        this.run = km / 0.62;
        // this.damages - error
        // this.#price = 100; - error
    }
}
new Vehicle();
// ------- THIS -------
class Payment4 {
    constructor() {
        this.date = new Date();
        this.getDateArrow = () => {
            return this.date;
        };
    }
    getDate() {
        return this.date;
    }
}
const p = new Payment4();
const user4 = {
    id: 1,
    paymentDate: p.getDate.bind(p),
    paymentDateArrow: p.getDateArrow
};
console.log(p.getDate());
console.log(user4.paymentDate());
console.log(user4.paymentDateArrow());
class PaymentPersistent extends Payment4 {
    same() {
        return super.getDateArrow();
    }
}
// console.log(new PaymentPersistent().save())
// ------- ABSTRACT CLASS -------
class Controller {
    handleWithLogs(req) {
        console.log('Start');
        this.handle(req);
        console.log('End');
    }
}
class UserController extends Controller {
    handle(req) {
        console.log(req);
    }
}
// new Controller() // Cannot create an instance of an abstract class.
const c = new UserController();
c.handleWithLogs('Request');
// Exercise II
/*
* Необходимо реализовать абстрактный класс Logger с 2-мя методами
* абстрактным - log(message): void
* printDate - выводящий в log дату
* К нему необходимо сделать реальный класс, который бы имел методвЖ logWithDate, выводящий сначала дату, а потом
*  заданное сообщение.*
* */
class Logger {
    printDate(date) {
        this.log(date.toString());
    }
}
class MyLogger extends Logger {
    log(message) {
        console.log(message);
    }
    logWithDate(message) {
        this.printDate(new Date());
        this.log(message);
    }
}
const logger = new MyLogger();
logger.logWithDate('It is my message');
