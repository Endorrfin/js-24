/*
indexOf позволяет искать значение в массиве.
1. Если значение не будет найдено indexOf возвратит -1
2. Если будет найдено, то будет найдена его 1-я позиция в массиве и будет возвращена позиция (индекс в массиве)

indexOf method также позволяет производить поиск символов в строке.
*/

// ! Option I
const arr1 = [9, 8, 7, 5, 9, 3, 9];

// console.table(arr1);
// console.log(arr1.indexOf(6)); // -1
// console.log(arr1.indexOf(9)); // 0
// console.log(arr1.indexOf(9, 1)); // 4 указываю индекс с которого искать.
// console.log(arr1.indexOf(9, 5)); // 6 указываю индекс с которого искать.


function indexOfEmul(arr, item, from = 0) {
    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) {
            return i
        }
    }
    return -1
}

// console.log(indexOfEmul(arr1, 3)); // 5
// console.log(indexOfEmul(arr1, 18)); // -1