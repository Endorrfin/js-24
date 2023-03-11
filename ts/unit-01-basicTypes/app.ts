
const a = 1;


let revenue: number = 1000;
let bonus: number = 500;
let c: string = 'sdf';
let d: boolean = true;

let res: number = revenue + bonus;
console.log(res);


// ------- FUNCTIONS -------
function getFullName (firstName: string, surname: string): string {
    return `${firstName} ${surname }`;
}

console.log(getFullName('Valeriy', 'Zaluzhnyy'));

const getFullNameArrow = (firstName: string, surname: string): string =>  `${firstName} ${surname }`;

console.log(getFullNameArrow('Dmytro', 'Kuleba'));

// Task - нужно типизировать функцию
enum QuestionStatus {
    Published = 'published',
    Draft = 'draft',
    Deleted = 'deleted',
}
// async function getFlags(req: {
//     topicId: number;
//     status?: QuestionStatus
// }): Promise<{
//     question: string;
//     answer: string;
//     tags: string[];
//     likes: number;
//     status: QuestionStatus;
// }[]> {
//     const res = await fetch('/fags', {
//         method: 'POST',
//         body: JSON.stringify(req)
//     });
//     const data = await res.json();
//     return data;
// }



// ------- OBJECT -------

function getFullNameObj (userEntity: {firstName: string, surname: string}): string {
    return `${userEntity.firstName} ${userEntity.surname }`;
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

let info: {
    officeId: number;
    isOpened: boolean;
    contacts: {
        phone: string;
        email: string;
        address: {
            city: string;
        }
    }
} = {
    "officeId": 45,
    "isOpened": false,
    "contacts": {
        "phone": "+123456789",
        "email": "mybox@gmail.com",
        "address": {
            "city": "Kyiv"
        }
    }
}


// ------- ARRAY -------
const skills: string[] = ['Dev', 'DevOps', 'Qa', 'Bi'];
const skills2: any[] = ['Dev', 'DevOps', 1];

for (const skill of skills) {
    console.log(skill.toUpperCase());
}

const resultArray = skills
    .filter((s: string) =>  s !== 'DevOps')
    .map(s => s + '! ')
    .reduce((a, b) => a + b);

console.log(resultArray);


// ------- TUPLES -------
const skills3: [number, string] = [1, 'Dev'];
const id = skills3[0];
const skillName = skills[1];

skills3.push('PM');
skills3.pop();

const [id2, skillName2] = skills3;

// valid array
const someArray2: [number, string, ...boolean[]] = [1, 'sdf', true, true, false];

// valid array too
const someArray3: [number, string, ...boolean[]] = [1, 'sdf'];


// ------- READONLY -------
let a1 = 5;
a1 = 6;

// const b1 = 5;
// b1 = 6;

const skills4: readonly [number, string] = [1, 'Dev'];
// skills4[0] = 2;

const skills5: readonly string[] = ['Dev', 'DevOps'];
// skills5[0] = '';

// it's array of string too
const skills6: Array<string> = ['Dev', 'DevOps'];

// it's array of string too
const skills7: ReadonlyArray<string> = ['Dev', 'DevOps'];
// Property 'push' does not exist on type 'readonly string[]'.
// skills7.push('PM');


// ------- ENUMS -------

enum Roles {
    ADMIN = 1,
    TECHADMIN = ADMIN + 1,
    FINANCEADMIN = TECHADMIN + 1,
    USER= FINANCEADMIN + 1
}

enum StatusCodeNumber {
    SUCCESS = 1,
    IN_PROCESS = 3,
    FAILED = 10
}

enum StatusCodeString {
    SUCCESS = 's',
    IN_PROCESS = 'p',
    FAILED = 'f'
}

const output = {
    message: 'Платеж успешен',
    statusCode: 1,
}

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

// Константные enum
const enum someRoles {
    ADMIN = 1,
    USER = 2
}

const Output2 = someRoles.USER;









