/*
* Анаграмма - слово, которое содержит все буквы другого слова в том же количестве, но ином порядке.
* Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения.
* Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.
* anagram('finder', Friend') --> true
* anagram('hello', 'bye') --> false
*
* Важно учитывать, что необходимо проверять каждую букву в двух входных строках и их количество в каждой строке.
* Для хранения данных анаграммы стоит выбрать такую структуру, как объектный литерал JavaScript. Ключ в этом случае — символ буквы, значение — количество ее повторений в текущей строке.
* Нужно убедиться в том, что регистр букв при сравнении не учитывается. Просто преобразуем обе строки в нижний или верхний регистр.
* Исключаем из сравнения все не-символы. Лучше всего работать с регулярными выражениями.
* */

const buildCharObject = str => {
    const charObj = {}
    for (let char of str.replace(/[^\w]/g).toLowerCase()) {
        // if the object has already a key value pair
        // equal to the value being looped over,
        // increase the value by i, otherwise add the letter being looped over as key and 1 as its value
        charObj[char] = charObj[char] + 1 || 1
    }
    return charObj
}

// main function
const anagram = (strA, strB) => {
    // build the object that holds strA data
    const aCharObject = buildCharObject(strA)
    // build the object that holds strB data
    const bCharObject = buildCharObject(strB)

    // compare number of keys in the two objects
    // (anagrams must have the save number of letters)
    if (Object.keys(aCharObject).length !== Object.keys(bCharObject).length) {
        return false
    }

    // if both objects have the some number of keys
    // we can be sure that at least both strings
    // have the same number o characters
    // now we can compare the two objects to see if both
    // have the same letters in the same amount

    for (let char in aCharObject) {
        if (aCharObject[char] !== bCharObject[char]) {
            return false;
        }
    }

    // if both the above checks succeed, you have an anagram: return true
    return true;
}


function allAnagrams(array) {
    const sorted = array.map((str) => str.split('').sort().join(''));
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] !== sorted[0]) {
            return false;
        }
    }
    return true;
}

// console.log(anagram('finder', 'Friend'))

