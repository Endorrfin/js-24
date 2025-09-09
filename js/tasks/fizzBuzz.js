/*
Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
вывод fizz вместо чисел, кратных 3;
вывод buzz вместо чисел, кратных 5;
вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
*/

// SOLUTION I
function fizzBuzz1(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}

// fizzBuzz1(18)

// SOLUTION II
const fizzBuz2 = num => {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzBuzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}

// fizzBuz2(36)


// SOLUTION III
for (let n = 1; n <= 21; n++) {
    let output = "";
    if (n % 3 === 0) output += "Fizz";
    if (n % 5 === 0) output += "Buzz";
    // console.log(output || n);
}


// SOLUTION IV
const fizzBuz4 = n => {
    let result = '';
    if (n === 0 || n === 1) return n;
    if (n % 2 === 0) {
        result += "fiz";
    }

    if (n % 3 === 0) {
        result += "Buzz";
    }

    return result;
}

// console.log('0', fizzBuz4(0));
// console.log('1', fizzBuz4(1));
// console.log('2', fizzBuz4(2));
// console.log('3', fizzBuz4(3));
// console.log('6', fizzBuz4(6));
// console.log('8', fizzBuz4(8));
// console.log('9', fizzBuz4(9));
// console.log('12', fizzBuz4(12));





