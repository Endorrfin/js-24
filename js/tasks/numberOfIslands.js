/*
По условиям задачи: необходимо посчитать количество островов в матрице. 
Островом считаются единицы (1), которые находятся друг рядом с другом по горизонтали и по вертикали. Водой считаются ячейки матрицы с нулями. 

Для решения данной задачи мы используем с вами алгоритм DFS (depth first search). 
С его помощью мы решим данную задачу со сложностью O(m*n), где m — количество строк, а n — количество столбцов в матрице.

✅Задача на Leetcode: https://leetcode.com/problems/number-of-islands/

Example 1:

Input: grid = [
    ['1','1','1','1','0'],
    ['1','1','0','1','0'],
    ['1','1','0','0','0'],
    ['0','0','0','0','0']
]
Output: 1
Example 2:

Input: grid = [
    ['1','1','0','0','0'],
    ['1','1','0','0','0'],
    ['0','0','1','0','0'],
    ['0','0','0','1','1']
]
Output: 3
*/

let grid1 = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0']
];

let grid2 = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1']
];

let numIslands = function (grid) {
  if (grid.length === 0) return 0;
  let rowsL = grid.length;
  let colsL = grid[0].length;
  let counter = 0;

  function markNeighbours(binaryMatrix, R, C) {
    binaryMatrix[R][C] = '6';
    if (binaryMatrix?.[R - 1]?.[C] === '1') {
      markNeighbours(binaryMatrix, R - 1, C);
    }
    if (binaryMatrix?.[R + 1]?.[C] === '1') {
      markNeighbours(binaryMatrix, R + 1, C);
    }
    if (binaryMatrix[R][C - 1] === '1') {
      markNeighbours(binaryMatrix, R, C - 1);
    }
    if (binaryMatrix[R][C + 1] === '1') {
      markNeighbours(binaryMatrix, R, C + 1);
    }
  }

  for (let R = 0; R < rowsL; R++) {
    for (let C = 0; C < colsL; C++) {
      if (grid[R][C] === '1') {
        counter++;
        markNeighbours(grid, R, C);
      }
    }
  }

  //   console.log(grid);

  return counter;
};

// console.log(numIslands(grid1));
// console.log(numIslands(grid2));
