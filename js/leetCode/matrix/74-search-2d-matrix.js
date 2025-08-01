
/*
74. Search a 2D Matrix
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) barChart_time_ua complexity.

Example 1:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Example 2:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false

Constraints:
m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j], target <= 104
* */


// ------------ Solution 1.1 ------------
const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];
// const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];

// const matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]

const searchMatrix = function(matrix, target) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let left = 0;
  let right = rows * cols - 1;

  while(left <= right) {
    // let mid = Math.floor(left + (right - left));
    // let midVal = matrix[Math.floor(right/cols)][right%cols];
    let mid = Math.floor((left + right) / 2);
    let midVal = matrix[Math.floor(mid/cols)][mid%cols];

    if(midVal === target) return true;
    if(target < midVal) right = mid - 1;
    else left = mid + 1;
  }
  return false;
}

// console.log(searchMatrix(matrix));
