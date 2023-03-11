/*
Фибоначчи — это ряд чисел, где каждое последующее является суммой двух предыдущих. Так, первые десять чисел выглядят следующим образом: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

Нужно написать функцию, которая возвращает n-ную запись в определенной последовательности, причем n — число, которое передается в качестве аргумента функции.

fibonacci(3) // -->2
*/

// !Option I
const fibonacciCycle = num => {
    // store the Fibonacci sequence you're going to generate inside an array and initialize the array with the first two numbers of the sequence

    const result = [0, 1]
    for (let i = 2; i <= num; i++) {
        // push the sum of the two numbers preceding the position of i in the result array at the end of the result array

        const prevNum1 = result[i - 1]
        const prevNum2 = result[i - 2]
        result.push(prevNum1 + prevNum2)
    }

    /*
    Example 10
    stage 1
    prevNum1 = 1
    prevNum2 = 0
    result = [0, 1, 1]

    stage 2
    prevNum1 = 1
    prevNum2 = 1
    result [0, 1, 1, 2]

    stage 3
    prevNum1 = 1
    prevNum2 = 1
    result [0, 1, 1, 2, 3]
    */

    // return the last value in the result array
    // return result[num]
    return result
}
// console.log(fibonacciCycle(7));

/*
В массиве результатов первые два числа содержатся в ряду, поскольку каждая запись в последовательности состоит из суммы двух предыдущих чисел. В самом начале двух чисел, которые можно взять для получения следующего числа нет, поэтому цикл не может сгенерировать их в автоматическом режиме. Но, как мы знаем, первые два числа — всегда 0 и 1. Поэтому инициализировать массив результатов можно вручную.
*/

// !Option II
const fibonacciRecursion = num => {
    // if num is either o or 1 return num
    if (num <= 1) {
        return num
    }

    // recursion here
    // console.log(fibonacciRecursion(num - 1) + fibonacciRecursion(num - 2));
    return fibonacciRecursion(num - 1) + fibonacciRecursion(num - 2)
}

// console.log(fibonacciRecursion(3));

/*
Example 5
stage 1
Num1 = 1
Num2 = 0
result = [1, 0]

stage 2
Num1 = 1
Num2 = 1
result [0, 1, 1, 2]

stage 3
Num1 = 1
Num2 = 1
result [0, 1, 1, 2, ]
*/