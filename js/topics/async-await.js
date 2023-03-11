// ============ ASYNC / AWAIT (ES7) ============

/*
* Async / await - это новый способ написания асинхронного кода.
* */

// ------- Example I -------

/*
* Using Promise
* */
const fetchDataPromise = () => Promise.resolve({
    data: ['Jack', 'Max', 'Leo', 'Mark', 'Leonid', 'Artur', 'Julia']
})

const getNameDate = () => {
    fetchDataPromise()
        .then(data => {
            console.log(data);
            return 'done';
        })
}

/*
* Using async / await syntax
* */

const getNamesDate2 = async () => {
    console.log(await fetchDataPromise());
    return 'done';
}


// getNameDate();
// getNamesDate2();


// ------- Example II -------
/*
* Отлавливание ошибок
* */

const fetchData = () => Promise.reject('some error...');
const getNamesData = async () => {
    try {
        console.log(await fetchData());
    } catch (error) {
        console.log(error);
    }
}

// getNamesData();



// ------- Example III -------
const postsAsync = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' },
    { title: 'Post Three', body: 'This is post three' },
    { title: 'Post Four', body: 'This is post four' },
    { title: 'Post Five', body: 'This is post five' }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        postsAsync.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });

        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            postsAsync.push(post);

            const error = false;

            if (!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}


async function init() {
    await createPost({ title: 'Post Six', body: 'This is post six' });

    getPosts();
}

// init();



// ------- Example IV Async / Await / Fetch -------
async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    console.log(data);
};

// fetchUsers();




// ============ HOW WORK PROMISES & ASYNC AWAIT ============
// https://www.youtube.com/watch?v=vn3tm0quoqE

// -------------- Case 1.1 --------------
const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

const codeBlocker = () => {
    // Blocking
    // let i = 0;
    // while(i < 1000000000) { i++;}

    // return '🐷 billion loops done';

    // Async blocking
    // return new Promise((resolve, reject) => {

    //     let i = 0;
    //     while(i < 1000000000) { i++;}

    //     resolve('🐷 billion loops done');
    // })

    // Non-blocking

    return Promise.resolve().then(v =>  {
        let i = 0;
        while(i < 1000000000) { i++; }
        return '🐷 billion loops done';
    })
}

// log('🥪 Synchronous 1');
// codeBlocker().then(log)
// log('🥪 Synchronous 2');



// -------------- Case 1.2 --------------
export const getFruit = async name => {
    const fruits = {
        pineapple: '🍍',
        peach: '🍑',
        strawberry: '🍓'
    };

    return fruits[name];
};

// getFruit('peach').then(console.log);

// Async + Await
export const makeSmoothie = async () => {
    const a = await getFruit('pineapple');
    const b = await getFruit('strawberry');

    return [a, b];
};

const makeSmoothie2 = () => {
    let a;
    return getFruit('pineapple')
      .then(v => {
          a = v;
          return getFruit('strawberry');
      })
      .then(v => [a, v]);
};



// -------------- Case 1.3 - concurrency --------------
const makeSmoothieFaster = async() => {
    const a = getFruit('pineapple');
    const b = getFruit('strawberry');

    const smoothie = await Promise.all([a, b])

    return smoothie;
}


const fruitRace = async() => {
    const a = getFruit('pineapple');
    const b = getFruit('strawberry');

    const winner = await Promise.race([a, b])

    return winner;
}

// fruitRace().then(log)
// fruitRace().then(log)
// fruitRace().then(log)
// fruitRace().then(log)
// fruitRace().then(log)



// -------------- Case 1.4 - error-handling --------------
const badSmoothie = async() => {
    try {

        const a = getFruit('pineapple')
        const b = getFruit('strawberry');
        const smoothie = await Promise.all([a, b])

        throw 'broken!'

        return smoothie;

    } catch(err) {
        console.log(err)
        // return `😬 We are going to be fine...`
        throw `💩 It's broken!`
    }
}


// -------------- Case 1.5 - sugar --------------
const fruits = ['peach', 'pineapple', 'strawberry'];

const fruitLoop = async () => {
    for (const f of fruits) {
        const emoji = await getFruit(f);
        log(emoji);
    }
};

// console.log(fruitLoop());


const fruitInspection = async () => {
    if ((await getFruit('peach')) === '🍑') {
        console.log('looks peachy!');
    }
};

// console.log(fruitInspection());


const getTodo = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    const { title, userId, body } = await res.json();

    console.log(title, userId, body);
};





















