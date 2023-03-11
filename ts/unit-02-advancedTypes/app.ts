
// ------- UNION -------
const arr = ['sdf', 1];

function logId(id: string | number | boolean) {
    if (typeof id === 'string') {
        // do something as with string
        console.log(id);
    } else if (typeof id === 'number') {
        // do something as with number
        console.log(id);
    } else {
        // do something as with boolean
        console.log(id);
    }
}

logId(1);
logId('sdf');
logId(true);


function logError(err: string | string[]) {
    if (Array.isArray(err)) {
        console.log(err);
    } else {
        console.log(err);
    }
}


function logObject(obj: {a: number} | { b: number }) {
    if ('a' in obj) {
        console.log(obj.a);
    } else {
        console.log(obj.b);
    }
}


function logMultipleIds(a: string | number, b: string | boolean) {
    if (a === b) {
        // then we can work as a string
    } else {
        // otherwise, as with a number
        console.log(a);
    }
}


// ------- LITERAL TYPES -------
function fetchWithAuth(url: string, method: 'post' | 'get'): 1 | -1 {
    return 1;
}

fetchWithAuth('s', 'get');
// fetchWithAuth('s', 's'); // Argument of type '"s"' is not assignable to parameter of type '"post" | "get"'.

// let method = 'post';
// fetchWithAuth('s', method); // Argument of type 'string' is not assignable to parameter of type '"post" | "get"'.

// const method = 'post';
// fetchWithAuth('s', method); // no errors if we use const

let method = 'post';
fetchWithAuth('s', method as 'post'); // use as ...

// ------- TYPE ALIAS -------
type httpMethod = 'post' | 'get';
type coolString = string;

function fetchWithAuth2(url: string, method: httpMethod): 1 | -1 {
    return 1;
}

// Типизируем объект с помощью типа alias
type User = {
    name: string,
    age: number,
    skills: string[]
}

const user: User = {
    name: 'asd',
    age: 33,
    skills: ['1', '2']
}


// ------- INTERSECTION TYPES -------
type Role = {
    id: number;
    name: string;
}

type UserWithRole = User & Role;

const user2: UserWithRole = {
    id: 1,
    name: 'asd',
    age: 33,
    skills: ['1', '2']
}


// ------- INTERFACES -------
interface IUser {
    name: string,
    age: number,
    skills: string[]
}

interface  IRole {
    roleId: number;
}

interface IUserWithRole extends IUser, IRole {
    createdAt: Date;
}

interface IUserWithRole2 extends IUser {
    roleId: number;
}

interface IUserDictionary {
    // Эта запись обозначает, что у этого интерфейса может быть неограниченное число свойств, где ключем является
    // число в обязательном порядке, а значением в обязательном порядке определенный тип пользователя.
    [index: number]: IUser
}

type UserDictionary = {
    [index: number]: User
}


const user3: IUser = {
    name: 'asd',
    age: 33,
    skills: ['1', '2'],
}

const UserWithRole2: IUserWithRole = {
    name: 'asd',
    age: 33,
    skills: ['1', '2'],
    roleId: 1,
    createdAt: new Date()
}

const UserWithRole3: IUserWithRole2 = {
    name: 'asd',
    age: 33,
    skills: ['1', '2'],
    roleId: 1
}

// exercise
/*
Запрос в виде платежа
{
    "sum": 10000,
    "from": 2,
    "to": 4
}

// Ответ
{
    "status": "success",
    "dat": {
        "databaseId": 567,
        "sum": 10000,
        "from": 2,
        "to": 4
    }
},
{
    "status": "failed",
    "data": {
        "errorMessage": "not enough money",
        "errorCode": 4
    }
}
* */

interface IPayment {
    sum: number;
    from: number;
    to: number;
}

enum PaymentStatus {
    SUCCESS = 'success',
    FAILED = 'failed',
}

interface IPaymentRequest extends IPayment {}

interface IDataSuccess extends IPayment {
    databaseId: number;
}

interface IDataFailed extends IPayment {
    errorMessage: string;
    errorCode: number;
}

interface IResponseSuccess {
    status: PaymentStatus.SUCCESS;
    data: IDataSuccess;
}

interface IResponseFailed {
    status: PaymentStatus.FAILED;
    data: IDataFailed;
}


// ------- VOID -------
// тип void - обозначает, что функция ничего не возвращает
function logId2(id: string | number): void {
    console.log(id)
}

const a2 = logId2(1);

function multiply(f: number, s?: number): number | void {
    if (!s) {
        return f * f;
    } else {
        return f * s;
    }
}


// ------- UNKNOWN -------
// тип unknown - обозначает, что нам не известно, что у нас лежит в переменной
let input: unknown;

input = 3;
input = ['ab', 'ac'];

// let res: string = input; // Type 'unknown' is not assignable to type 'string'.

function run(i: unknown) {
    if (typeof i == 'number') {
        i++;
    } else {
        i // продолжает быть типом unknown нет сужения, пока мы явно не определим
    }
}

run(input);

// case, где можно явно столкнуться с unknown - try catch конструкция
async function getData() {
    try {
        await fetch('');
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}


async function getDataForce() {
    try {
        await fetch('');
    } catch (error) {
        const e = error as Error;
        // console.log(error.message)
    }
}

type U1 = unknown | number;
type I1 = unknown & string;


// ------- NEVER -------
function generateError(message: string): never {
    throw new Error();
}

function dumpError(): never {
    while (true) {}
}

function result(): never {
    return result();
}

// const n: never = null; //  Type 'null' is not assignable to type 'never'.
// const n: never = undefined; //  Type 'undefined' is not assignable to type 'never'.

// В чем польза и преимущество never?
// на компайл тайме помогает обеспечить, чтоб при добавлении нового тайпа paymentAction выдавалась реальная ошибка
type paymentAction = 'checkout' | 'refund' | 'reject';
function processAction(action: paymentAction) {
    switch (action) {
        case 'checkout':
            // do something
            break;
        case "refund":
            // do something
            break;
        case "reject":
            // do something
            break;
        default:
            const _: never = action;
            throw new Error ('not such action');
    }
}


function isString(x: string | number): boolean {
    if (typeof x === 'string') {
        return true;
    } else if (typeof x === 'number') {
        return false;
    }
    generateError('abcd');
}



// ------- NULL -------
// тип null - это явно заданный неопределенный объект, тоесть объекта нет.
// usage "strictNullChecks": true | false - tsconfig.json
const n: null = null;
const n1: any = null;
// const n2: number = null; // Type 'null' is not assignable to type 'number'.
// const n3: string = null; // Type 'null' is not assignable to type 'string'.
// const n4: boolean = null; // Type 'null' is not assignable to type 'boolean'.
// const n5: undefined = null; // Type 'null' is not assignable to type 'undefined'.

interface INewUser {
    name: string;
}

function getUser() {
    if (Math.random() > 0.5) {
        return null;
    } else {
        return {
            name: 'Ivon'
        } as INewUser
    }
}

const someUser = getUser();
if (someUser) {
    const currentUser = someUser.name;
}






