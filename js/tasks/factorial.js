/*
Факторіал натурального числа {\displaystyle n}n — добуток натуральних чисел від одиниці до {\displaystyle n}n включно, позначається {\displaystyle n}n!.
*/

function factorialCycle(n) {
    let result = 0
    for (let i = 1; i <= n; i++) {
        result *= i
    }
    return result
}
// console.log(factorialCycle(5));



function factorialFactorial(n) {
    return n !== 1 ? n * factorialFactorial(n - 1) : 1
}

// console.log(factorialFactorial(5));