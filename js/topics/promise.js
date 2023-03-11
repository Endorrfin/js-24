// ============ PROMISE (ES6) ============

// ------- Example I -------
const promise1 = new Promise((resolve, reject) => {
    if (true) {
        resolve('promise completed!');
    } else {
        reject();
    }
});

// promise1
//     .then(data => console.log(data))
//     .catch(() => console.log('error'));


// ------- Example II -------
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true) {
            resolve('promise completed!');
        } else {
            reject();
        }
    }, 1000);
});

// promise2
//     .then(data => console.log(data))
//     .catch(() => console.log('error'));


// ------- Example III -------
/*
* Если внутри promise будет добавлен throw, то promise сразу вернет ошибку, которую можно будет отловить catch.
* Тоесть код написан после throw выполнен не будет.
* */

const promise3 = new Promise((resolve, reject) => {
    // throw new Error('some error...');
    setTimeout(() => {
        if (true) {
            resolve('promise completed!');
        } else {
            reject();
        }
    }, 1000);
});

// promise3
//     .then(data => console.log(data))
//     .catch(error => console.log(error));


// ------- Example IV -------
function fetchUsers ()  {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => console.log('OUTPUT USERS', data))
        .catch(() => console.log('some error...'));
}

// fetchUsers();



// ------- Example V -------
function fetchPosts () {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log('OUTPUT POSTS', data))
        .catch(() => console.log('some error...'));
}

// fetchPosts();


// ------- Example VI -------
const postsPromise = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' },
    { title: 'Post Three', body: 'This is post three' },
    { title: 'Post Four', body: 'This is post four' },
    { title: 'Post Five', body: 'This is post five' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        postsPromise.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });

        document.body.innerHTML = output;
    }, 1000);
}

// getPosts();


function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            postsPromise.push(post);

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}

// createPost({ title: 'Post Six', body: 'This is post six' })
//     .then(getPosts)
//     .catch(err => console.log(err));


// ------- Example VII - PROMISE ALL -------
const promise01 = Promise.resolve('Hello World');
const promise02 = 10;
const promise03 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));

const promise04 =
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json());

// Promise.all([promise01, promise02, promise03, promise04])
//     .then(values => console.log(values));


// ============ PROMISE TASK in Andersen ============
// Promise.reject('a')
//   .catch(p => p + 'b')
//   .catch(p => p + 'с')
//   .then(p => p + 'd')
//   .finally(p => p + 'e')
//   .then(p => console.log(p))


// ============ PROMISE TASK in Andersen ============
// Promise.resolve('Error')
// .then('12312321')
// .then((e) => {
//   console.log(e); // Error
//   throw new Error('Error again')
// })
// .catch('undefinde happen')
// .catch((e) => console.log(e)) // Error again => "Error again"
// .then((a) => Promise.reject(a + ' is'))
// .then((a) => a + ' not')
// .catch((a) => console.log(a + ' undefined')) // undefined is undefined

// function catchError(arg1) {
// return arg1 + ' happen';
// }



// ============ PROMISE - InSimpleWords ============
/*
* Promise - это объект, у него есть сслыка __proto__
* Promise - может в себе хранить 3 состояния и может хранить в себе неограниченное к-во значений, привязанных к этому промису.
* Понятия, как частично выполненное обещание в JS нет.
* Обещание из неопределенного состояния (pending) переводится всего лишь 1 раз либо reject либо fulfilled
* [[PromiseStatus]] - Cостояние статуса Promise бывает одним из: pending || fulfilled || rejected
* [[PromiseResult]] - Результат Promise - будет лежать результат // в Chrome [[PromiseValue]]
* [[PromiseFulfilledReactions]] - Реакции на Promise в состоянии удачи ([] складирует последствия выполненных обещаний)
* [[PromiseRejectReactions]] - Реакции на Promise в состоянии неудачи ([] складирует последствия выполненных обещаний)
* .promise.then() - вызывается через точку, значит then - это метод promise
* then - последствие выполненного обещания.
* Когда у нас Promise в состоянии pending, PromiseResult равен ничему.
* Важно не столько Promise - обещание, как его результат.
* Функции resolve & reject - это 2 механизма, чтобы перевести promise в состояние отличное от pending
* */

// 1. Пишем фукнкцию конструктор рождающую promise и сам объект promise
const promise11 = new Promise((function (resolve, reject) {
}))

// console.log(promise11);
// pending - состояние неопределенности, доно обещание что-то сделать.


// 2. Promise выполнен успешно
const promise12 = new Promise((function (resolve, reject) {
    resolve('success')
}))

// console.log(promise12);
// resolved - успешно выполненное обещание.


// ------- CASE I - Promise example-------
const arr = [6, 7, 8];

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

function imitationPromise () {
    const promise = new Promise(function (resolve, reject) {
        let num = +prompt(`загадайте число из приведенных ${arr}`);
        console.log("I'm thinking...");

        setTimeout(function (){
            let randomNumber = arr[randomInteger(0, 2)];
            if (num == randomNumber){
                console.log('Cool');
                resolve('Cool')
            } else {
                console.log('Ops;' + randomNumber);
                reject ('Ops')
            }
        }, 1000);
    });

    // console.log('imitationPromise', promise);
}

// imitationPromise();


// ------- CASE II - Promise example-------
function promiseAllExample () {
    const prom1 = Promise.resolve('123');
    const prom2 = Promise.resolve('error');
    const prom3 = Promise.resolve('some');
    Promise.all([prom1, prom2, prom3])
        .then(data => console.log(data))
        .catch(error => console.log(error));
}

// console.log('promiseAllExample', promiseAllExample());




// ------- Example I -------
const promise = new Promise ((resolve, reject) => {
    setTimeout (() => {
        resolve('Success');
    }, 1000)
});

// promise.then(data => console.log(data));

const delay = ms => new Promise (((resolve, reject) => {
    setTimeout(() => resolve(`Done! ${ms}`), ms)
}))

delay('Err')
    .then(data => delay(500))
    // .then(data => console.log(data))
    .catch(err => console.log(err))
// .finally(() => console.log('Выполнено !'))

async function asyncDelay() {
    try {
        const data = await delay(2000)
        // console.log(data)
    } catch (e) {
        console.log('Error')
    }
}
asyncDelay();

// Promise.all ([
//     delay(1000),
//     delay(500),
//     delay(2000)
// ]).then(data => console.log(data))
//
// Promise.race ([
//     delay(1000),
//     delay(500),
//     delay(2000)
// ]).then(data => console.log(data))




