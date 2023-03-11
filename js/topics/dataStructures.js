
// ============ OBJECT ============
const guitarPlayer = {
    firstName: 'Richie',
    lastName: 'Sambora',
    soloSpeed: 10,
    birthDate: '11.07.1959',
    guitarCount: 277,
    isLeftHanded: false,

    play() {
        console.log(`Lets's rock!`);
    },

    playSolo(speed = 2) {
        console.log(`Play solo ${speed}x`)
    }
};

const entries = Object.entries(guitarPlayer);
const keys = Object.keys(guitarPlayer);
const values = Object.values(guitarPlayer);
// console.log('entries', entries);
// console.log('keys', keys);
// console.log('values', values);

// Как из произвольного объекта вызвать все его методы

// Перебираем все ключи объекта
for (let  propertyName of keys) {
    // Проверяем если ключем является функция
    if (typeof guitarPlayer[propertyName] === 'function') {
        // Если это функция / метод, то вызываем её
        // console.log('propertyName', propertyName);
        // guitarPlayer[propertyName]();
    }
}

const map = new Map(entries);
// console.log('map', map);


// ============ ARRAY ============
const stolenItems = [
    { name: 'macBook', quantity: 2, price: 5000 },
    { name: 'iMac', quantity: 1, price: 3000 },
    { name: 'iphone', quantity: 3, price: 3300 },
    { name: 'ipad', quantity: 2, price: 1800 },
    { name: 'appleWatch', quantity: 7, price: 6300 },
    { name: 'airPods', quantity: 5, price: 2500 },
    { name: 'airPort', quantity: 4, price: 1200 },
    { name: 'appleTV', quantity: 4, price: 2800 },
    { name: 'macMini', quantity: 6, price: 4200 },
    { name: 'macStudio', quantity: 3, price: 3600 },
];

// Метод sort помимо того, что возвращает новый массив, он еще и изменяет (мутирует) существующий массив,
// Метод slice() - создает новый массив
// console.log('Ascending', stolenItems.slice().sort((a, b) => a.quantity - b.quantity));
// console.log('Descending', stolenItems.slice().sort((a, b) => b.quantity - a.quantity));


// Filtering
// console.log(stolenItems.filter(item => item.quantity < 3));
// console.log(stolenItems.slice(0, 3));
// console.log(stolenItems.slice(0, stolenItems.length - 1)); // start 0 item to end of the array exclude last item
// console.log(stolenItems.slice(4)); // start 4 item to end of the array


// Transform
// console.logHTML(`<strong> Stolen items</strong><ul>${stolenItems.map(item => `<li>${item.name}</li>`).join('')}</ul>`);
// console.log(stolenItems.map(item => `${item.name}`).join('\n'));
// console.log(`<strong> Stolen items</strong><ul>${stolenItems.map(item => `<li>${item.name}</li>`).join('')}</ul>`);


// Convolution
// console.log(`Total stolen: ${stolenItems.reduce((acc, item) => acc + item.quantity, 0)} items`);
// console.log(`Total stolen: ${stolenItems.reduce((acc, item) => acc + item.price, 0)} amount`);

const createObj = stolenItems.reduce((acc, item) => {
    return Object.assign({}, acc, {[item.name]: item.price});
}, {});
// console.log('createObj', createObj);


// ============ ОРГАНИЗАЦИЯ ОЧЕРЕДИ ЗАДАЧ ============
// Этот способ гарантирует нам то, что все наши операции выполняются именно в том порядке, в котором мы их установили
// В стеке важно, что получать доступ к элементам можно только в том порядке, в котором мы туда их помещали

// ------- Example I - how it work -------
const history = [];
let i = 100;

history.push(i++);
history.push(i++);
history.push(i++);
history.push(i++);
history.push(i++);

// console.log('history #1', history);
// console.log('last element is -',history[history.length-1]);

history.pop();
history.pop();
// console.log('history #2', history);
history.pop();
// console.log('history #3', history);






// ------- Example II - using Array -------
const callbacks = [];

const addAsyncListener = (fn) => {
    // Исключаем выполнения дублирующих дел
    if (!callbacks.find((task) => task === fn)) {
        callbacks.push(fn);
    }
};

const startAsync = () => {
    setTimeout(() => {
        while (callbacks.length) {
            const cb = callbacks.shift();
            cb();
        }

        console.log(`Done!`)
    }, 1000)
};

addAsyncListener(() => console.log(1));
const log2 = () => console.log(2)
addAsyncListener(log2);
addAsyncListener(log2);
addAsyncListener(log2);
addAsyncListener(() => console.log(3));

// console.log(`Wait...`);
// startAsync();

addAsyncListener(() => console.log(4));
addAsyncListener(() => console.log(5));




// ------- Example III using new Set  -------
const callbacksSet = new Set();

const addAsyncListenerSet = (fn) => {
    callbacksSet.add(fn);
};

const startAsyncSet = () => {
    setTimeout(() => {
        for (const cb of callbacksSet) {
            callbacksSet.delete(cb);
            cb();
        }

        console.log(`Done!`)
    }, 3000)
};

addAsyncListenerSet(() => console.log(1));
addAsyncListenerSet(() => console.log(2));
const log3 = () => console.log(3)
addAsyncListenerSet(log3);
addAsyncListenerSet(log3);
addAsyncListenerSet(log3);
addAsyncListenerSet(log3);
addAsyncListenerSet(() => console.log(4));

// console.log(`Wait...`);
// startAsyncSet();

addAsyncListenerSet(() => console.log(4));
addAsyncListenerSet(() => console.log(5));








