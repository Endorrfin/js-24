
// 🎯 #1 Two Sum

/*
🔗 https://leetcode.com/problems/two-sum/description/
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

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

Hint 1
A really brute force way would be to search for all possible pairs of numbers but that would be too slow. Again, it's best to try out brute force solutions for just for completeness. It is from these brute force solutions that you can come up with optimizations.
Hint 2
So, if we fix one of the numbers, say x, we have to scan the entire array to find the next number y which is value - x where value is the input parameter. Can we change our array somehow so that this search becomes faster?
Hint 3
The second train of thought is, without changing the array, can we use additional space somehow? Like maybe a hash map to speed up the search?


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

// ✅ SOLUTION I
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

console.log(findTwoSum(nums, target));


// ✅ SOLUTION II
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


// ✅ SOLUTION III
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


