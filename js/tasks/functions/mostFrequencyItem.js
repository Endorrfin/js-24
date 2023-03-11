// source: https://vladilen.notion.site/JavaScript-473541d86991472fb844c5fa35d5dbf4

/*
* Какая строка встречается чаще всего
* Напишите функцию, которая принимает массив строк и возвращает самую частовстречающуюся строку в этом массиве.
* Если таких строк несколько, то нужно вернуть первую, идя слева на право.
* Input: String[]
* Output: String
* */

// ============ Which element is the most frequency ============

// -------------- Solution I --------------
function mostFrequencyElement(array) {
  // todo
  const map = {};
  let maxFrequency = 0;
  let maxFrequencyElement = array[0];

  for (let i = 0; i < array.length; i++) {
    const current = array[i];

    if (map[current]) {
      map[current]++
    } else {
      map[current] = 1
    }

    if (map[current] > maxFrequency) {
      maxFrequency = map[current];
      maxFrequencyElement = current;
    }
  }
  return maxFrequencyElement;
}

// console.log(mostFrequencyElement(['a', 'b', 'c', 'c', 'd', 'e'])) // -> c
// console.log(mostFrequencyElement(['abc', 'def', 'abc', 'def', 'abc'])) // -> abc
// console.log(mostFrequencyElement(['abc', 'def'])) // -> abc
// console.log(mostFrequencyElement(['abc', 'abc', 'def', 'def', 'def', 'ghi', 'ghi', 'ghi', 'ghi' ])) // -> ghi





