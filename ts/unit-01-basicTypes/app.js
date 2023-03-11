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
const a = 1;
let revenue = 1000;
let bonus = 500;
let c = 'sdf';
let d = true;
let res = revenue + bonus;
console.log(res);
// ------- FUNCTIONS -------
function getFullName(firstName, surname) {
    return `${firstName} ${surname}`;
}
console.log(getFullName('Valeriy', 'Zaluzhnyy'));
const getFullNameArrow = (firstName, surname) => `${firstName} ${surname}`;
console.log(getFullNameArrow('Dmytro', 'Kuleba'));
// Task - нужно типизировать функцию
var QuestionStatus;
(function (QuestionStatus) {
    QuestionStatus["Published"] = "published";
    QuestionStatus["Draft"] = "draft";
    QuestionStatus["Deleted"] = "deleted";
})(QuestionStatus || (QuestionStatus = {}));
function getFlags(req) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch('/fags', {
            method: 'POST',
            body: JSON.stringify(req)
        });
        const data = yield res.json();
        return data;
    });
}
// ------- OBJECT -------
function getFullNameObj(userEntity) {
    return `${userEntity.firstName} ${userEntity.surname}`;
}
const user = {
    firstName: 'Valeriy',
    surname: 'Zaluzhnyy',
    city: 'Kyiv',
    age: 49,
    skills: {
        dev: true,
        devops: true
    }
};
console.log(getFullNameObj(user));
// ------- Типизируем объект -------
let info = {
    "officeId": 45,
    "isOpened": false,
    "contacts": {
        "phone": "+123456789",
        "email": "mybox@gmail.com",
        "address": {
            "city": "Kyiv"
        }
    }
};
// ------- ARRAY -------
const skills = ['Dev', 'DevOps', 'Qa', 'Bi'];
const skills2 = ['Dev', 'DevOps', 1];
for (const skill of skills) {
    console.log(skill.toUpperCase());
}
const resultArray = skills
    .filter((s) => s !== 'DevOps')
    .map(s => s + '! ')
    .reduce((a, b) => a + b);
console.log(resultArray);
// ------- TUPLES -------
const skills3 = [1, 'Dev'];
const id = skills3[0];
const skillName = skills[1];
skills3.push('PM');
skills3.pop();
const [id2, skillName2] = skills3;
// valid array
const someArray2 = [1, 'sdf', true, true, false];
// valid array too
const someArray3 = [1, 'sdf'];
// ------- READONLY -------
let a1 = 5;
a1 = 6;
// const b1 = 5;
// b1 = 6;
const skills4 = [1, 'Dev'];
// skills4[0] = 2;
const skills5 = ['Dev', 'DevOps'];
// skills5[0] = '';
// it's array of string too
const skills6 = ['Dev', 'DevOps'];
// it's array of string too
const skills7 = ['Dev', 'DevOps'];
// Property 'push' does not exist on type 'readonly string[]'.
// skills7.push('PM');
// ------- ENUMS -------
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 1] = "ADMIN";
    Roles[Roles["TECHADMIN"] = 2] = "TECHADMIN";
    Roles[Roles["FINANCEADMIN"] = 3] = "FINANCEADMIN";
    Roles[Roles["USER"] = 4] = "USER";
})(Roles || (Roles = {}));
var StatusCodeNumber;
(function (StatusCodeNumber) {
    StatusCodeNumber[StatusCodeNumber["SUCCESS"] = 1] = "SUCCESS";
    StatusCodeNumber[StatusCodeNumber["IN_PROCESS"] = 3] = "IN_PROCESS";
    StatusCodeNumber[StatusCodeNumber["FAILED"] = 10] = "FAILED";
})(StatusCodeNumber || (StatusCodeNumber = {}));
var StatusCodeString;
(function (StatusCodeString) {
    StatusCodeString["SUCCESS"] = "s";
    StatusCodeString["IN_PROCESS"] = "p";
    StatusCodeString["FAILED"] = "f";
})(StatusCodeString || (StatusCodeString = {}));
const output = {
    message: 'Платеж успешен',
    statusCode: 1,
};
// числовой enum
// 1 - success,
// 3 - in process,
// 10 - canceled
// строковый enum
// 's' - success,
// 'p' - in process,
// 'f' - canceled
if (output.statusCode === StatusCodeNumber.SUCCESS) {
    // do something
}
const Output2 = 2 /* someRoles.USER */;
