/*
Написать функцию возврата уникальных значений из нескольких массивов.
unigueValues1([123], [4,5,6], [6, 7, 8, 5]); // [1, 2, 3, 4, 5, 6, 7, 8]
uniqueValues2([1], [2], [3, 2, 2], [4, 1, 1, 2]); // [1, 2, 3, 4]
*/

// Base
function uniteUniqueBase() {
    const arr = [...arguments];
    let newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(...arr[i]);
    }

    newArr = new Set(newArr);
    return [...newArr]
}

// Advanced
function uniteUniqueAdvance() {
    return [...new Set([...arguments].flat())];
}