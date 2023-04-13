
/*
A function called pairs() takes an array, for example [3,1,8].
It should return all pairs, e.g. for mentioned example: [[3,1],[3,8],[1,8]].
Implement it please
*/

const array = [3, 1, 8, 4];

function pairs(arr) {
  const result = [];
  for(let i = 0; i < arr.length -1; i++) {
    for(let j = i + 1; j < arr.length; j++) {
      result.push([arr[i], arr[j]]);
    }
  };
  return result;
};

// console.log(pairs(array));