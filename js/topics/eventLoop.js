// source: https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
// video: https://www.youtube.com/watch?v=8aGhZQkoFbQ

// ------- Example I -------
const callSequence1 = () => {
    console.log('script start');

    setTimeout(function() {
        console.log('setTimeout 3');
    }, 1000);

    setTimeout(function() {
        console.log('setTimeout 2');
    }, 500);

    setTimeout(function() {
        console.log('setTimeout 1');
    }, 0);

    Promise.resolve().then(function() {
        console.log('promise 1');
    }).then(function() {
        console.log('promise 2');
    });

    console.log('script end');
}

// callSequence1();


// ------- Example II -------
const callSequence2 = () => {
    console.log('script start');

    setTimeout(function() {
        console.log('setTimeout');
    }, 0);

    Promise.resolve().then(function() {
        console.log('promise 1');
    }).then(function() {
        console.log('promise 2');
    }).then(function() {
        console.log('promise 3');
    });

    console.log('script finish');
}

// callSequence2();


// ------- Example III - В якій послідовності будуть виведені console.log? -------
const callSequence3 = () => {
    console.log(1);

    setTimeout(() => {
        console.log(2);
    });

    const promise1 = new Promise(resolve => {
        console.log(3);
        resolve(4);
    });


    const promise2 = new Promise(resolve => {
        console.log(5);
        resolve(6);
    });

    promise1.then(console.log);
    promise2.then(console.log);

    console.log(7);
}

// callSequence3();
// Result - 1, 3, 5, 7, 4, 6, 2



// Exercise I -  task
const third = (str => str + "Script.");
const second = () => third("Java ");

const First = (() => {
    let name = second();
    console.log("My name is " + name);
})

// First ();

/*
* Output - Hello, I am JavaScript.
* послідовність виконання - third(), second(), First().
* Працюватиме лише callStack, без залучення чого-небудь ще.
* */


// Exercise II Asynchronous task
const callSequence4 = () => {
    console.log('Hello,');

    setTimeout(function(Synchronous) {
        // This will execute in future after 5 seconds
        console.log('cool programming language')
    }, 5000);

    setTimeout(function() {
        // This will execute in future after 3 seconds
        console.log('JavaScript - ');
    }, 3000);

    console.log("I am");
}

// callSequence4();
// Output - Hello, I am JavaScript - cool programming language


// ============ HOW WORK EVENT LOOP ============
// -------------- Case 1 --------------
const consoleOutput = () => {
    // L1
    console.log('🥪 Synchronous 1');

    // L2
    setTimeout(_ => console.log(`🍅 Timeout 4`), 0);

    // L3
    Promise.resolve().then(_ => console.log('🍍 Promise 3'));

    // L4
    console.log('🥪 Synchronous 2');
}

// console.log(consoleOutput());


function createButton () {
    const element = document.createElement('button');
    element.id = 'btn';
    element.className = 'button';
    element.innerHTML = 'Click me',
    element.style.height = '40px';
    element.style.width = '90px';
    element.style.backgroundColor = 'orange';
    element.style.color = 'white';
    element.style.position = 'absolute';
    element.style.top = '300px';
    element.style.left = '10px';
    element.addEventListener('click', runClick);
    document.body.appendChild(element);
};

// createButton();

function runClick () {
    console.log('A');

    document.querySelector('button').addEventListener('click', (() => {
        console.log('Button was clicked');
    }));

    console.log('B');
}











