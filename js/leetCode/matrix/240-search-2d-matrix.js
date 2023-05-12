/*
240. Search a 2D Matrix II
Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.


Example 1:
Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
Output: true
Example 2:


Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
Output: false

Constraints:
m == matrix.length
n == matrix[i].length
1 <= n, m <= 300
-109 <= matrix[i][j] <= 109
All the integers in each row are sorted in ascending order.
All the integers in each column are sorted in ascending order.
-109 <= target <= 109

* */

const matrix = [
  [1,  4,  7,  11, 15],
  [2,  5,  8,  12, 19],
  [3,  6,  9,  16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
] // target = 5 || 20

// ------------ Solution 1.1 - Time: O(m*n)------------
const searchItemInMatrix = function(matrix, target) {
  if(matrix === 0 || matrix.length === 0 || matrix[0].length === 0) return false;

  let m = matrix.length
  let n = matrix[0].length;
  for(let i = 0; i < m; i++) {
    for(let k = 0; k < n; k++) {
      if(matrix[i][k] === target) {
        return true
      }
    }
  }
  return false;
}

// console.log(searchItemInMatrix(matrix, 20));


// ------------ Solution 1.2 - Time: O(m log n)------------
const searchItemInMatrix2 = function(matrix, target) {
  if(matrix === 0 || matrix.length === 0 || matrix[0].length === 0) return false;
  // debugger

  let m = matrix.length
  let n = matrix[0].length;
  for(let i = 0; i < m; i++) {
    let x = 0;
    let r = n - 1;

    while(x <= r) {
      let mid = x + (r - x) / 2;
      if(matrix[i][mid] === target) {
        return true;
      }

      if(matrix[i][mid] > target) {
        r = mid - 1;
      } else {
        x = mid + 1;
      }
    }
  }
  return false;
}

// console.log('---> initial data <--- ', matrix);
// console.log(searchItemInMatrix2(matrix, 21));
// console.log('---> data after manipulation <--- ', matrix);


// ------------ Solution 1.3 - Time: O(m + n)------------
const searchItemInMatrix3 = function(matrix, target) {
  if(matrix === 0 || matrix.length === 0 || matrix[0].length === 0) return false;
  // debugger

  let m = matrix.length
  let n = matrix[0].length;
  let i = 0;
  let k = n - 1;

  while(i < m && k >= 0) {
    if (matrix[i][k] === target) {
      return true
    }

    if (matrix[i][k] > target) {
      k--;
    } else {
      i++
    }
  }

  return false;
}

// console.log('---> initial data <--- ', matrix);
// console.log(searchItemInMatrix3(matrix, 22));
// console.log('---> data after manipulation <--- ', matrix);
