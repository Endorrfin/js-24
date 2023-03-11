
// ============ LINEAR SEARCH ============
const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
let count = 0;

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    count++;
    if(array[i] === item) {
      return i;
    }
  }
  return null;
}

// console.log( 'index of element = ', linearSearch(array, 8), 'count = ', count);
// console.log( 'index of element = ', linearSearch(array, 7), 'count = ', count);
// console.log( 'index of element = ', linearSearch(array, 11), 'count = ', count);
// console.log( 'index of element = ', linearSearch(array, 19), 'count = ', count);
