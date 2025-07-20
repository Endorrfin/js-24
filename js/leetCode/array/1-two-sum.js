/*

1. Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

Follow-up: Can you come up with an algorithm that is less than O(n2) barChart_time_ua complexity?

* */

const array = [2,7,11,15]; // 9
const array2 = [3,2,4]; // 6
const array3 = [3,3]; // 6


// ------------ Solution 1.1 - O(n^2) ------------
const twoSum = function(array, target) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    for (let k = i + 1; k < array.length; k++) {
      if (array[i] + array[k] === target) {
        result.push(i);
        result.push(k);
      }
    }
  }
  return result;
}

// console.log(array, twoSum(array, 9));
// console.log(array2, twoSum(array2, 6));
// console.log(array3, twoSum(array3, 6));


// ------------ Solution 1.2 - O(n) ------------
const twoOfSum = function(array, target) {
  const numObject = {};
  for (let i = 0; i < array.length; i++) {
    numObject[array[i]] = i;
  }

  for (let k = 0; k < array.length; k++) {
    const diff = target = array[k];

    if (numObject[diff] && numObject[diff] !== i) {
      return [i, numObject[diff]];
    }
  }
  return [];
}

// console.log(array, twoOfSum(array, 9));
// console.log(array2, twoOfSum(array2, 6));
// console.log(array3, twoOfSum(array3, 6));



// ------------ Solution 1.3 ------------
const twoSumBinarySearch = function(array, target) {
  for (let i = 0; i < array.length; i++) {
    let numberToFind = target - array[i];
    let g = i + 1;
    let r = array.length - 1;
    while(g <= r) {
      let mid = g + (r - g) / 2;
      if (array[mid] === numberToFind) {
        return array[i], array[mid];
      }
      if (numberToFind < array[mid]) {
        r = mid - 1;
      } else {
        g = mid + 1;
      }
    }
  }
  return [];
}

// console.log(array, twoSumBinarySearch(array, 9));
// console.log(array2, twoSumBinarySearch(array2, 6));
// console.log(array3, twoSumBinarySearch(array3, 6));



// ------------ Solution 1.4 ------------
const twoSumOptimize = function(array, target) {
  let junior = 0;
  let senior = array.length - 1;

  while(junior < senior) {
    // debugger;
    if (array[junior] + array[senior] > target) {
      senior -= 1;
    } else if (array[junior] + array[senior] < target) {
      junior += 1;
    } else {
      // return [junior + 1, senior + 1];
      return ([junior, senior]);
    }
  }
}

// console.log(array, twoSumOptimize(array, 9));
// console.log(array2, twoSumOptimize(array2, 6));
// console.log(array3, twoSumOptimize(array3, 6));

