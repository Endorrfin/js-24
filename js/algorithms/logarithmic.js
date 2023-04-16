
// ============ LOGARITHMIC COMPLEXITY O(log n) || O (N^2) ============


// -------------- Case 1.1 - complexity O(n^2) --------------

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumi = 0;
let sumj = 0;

for (let i = 0; i < array.length; i++) {
  sumi += array[i];
  for (let j = 0; j < array.length; j++) {
    sumj += array[j];
  }

}

// console.log('sumi', sumi, 'sumj', sumj);


// -------------- Case 1.2 - complexity O(A * B) --------------
const arrayPair = [[2, 4], [6, 8], [5, 7], [17, 18]];
const start = Date.now();
let sumPair = 0;
for (let i = 0; i < arrayPair.length; i++) {
  for (let j = 0; j < arrayPair[i].length; j++) {
    sumPair += arrayPair[i][j];
  };
};

const end = Date.now();
// console.log(`Execution time: ${end - start} ms`);
// console.log('sumPair', sumPair);



