"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// ------- UNION -------
const arr = ['sdf', 1];
function logId(id) {
    if (typeof id === 'string') {
        // do something as with string
        console.log(id);
    }
    else if (typeof id === 'number') {
        // do something as with number
        console.log(id);
    }
    else {
        // do something as with boolean
        console.log(id);
    }
}
logId(1);
logId('sdf');
logId(true);
function logError(err) {
    if (Array.isArray(err)) {
        console.log(err);
    }
    else {
        console.log(err);
    }
}
function logObject(obj) {
    if ('a' in obj) {
        console.log(obj.a);
    }
    else {
        console.log(obj.b);
    }
}
function logMultipleIds(a, b) {
    if (a === b) {
        // then we can work as a string
    }
    else {
        // otherwise, as with a number
        console.log(a);
    }
}
// ------- LITERAL TYPES -------
function fetchWithAuth(url, method) {
    return 1;
}
fetchWithAuth('s', 'get');
// fetchWithAuth('s', 's'); // Argument of type '"s"' is not assignable to parameter of type '"post" | "get"'.
// let method = 'post';
// fetchWithAuth('s', method); // Argument of type 'string' is not assignable to parameter of type '"post" | "get"'.
// const method = 'post';
// fetchWithAuth('s', method); // no errors if we use const
let method = 'post';
fetchWithAuth('s', method); // use as ...
function fetchWithAuth2(url, method) {
    return 1;
}
const user = {
    name: 'asd',
    age: 33,
    skills: ['1', '2']
};
const user2 = {
    id: 1,
    name: 'asd',
    age: 33,
    skills: ['1', '2']
};
const user3 = {
    name: 'asd',
    age: 33,
    skills: ['1', '2'],
};
const UserWithRole2 = {
    name: 'asd',
    age: 33,
    skills: ['1', '2'],
    roleId: 1,
    createdAt: new Date()
};
const UserWithRole3 = {
    name: 'asd',
    age: 33,
    skills: ['1', '2'],
    roleId: 1
};
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["SUCCESS"] = "success";
    PaymentStatus["FAILED"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
// ------- VOID -------
// тип void - обозначает, что функция ничего не возвращает
function logId2(id) {
    console.log(id);
}
const a2 = logId2(1);
function multiply(f, s) {
    if (!s) {
        return f * f;
    }
    else {
        return f * s;
    }
}
// ------- UNKNOWN -------
// тип unknown - обозначает, что нам не известно, что у нас лежит в переменной
let input;
input = 3;
input = ['ab', 'ac'];
// let res: string = input; // Type 'unknown' is not assignable to type 'string'.
function run(i) {
    if (typeof i == 'number') {
        i++;
    }
    else {
        i; // продолжает быть типом unknown нет сужения, пока мы явно не определим
    }
}
run(input);
// case, где можно явно столкнуться с unknown - try catch конструкция
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fetch('');
        }
        catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
        }
    });
}
function getDataForce() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fetch('');
        }
        catch (error) {
            const e = error;
            console.log(error.message);
        }
    });
}
// ------- NEVER -------
function generateError(message) {
    throw new Error();
}
function dumpError() {
    while (true) { }
}
function result() {
    return result();
}
function processAction(action) {
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
            const _ = action;
            throw new Error('not such action');
    }
}
function isString(x) {
    if (typeof x === 'string') {
        return true;
    }
    else if (typeof x === 'number') {
        return false;
    }
    generateError('abcd');
}
// ------- NULL -------
// тип null - это явно заданный неопределенный объект, тоесть объекта нет.
// usage "strictNullChecks": true | false - tsconfig.json
const n = null;
const n1 = null;
function getUser() {
    if (Math.random() > 0.5) {
        return null;
    }
    else {
        return {
            name: 'Ivon'
        };
    }
}
const someUser = getUser();
if (someUser) {
    const currentUser = someUser.name;
}
