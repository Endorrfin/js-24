

/*
sort() модифицирует оригинальный массив.
По умолчанию, метод преобразует все элементы в строки и выполняет их сортировку в алфавитном порядке:
* */

const alphabetEN = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const alphabetUA = ['А', 'Б', 'В', 'Г', 'Ґ', 'Д', 'Е', 'Є', 'Ж', 'З', 'И', 'І', 'Ї', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'ь', 'Ю', 'Я']


// ------------ Example 1.1 ------------
/*
* Написать фукнцию сортировки любых объектов, по задаваемому параметру*/
const stock = [
    { name: 'MacBook', quantity: 11 },
    { name: 'Ipad', quantity: 3 },
    { name: 'Imac', quantity: 4 },
    { name: 'Iphone', quantity: 6 },
    { name: 'MacMini', quantity: 1 },
    { name: 'AirPods', quantity: 28 },
    { name: 'AirPort', quantity: 0 },
];

function sorted (data, type = 'asc') {
    return data.sort((a, b) => {
        switch (type) {
            case 'asc':
                return a.quantity - b.quantity;
                break;
            case 'desc':
                return b.quantity - a.quantity;
        }
    })
}

// console.log('sorted default (asc)', sorted(stock.slice()));
// console.log('sorted desc ', sorted(stock.slice(), 'desc'));


// ------------ Example 1.2 ------------
const collatoreEN = new Intl.Collator('en-EN');
// console.log(alphabetEN.sort(collatoreEN.compare));

const collatoreUA = new Intl.Collator('ua-UA');
// console.log(alphabetUA.sort(collatoreUA.compare));



// ------------ Example 1.3 ------------
const collatore = new Intl.Collator('en-EN');
const users = [
    { name: 'Julia', age: 21 },
    { name: 'Leonid', age: 19 },
    { name: 'Silva', age: 26 },
    { name: 'Adam', age: 24 },
];

users.sort((a, b) => collatore.compare(a.name, b.name));
const sortedAge = users.slice().sort((a, b) => (a.age - b.age));

// console.log(users);
// console.log(sortedAge);
