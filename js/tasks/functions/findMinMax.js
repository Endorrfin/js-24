
// ============ FIND MIN & MAX VALUES IN ARRAY ============
const array = [50, 20, 70, 60, 45, 30, 90, 10, -30];

// ------- Solution 1.1 -------
function findMin (array) {
  return Math.min(...array);
}

// console.log('Min value 1.1', findMin(array));



// ------- Solution 1.3 -------
function findMinValue (array) {
  if (array.length === 0) return undefined;
  let min = array[0];

  array.forEach((number) => {
    if (number < min) {
      min = number;
    }
  });

  return min;
}

// console.log('Min value 1.2', findMinValue(array));


// ------- Solution 2.1 -------
function findMax (array) {
  return Math.max(...array);
}

// console.log('Max value 2.1', findMax(array));


// ------- Solution 2.2 -------
function findMaxValue (array) {
  if (array.length === 0) return undefined;
  let max = array[0];

  array.forEach((number) => {
    if (number > max) {
      max = number;
    }
  });

  return max;
}

// console.log('Max value 2.2', findMaxValue(array));




