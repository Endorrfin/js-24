// ============ FUNCTION RETURN ALL VOWELS ============

/*
Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
Гласными являются «a», «e», «i», «o», «u».

findVowels('hello') // 2
findVowels('why') // 0
*/

// ------- Solution 1.1 - using includes -------
/*
* Важно обратить внимание на использование метода .includes().
* Он доступен и для строк, и для массивов.
* Его стоит применять для того, чтобы выявить, содержит ли массив определенное значение.
* Этот метод возвращает true, если массив содержит указанное значение, и false, если нет.
*/

const findVowelIncludes = str => {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            console.log(count++);
            count++
        }
    }
    return count
}

// console.log(findVowelIncludes('KvN'));
// console.log(findVowelIncludes('Volvo'));
// console.log(findVowelIncludes('Mercedes'));
// console.log(findVowelIncludes('Jaguar'));


// ------- Solution 1.2 - using match -------
/*
* Здесь задействуется метод .match(), который позволяет реализовать эффективный поиск.
* Если регулярное выражение как аргумент метода обнаружено внутри указанной строки,
* то возвращаемым значением становится массив совпадающих символов.
* Ну а если совпадений нет, то .match() возвращает null.
* gi - flag regExpo - не учитывать регистр
*/

const findVowelsMatch = str => {
    const matched = str.match(/[aeiou]/gi)
    return matched ? matched.length : 0
}

// console.log(findVowelsMatch('KvN')); // 0
// console.log(findVowelsMatch('Bingo')); // 2
// console.log(findVowelsMatch('Hoooooooorse')); // 9
// console.log(findVowelsMatch('ukrAIne')); // 4


