
/*
[1,2,3,4]
[5,18,0,12]
[3,5,12,5]
[28,9,2,34]

Should return => [4,18,12,34]
*/

// ------- SOLUTION 1.1 -------
function largestOfFour(arr) {
  let arrayOfMaxValues = [];
  for (let i = 0; i < arr.length; i++) {
    let subArr = arr[i];
    let maxSubArrVal = 0;
    for (let j = 0; j < subArr.length; j++) {
      let currentValue = subArr[j];
      if (currentValue > maxSubArrVal) {
        maxSubArrVal = currentValue;
      }
    }
    arrayOfMaxValues.push(maxSubArrVal);
  }
  return  arrayOfMaxValues;
}

// console.log(largestOfFour([1,2,3,4]));



// ------- SOLUTION 1.2 -------
function largestOfFour2(arr) {
  let arrayOfMaxValues = [];
  arr.forEach(subArr => {
    let maxSubArrVal = 0;
    subArr.forEach(item => {
      if (item > maxSubArrVal) {
        maxSubArrVal = item;
      }
    });
    arrayOfMaxValues.push(maxSubArrVal);
  });
  return  arrayOfMaxValues;
}

// console.log(largestOfFour2([1,2,3,4]));



// ------- SOLUTION 1.3 -------
function largestOfFour3(arr) {
  return arr.map(subArr => Math.max(...subArr));
}

// console.log(largestOfFour3([1,2,3,4]));

