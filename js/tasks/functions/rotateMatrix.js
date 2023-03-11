// source: https://vladilen.notion.site/JavaScript-473541d86991472fb844c5fa35d5dbf4

/*
* Перевернуть матрицу 3х3
* Напишите функцию, которая принимает матрицу 3х3 и переворачивает на 90 градусов по часовой стрелке.
* Дополнительно**: Напишите еще 2 функции, которые переворачивают матрицу на 180 и 270 градусов.
* Input: Number[][]
* Output: Number[][]
*
[1, 2, 3]    [7, 4, 1]
[4, 5, 6] -> [8, 5, 2]
[7, 8, 9]    [9, 6, 3]
* */

// ============ Is the string reversed? ============

// -------------- Solution 1.1 --------------
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

function rotate90(source) {
  // todo
  const newMatrix = source[0].map(() => [])

  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < source[0].length; j++) {
      newMatrix[j][source.length - 1 - i] = source[i][j]
    }
  }

  return newMatrix
}

// console.log(rotate90(matrix))





// -------------- Solution 1.2 --------------
function rotate180(source) {
  return rotate90(rotate90(source))
}


// -------------- Solution 1.3 --------------
function rotate270(source) {
  return rotate180(rotate90(source))
}