/*
Есть функция, эта функция принимает сколько угодно числовых параметров и возвращает их сумму.
для выполнения задачи применяем псевдомассив arrguments.
*/

// ! Option I
function showSumArr(...args) {
    // console.log(args);
    return args.reduce((acc, item) => acc += item);
}

// console.log(showSumArr(10, 20, 25));