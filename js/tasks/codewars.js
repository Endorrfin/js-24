






// -------------- 001 Exercise case I --------------

/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers.
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
Write a method that takes the array as an argument and returns this "outlier" N.

  Examples
  [2, 4, 0, 100, 4, 11, 2602, 36]
  Should return: 11 (the only odd number)

  [160, 3, 1719, 19, 11, 13, -21]
  Should return: 160 (the only even number)
*/

// Find The Parity Outlier



function findOutlier(integers){
  const oddArray = [];
  const evenArray = [];
  for (let integer of integers) {
    if (integer % 2) {
      evenArray.push(integer)
    } else {
      oddArray.push(integer)
    }
  }

  return oddArray.length === 1 ? oddArray[0] : evenArray[0];
}

console.log((findOutlier([0, 1, 2])));
console.log((findOutlier([1, 2, 3])));
console.log((findOutlier([2, 6, 8, 10, 3])));
console.log((findOutlier([0, 0, 3, 0, 0])));
console.log((findOutlier([1, 1, 0, 1, 1])));


// -------------- 001 Exercise case II --------------

function findOutlierClever1 (int){
  const even = int.filter(a => a % 2 === 0);
  const odd = int.filter(a  => a % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
}



// -------------- 001 Exercise case III --------------

function findOutlierClever2 (integers){
  return integers.slice(0,3).filter(even).length >= 2 ?
      integers.find(odd) : integers.find(even);
}
function even(num){
  return (num % 2 === 0);
}
function odd(num){
  return !even(num)
}
