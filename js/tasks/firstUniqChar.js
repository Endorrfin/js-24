/*
First Unique Character in a String — Первый уникальный символ в строке.
Условия следующие:  нам необходимо написать функцию, которая принимает в качестве аргумента строку и возвращает индекс первого уникального символа. 
Если мы не найдем ни одного уникального символа, то функция должна вернуть -1. 

Дополнительные ограничения: 
1) длина строки может быть от 1 до 10^5; 
2) строка содержит только буквы английского алфавита в нижнем регистре.
https://leetcode.com/problems/first-unique-character-in-a-string/
*/

const input1 = 'leetcode'; // 0
const input2 = 'loveleetcode'; // 2
const input3 = 'aabb'; // -1

let firstUniqChar = function (str) {
  let map = new Map();
  for (let i = 0; i < str.length; i++) {
    let current = str[i];

    if (map.has(current)) {
      map.set(current, map.get(current) + 1);
    } else {
      map.set(current, 1);
    }
  }
  //  console.log(map);

  for (let i = 0; i < str.length; i++) {
    if (map.get(str[i]) === 1) {
      return i;
    }
  }
  return -1;
};

// console.log(firstUniqChar(input1));
// console.log(firstUniqChar(input2));
// console.log(firstUniqChar(input3));
// console.log(firstUniqChar('1234512'));
