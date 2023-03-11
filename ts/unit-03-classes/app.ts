
// ------- CREATE CLASS -------

 class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

 }
    const user = new User('Vasyl');
    console.log('user');
    user.name = 'Pieter';
    console.log(user);

class Admin {
    role!: number;
}

const admin = new Admin();
admin.role = 1;


// ------- METHODS -------

enum IPaymentStatus {
    Holded,
    Processed,
    Reversed
}

class Payment {
    id: number;
    status: IPaymentStatus;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: number) {
        this.id = id;
        this.createdAt = new Date();
        this.status = IPaymentStatus.Holded;
    }

    getPaymentLifeTime(): number {
        return new Date().getTime() - this.createdAt.getTime();
    }

    unholdPayment(): void {
        if (this.status == IPaymentStatus.Processed) {
            throw new Error('Платёж не может быть возвращен!')
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
    _login: string;
    password: string;

    set login(l: string) {
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



// ------- EXTENDS -------
type PaymentStatus = 'new' | 'paid';

class Payment2 {
    id: number;
    status: PaymentStatus = 'new';

    constructor(id: number) {
        this.id = id;
    }

    pay() {
        this.status = 'paid';
    }
}

class PersistedPayment extends Payment2 {
    databaseId: number;
    paidAt: Date;

    constructor() {
        const id = Math.random();
        super(id);
    }

    save() {
        // Save to DataBase
    }

    override pay(date?: Date) {
        super.pay();
        if (date) {
            this.paidAt = date;
        }
    }

}

new PersistedPayment()




// ------- КОМПОЗИЦИЯ ПРОТИВ НАСЛЕДОВАНИЯ -------

class Users extends Array<User> {
    searchByName(name: string) {
        return this.filter(u => u.name === name);
    }

    override toString(): string {
        return this.map(u => u.name).join(', ');
    }
}

const users3 = new Users();
users3.push(new User('Vasyl'));
users3.push(new User('Rik'));
console.log(users3.toString());

// Example I
class UserList {
    users: User[];

    push(u: User) {
        this.users.push(u);
    }
}


// Example II
class Payment3 {
    date: Date;
}

class UserWithPayment extends Payment3 {
    name: string;
}

class UserWithPayment2 {
    user: User;
    payment: Payment3;

    constructor(user: User, payment: Payment3) {
        this.payment = payment;
        this.user = user;
    }
}



// ------- ВИДИМОСТЬ СВОЙСТВ -------

class Vehicle {
    public make: string;
    private damages: string[];
    private _model: string;
    protected run: number;
    #price: number; // private from JS

    set model(m: string) {
        this._model = m;
        this.#price = 100;
    }

    addDamage(damage: string) {
        this.damages.push(damage);
    }

    isPriceEqual(v: Vehicle) {
        return this.#price === v.#price; // has access for equal
    }
}

class EuroTruck extends Vehicle {
    setDamage() {
        //
    }

    setRun(km: number) {
        this.run = km / 0.62;
        // this.damages - error
        // this.#price = 100; - error
    }
}

new Vehicle()



// ------- THIS -------
class Payment4 {
    private date: Date = new Date();

    getDate(this: Payment4) {
        return this.date;
    }

    getDateArrow = () => {
        return this.date;
    }
}

const p = new Payment4();

const user4 = {
    id: 1,
    paymentDate: p.getDate.bind(p),
    paymentDateArrow: p.getDateArrow
}

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
abstract class Controller {
    abstract handle(req: any): void;

    handleWithLogs(req: any) {
        console.log('Start');
        this.handle(req);
        console.log('End');
    }
}

class UserController extends Controller {
    handle(req: any): void {
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
* К нему необходимо сделать реальный класс, который бы имел метод logWithDate, выводящий сначала дату, а потом заданное сообщение.
* */

abstract class Logger {
    abstract log(message: string): void;

    printDate(date: Date) {
        this.log(date.toString());
    }
}

class MyLogger extends Logger {
    log(message: string): void {
        console.log(message);
    }

    logWithDate(message: string) {
        this.printDate(new Date());
        this.log(message);
    }
}

const logger = new MyLogger();
logger.logWithDate('It is my message');











