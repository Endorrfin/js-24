
// ============ QUICK SORT ============
const array = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3, 32] // [-5, -1, 0, 1, 1, 1, 2...]
let count = 0;


// ------------ Quick 1.1 - O(log2n * n) ------------
function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];
  let less = [];
  let greater = [];
  for (let i = 0; i < array.length; i++) {
    count++;
    if (i === pivotIndex) continue
    if (array[i] < pivot) {
      less.push(array[i])
    } else {
      greater.push(array[i])
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)]
}

// console.log( 'sorted array: ', quickSort(array), 'length', array.length, 'count = ', count);

