


// 🎯 #3 trapping rainwater
/*
🔗 Reference leetcode: https://leetcode.com/problems/trapping-rain-water/description/
v1
Given an array of integers representing an elevation map where the width of each bar is 1, return how much rainwater can be trapped.
v2
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Step 1. Verify the constraints

Q. Doest the thickness of the lines affect the area?
A. No, assume they take up no space.

Q. Do the left and right sides of the graph count as walls?
A. No, the sides cannot be used to form a container.

Q. Does a higher line inside our container affect our area?
A. No, lines inside a container don't affect the area.
* */

const elevationArray = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]

// ✅ SOLUTION I
const getTrappedRainwater = function(heights) {
  let totalWater = 0;

  for(let p = 0; p < heights.length; p++) {
    let leftP = p, rightP = p, maxLeft = 0, maxRight = 0;

    while(leftP >= 0) {
      maxLeft = Math.max(maxLeft, heights[leftP]);
      leftP--;
    }

    while(rightP < heights.length) {
      maxRight = Math.max(maxRight, heights[rightP]);
      rightP++;
    }

    const currentWater = Math.min(maxLeft, maxRight) - heights[p];

    if(currentWater >= 0) {
      totalWater += currentWater;
    }
  }

  return totalWater;
}

console.log(getTrappedRainwater(elevationArray));


// ✅ SOLUTION II OPTIMAL

/*
1. Identify the pointer with the lesser value
2. Is this pointer value greater than or equal to max on that side
    yes -> update max on that side
    no -> get water for pointer, add to total
3. move pointer inwards
4. repeat for other pointer
*/


const getTrappedRainwaterOptimal = function(heights) {

  let left = 0, right = heights.length - 1, totalWater = 0, maxLeft = 0, maxRight = 0;

  while(left < right) {
    if(heights[left] <= heights[right]) {
      if(heights[left] >= maxLeft) {
        maxLeft = heights[left]
      } else {
        totalWater += maxLeft - heights[left];
      }
      left++;
    } else {
      if(heights[right] >= maxRight) {
        maxRight = heights[right];
      } else {
        totalWater += maxRight - heights[right];
      }

      right--;
    }
  }

  return totalWater;
}


console.log(getTrappedRainwaterOptimal(elevationArray));




