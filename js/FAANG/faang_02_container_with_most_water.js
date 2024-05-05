// ============ INTERVIEW QUESTION #2 Container with most water ============

/*
You are given an array of positive integers where each integer represents the height of a vertical line on a chart.
Find two lines which together with the x-axis forms a container that would hold the greatest amount of water.
Return the area of water it would hold.

Step 1. Verify the constraints

Q. Doest the thickness of the lines affect the area?
A. No, assume they take up no space.

Q. Do the left and right sides of the graph count as walls?
A. No, the sides cannot be used to form a container.

Q. Does a higher line inside our container affect our area?
A. No, lines inside a container don't affect the area.

* */

const heightsArray = [7, 1, 2, 3, 9];

// -------------- Solution 1 --------------
const getMaxWaterContainer = function (heights) {
  let maxArea = 0;
  for (let p1 = 0; p1 < heights.length; p1++) {
    for (let p2 = p1 + 1; p2 < heights.length; p2++) {
      const height = Math.min(heights[p1], heights[2]);
      const width = p2 - p1;
      const area = height * width;

      maxArea = Math.max(maxArea, area);
    }
  };

  return maxArea;
}

console.log(getMaxWaterContainer(heightsArray));

