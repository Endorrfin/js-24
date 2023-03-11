/*
Includes позволяет искать значение в массиве.
1. Если значение не будет найдено includes возвратит false
2. Если будет найдено, возвратит true

Includes method также позволяет производить поиск символов в строке.
*/

// ! Option I

const arr1 = [44, 55, 66, 77, 88, 99, 44]

// console.log(arr1.includes(77)); // true
// console.log(arr1.includes(100)); // false
// console.log(arr1.includes(44, 1)); // true - начинаем поиск с 1-го индекса


// ! Option II

const users = [{
        "name": "ivanov",
        "age": 44
    },
    {
        "name": "petrov",
        "age": 14
    },
    {
        "name": "sydorov",
        "age": 37
    },
    {
        "name": "alexeev",
        "age": 43
    },
    {
        "name": "zakharov",
        "age": 12
    },
    {
        "name": "mirov",
        "age": 31
    },
]

let newUsers = users.filter((item) => {
    return item.name.includes('ov')
});

const shortNewUsers = users.filter(user => user.name.includes('rov'));

// console.log(newUsers);
// console.log(shortNewUsers);
