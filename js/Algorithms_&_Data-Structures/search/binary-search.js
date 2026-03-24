
// ============ BINARY SEARCH ============
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
let count = 0;


// ------------ Solution 1.1 - using cycle ------------
function binarySearch(array, item) {
  let start = 0;
  let end = array.length;
  let middle;
  let found = false;
  let position = -1

  while(found === false && start <= end) {
    count++;
    middle = Math.floor((start + end) / 2);
    if(array[middle] === item) {
      found = true;
      position = middle;
      return position
    }
    if(item < array[middle]) {
      end = middle - 1
    } else {
      start = middle + 1
    }
  }
  return position;
}

// console.log( 'index of element = ', binarySearch(sortedArray, 27), 'count = ', count);




// ------------ Solution 1.2 - using recursion ------------
function recursiveBinarySearch(array, item, start, end) {
  let middle = Math.floor((start + end) / 2);
  count++;
  if (item === array[middle]) {
    return middle;
  }

  if(item < array[middle]) {
    return recursiveBinarySearch(array, item, 0, middle - 1)
  } else {
    return recursiveBinarySearch(array, item, middle + 1, end)
  }
}

// console.log( 'index of element = ', recursiveBinarySearch(sortedArray, 27, 0, sortedArray.length), 'count = ', count);
// console.log('Value is: ', sortedArray[26]);



// ------------ Solution 2.1 - using cycle ------------
let search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;

  while (left <= right) {
    count++;
    mid = Math.round((right-left) / 2) + left;

    if (target === nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

// console.log( 'index of element = ', search(sortedArray, 9), 'count = ', count);
// console.log( 'index of element = ', search(sortedArray, 33), 'count = ', count);

