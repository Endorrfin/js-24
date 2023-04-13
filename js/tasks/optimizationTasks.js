
const array = [2, 10, 2, 4, 7, 9, 3, 1, 6, 4, 8, 3, 8, 9, 5, 5];
const array2 = [2, 10, 2, 4, 7, 9, 3, 1, 6, 4, 8, 3, 8, 9, 5, 5];
const array3 = ['Ben', 'Gloria', 'Cris', 'Ben', 'Gloria'];
// console.log(array);

// ------- Example I - Array Deduplication -------
/*
* ref - https://dev-gang.ru/article/ja-perepisal-eti--otdelnyh-strok-koda-javascript-rukovoditel-gruppy-pohvalil-kod-za-ego-elegantnost-6t11orcxfj/
* На массиве из 1000 000 случайно сгенерированных чисел в диапазоне от 1 до 100 исходный код работает только на 12% быстрее,
* чем переписанная версия.
* Поскольку мы используем map во второй функции, нам нужно выполнить итерацию по массиву только один раз,
* и мы сделали это так, что проверка того, видели ли мы уже элемент, занимает O(1) времени.
* */

// Case I
const uniqueArr = (arr) => [...new Set(arr)];
// console.log(uniqueArr(array));

const uniqueData = [...new Set(array2)];
// console.log(uniqueData);

// Case II
const removeDuplicates = (array) => {
    // debugger;
    const uniqueValues = [];
    const seenMap = {};

    for (const item of array) {
        if (seenMap[item]) continue;
        seenMap[item] = true;
        uniqueValues.push(item);
    }

    return uniqueValues;
};

// console.log(removeDuplicates(array));


// Case III
const removeDuplicatesName = (array3) => {
    // debugger;
    const uniqueValues = [];
    const seenMap = {};

    for (const item of array3) {
        if (seenMap[item]) continue;
        seenMap[item] = true;
        uniqueValues.push(item);
    }

    return uniqueValues;
};

// console.log(removeDuplicatesName(array3));


// ------- Example II - Получить параметры из URL-адреса и преобразовать их в объект -------
const url = 'https://dev-gang.ru/article/ja-perepisal-eti--otdelnyh-strok-koda-javascript-rukovoditel-gruppy-pohvalil-kod-za-ego-elegantnost-6t11orcxfj/';
// Option I
const getParameters = URL => JSON.parse(`{"${decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&amp;/g, '","').replace(/=/g, '":"')}"}`);

// Option II
/**
 * * ref - https://dev-gang.ru/article/ja-perepisal-eti--otdelnyh-strok-koda-javascript-rukovoditel-gruppy-pohvalil-kod-za-ego-elegantnost-6t11orcxfj/
 * Returns the provided URLs search parameters
 * as a set of key-value pairs.
 */
const getURLParameters = (url) => {
    const { searchParams } = new URL(url);
    return Object.fromEntries(searchParams);
};

// console.log(getURLParameters(url));


// ------- Example III - проверьте, является ли объект пустым -------
const obj1 = {};
const obj2 = {ukraine: 'kyiv', pollen: 'warsaw', turkish: 'ankara'};

// Case I
const isEmpty = obj => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;
// console.log('obj1', isEmpty(obj1));
// console.log('obj2', isEmpty(obj2));


// Case II
const isObjectEmpty = (object) => {
    debugger;
    // Iterates over the keys of an object, if any exist, return false.
    for (_ in object) return false;
    return true;
};

// console.log('obj1', isObjectEmpty(obj1));
// console.log('obj2', isObjectEmpty(obj2));



// ------- Example IV - Перевернуть строку -------
const string = 'ukraine';
// Option I
const reverse = str => str.split('').reverse().join('');
// console.log(reverse(string));


// Option II
const reverseString = (string) => {
    return string
        .split("")
        .reverse()
        .join("");
};

// console.log(reverseString(string));


// ------- Example IV - Создать случайный шестнадцатеричный код -------
// Option I
const randomHexColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`
// console.log(randomHexColor());

// Option II
const getRandomHexColor = () => {
    const randomValue = Math.floor(Math.random() * 0xffffff);
    const hexValue = randomValue.toString(16);
    return hexValue.padStart(6, "0");
};

// console.log(getRandomHexColor());








