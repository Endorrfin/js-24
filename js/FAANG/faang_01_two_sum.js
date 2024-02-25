
// ============ INTERVIEW QUESTION #1 Two Sum ============

/*
Given an array of integers, return the indices of the two numbers that add up to a given target

Q. Are all the numbers positive or cat there be negatives?
A. All numbers are positive.

Q. Are there duplicate numbers in the array?
A. No, there are no duplicates

Q. Will there always be a solution available?
A. No, there may not always be a solution.

Q. What do we return if there's no solution?
A. Just return null.

Q. Can there be multiple pairs that add up to the target?
A. No, only 1 pair of numbers will add up to the target.

* */

const nums = [1, 3, 7, 9, 2];
const target = 11;

// -------------- Solution 1 --------------
const findTwoSum = (nums, target) => {
  for (let p1 = 0; p1 < nums.length; p1++) {
    const numberToFind = target - nums[p1];

    for (let p2 = p1 + 1; p2 < nums.length; p2++) {
      if (numberToFind === nums[p2]) {
        return [p1, p2];
      }
    }
  }
  return null; // no solution
}

// console.log(findTwoSum(nums, target));


// -------------- Solution 2 --------------
const findTwoSumOptimized1 = (nums, target) => {
  const numsMap = {};
  for (let p = 0; p < nums.length; p++) {
    const currentMapValue = numsMap[nums[p]];

    if (currentMapValue >= 0) {
      return [currentMapValue, p];
    } else {
      const numberToFind = target - nums[p];
      numsMap[numberToFind] = p;
    }
  }
  return null; // no solution
}

console.log(findTwoSumOptimized1(nums, target));


// -------------- Solution 3 --------------
const findTwoSumOptimized2 = (nums, target) => {
  const numsMap = {};
  for (let p = 0; p < nums.length; p++) {
    if (numsMap[nums[p]] >= 0) {
      return [numsMap[nums[p]], p];
    } else {
      const numberToFind = target - nums[p];
      numsMap[numberToFind] = p;
    }
  }
  return null; // no solution
}

console.log(findTwoSumOptimized2(nums, target));


