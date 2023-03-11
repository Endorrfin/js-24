
// ============ SELECTION SORT ============
const array = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32] // [-5, -1, 0, 1, 1, 1, 2...]
let count = 0;


// ------------ Solution 1.1 - O(n * n) ------------
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

// console.log( 'sorted array: ', selectionSort(array), 'length', array.length, 'count = ', count);

