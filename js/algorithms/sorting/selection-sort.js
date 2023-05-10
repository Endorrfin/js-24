
// ============ SELECTION SORT ============
const randomArray = Array(100).fill(null).map(() => Math.floor(Math.random() * 1000) - 500);
const copyArray = randomArray.slice();
// console.log('copyArr', copyArray);


// ------------ Solution 1.1 - O(n * n) ------------
function selectionSortMax(copyArray) {
  const array = copyArray.slice();
  for (let i = 0; i < array.length - 1; i++) {
    let max = -Infinity;
    let index = null;

    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > max) {
        max = array[j];
        index = j;
      }
    }

    let buffer = array[array.length - 1 - i]
    array[array.length - 1 - i] = max;
    array[index] = buffer;
  }

  return array;
}

// console.log('sorted array start max I', selectionSortMax(copyArray));


// ------------ Solution 1.2 - O(n * n) ------------
function selectionSortMin(copyArray) {
  const array = copyArray.slice();
  for (let j = 0; j < array.length - 1; j++) {
    let min = Infinity;
    let index = null;

    for (let i = j; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
        index = i;
      }
    }

    let buffer = array[j];
    array[j] = min;
    array[index] = buffer;
  }

  return array;
}

// console.log('sorted array start min II', selectionSortMin(copyArray));




// ------------ Solution 2.1 - O(n * n) ------------
const array = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32] // [-5, -1, 0, 1, 1, 1, 2...]
let count = 0;
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
      count++
    }
    let temp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = temp;
  }
  return array
}

// console.log( 'sorted array II: ', selectionSort(array), 'length', array.length, 'count = ', count);



// ------------ Solution 3.1 - classical variant ------------
// console.log('sorted classical', copyArray.sort((a, b) => a - b));


// ------------ Solution 4.1 - sorted array finding min adn max for 1 iteration ------------



