// https://www.codewars.com/kata/5296bc77afba8baa690002d7

const puzzle = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

const solution = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

function sudoku(puzzle) {
  if (!isPuzzleValid(puzzle)) {
    return false;
  }

  if (isPuzzleFull(puzzle)) {
    return puzzle;
  }

  const clone = getClone(puzzle);
  const [x, y] = getEmptyCoorinats(clone);
  for (let i = 1; i <= 9; i++) {
    clone[y][x] = i;

    const result = sudoku(clone);
    if (Array.isArray(result)) {
      return result;
    }
  }
}

function getRow(puzzle, number) {
  const row = [];

  for (let i = 0; i < 9; i++) {
    row.push(puzzle[number][i]);
  }

  return row;
}

function getColumn(puzzle, number) {
  const column = [];

  for (let i = 0; i < 9; i++) {
    column.push(puzzle[i][number]);
  }

  return column;
}

function getSquare(puzzle, number) {
  const sx = number % 3;
  const sy = parseInt(number / 3, 10);

  const square = [];

  for (let y = sy * 3; y < sy * 3 + 3; y++) {
    for (let x = sx * 3; x < sx * 3 + 3; x++) {
      square.push(puzzle[y][x]);
    }
  }

  return square;
}

function isValid(line) {
  const collection = new Set();

  for (const item of line) {
    if (item === 0) continue;
    
    if (collection.has(item)) return false;

    collection.add(item);
  }

  return true;
}

function getClone(puzzle) {
  const copy = [];

  for (let y = 0; y < 9; y++) {
    const row = [];

    for (let x = 0; x < 9; x++) {
      row.push(puzzle[y][x]);
    }

    copy.push(row);
  }

  return copy;
}

function isPuzzleFull(puzzle) {
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (puzzle[y][x] === 0) {
        return false;
      }
    }
  }

  return true;
}

function isPuzzleValid(puzzle) {
  for (let i = 0; i < 9; i++) {
    if (
        !isValid(getRow(puzzle, i)) ||
        !isValid(getColumn(puzzle, i)) ||
        !isValid(getSquare(puzzle, i))
    ) {
      return false;
    }
  }

  return true;
}

function getEmptyCoorinats(puzzle) {
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (puzzle[y][x] === 0) {
        return [x, y];
      }
    }
  }
}
