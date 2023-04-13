/*
Вычислить сумму чисел до данного
Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
*/

// !Решение с помощью цикла for
function sumToCycle(num) {
    let result = 0
    for (let i = 1; i <= num; i++) {
        // console.log(i);
        result += i
    }
    return result
}

// console.log(sumToCycle(10))

// !Решение циклом for in
function getArraySum(arr) {
    var total = 0;
    for (var i in arr) {
        total += arr[i];
    }

    return total;
}
var payChecks = [123, 155, 134, 205, 105];
var weeklyPay = getArraySum(payChecks); //sums up to 722


// !Решение через рекурсию
function sumToRecursion(n) {
    // console.log(n);
    return (n == 1) ? n : n + sumToRecursion(n - 1)
}

// console.log(sumToRecursion(100));