/*

15. 3Sum
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105

* */

const array = [-1,0,1,2,-1,-4];


// ------------ Solution 1.1 - O(n^2) ------------
const threeSum = function(array, target = 0) {
  const result = [];

  if (array.length < 3) return result;

  const arraySorted = array.sort((a, b) => a - b);
  for (let i = 0; i < arraySorted.length; i++) {
    if (arraySorted[i] > target) break;

    if (i > 0 && arraySorted[i] === arraySorted[i - 1]) continue;

    let g = i + 1;
    let k = arraySorted.length - 1;

    while(g < k) {
      let sum = arraySorted[i] + arraySorted[g] + arraySorted[k];

      if (sum === target) {
        result.push([arraySorted[i], arraySorted[g], arraySorted[k]]);

        while(arraySorted[g] === arraySorted[g + 1]) g++;
        while(arraySorted[k] === arraySorted[k - 1]) k--;

        g++;
        k--;
        continue;
      }

      if (sum < target) {
        g++;
        continue
      }

      if (sum > target) {
        k--;
        continue;
      }
    }
  }
  return result;
}

// console.log(array, threeSum(array));


// ------------ Solution 1.2 - O(n^2) ------------
const threeOfSum = (nums, target = 0) => {
  const cash = {}
  const mas = []

  for(let i = 0; i < nums.length; i++){
    cash[nums[i]] = i
  }

  for(let i = 0; i < nums.length; i++){
    let sum = target - nums[i] - nums[i + 1]
    if(cash[sum] && nums[sum] !== i){
      mas.push([sum, nums[i], nums[i + 1]])
    }
  }

  return mas || []
}

// console.log(array, threeOfSum(array));




