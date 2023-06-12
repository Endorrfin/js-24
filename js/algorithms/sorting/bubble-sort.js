/*
* How it works?
* Порівнюється кожна пара сусудніх чисел від 1-ї пари до останньої.
* 1) спочату 1 та 2-й елемент масива
* 2) потім 2-й та 3-й елементи масива
* 3) потім 3-й та 4-й елементи масива і так далі
* В результаті в кінці масива на самому останньому місці зʼявиться самий останній елемент масива.
* */

// ============ BUBBLE SORT ============
const array = [0, 3, 41, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 59, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32] // [-5, -1, 0, 1, 1, 1, 2...]
const arrayGenerate = Array(100).fill(null).map(() => Math.floor(Math.random() * 2000) - 1000)
let count = 0;


// ------------ Solution 1.1 - O(n * n) ------------
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
      count++
    }
  }
  return array
}

// console.log( 'sorted array 1.1: ', bubbleSort(array), 'length', array.length, 'count = ', count);


// ------------ Solution 1.2 - O(n * n) ------------
function bubbleSort2(array) {
  for (let n = 0; n < array.length; n++) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        const buff = array[i];
        array[i] = array[i + 1];
        array[i + 1] = buff;
      }
      count++
    }
  }

  return array
}

// console.log( 'sorted array 2.1: ', bubbleSort2(array), 'length', array.length, 'count = ', count);


// ------------ Solution 1.2 - O(n * n) ------------
function bubbleSortBest(array) {
  for (let n = 0; n < array.length; n++) {
    for (let i = 0; i < array.length - 1 - n; i++) {
      if (array[i] > array[i + 1]) {
        const buff = array[i];
        array[i] = array[i + 1];
        array[i + 1] = buff;
      }
      count++
    }
  }

  return array
}

// console.log( 'sorted array 3.1: ', bubbleSortBest(array), 'length', array.length, 'count = ', count);
// console.log( 'sorted array 3.2: ', bubbleSortBest(arrayGenerate), 'length', arrayGenerate.length, 'count = ', count);

