let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// ============ HOW WORK EVERY ============

// -------------- Case 1 --------------,
/*
* Написать аналог метода every.
* Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом callback (обязательно проверьте что передана функция) функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5).
* Callback должен принимать один элемент массива, его индекс в массиве и весь массив.
* */

const isAllNumbers = arrayNumbers.every(function(num) {
  return typeof num === 'number';
});
// console.log('isAllNumbers', isAllNumbers);

function everyFunc (arr, handler) {
  for (let i = 0; i < arr.length; i++) {
    if(!handler(arr[i])) { // переводим false в true
      return false;
    }
  }
  return true;
}

const checkIsNumber = everyFunc([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function(num) {
  return typeof num === 'number';
});

// console.log('checkIsNumber', checkIsNumber);
