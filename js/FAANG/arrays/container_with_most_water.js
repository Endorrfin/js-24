// 🎯 #2 Container with most water

/*
🔗 https://leetcode.com/problems/container-with-most-water/description/
v1
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1

Constraints:
n == height.length
2 <= n <= 105
0 <= height[i] <= 104

Hint 1
If you simulate the problem, it will be O(n^2) which is not efficient.

Hint 2
Try to use two-pointers. Set one pointer to the left and one to the right of the array. Always move the pointer that points to the lower line.

Hint 3
How can you calculate the amount of water at each step?

v2
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
**/

const heightsArray = [7, 1, 2, 3, 9];

// ✅ SOLUTION I
const getMaxWaterContainer = function (heights) {
  let maxArea = 0;
  for (let p1 = 0; p1 < heights.length; p1++) {
    for (let p2 = p1 + 1; p2 < heights.length; p2++) {
      const height = Math.min(heights[p1], heights[p2]);
      const width = p2 - p1;
      const area = height * width;

      maxArea = Math.max(maxArea, area);
    }
  };

  return maxArea;
}

console.log(getMaxWaterContainer(heightsArray));


// ✅ SOLUTION II
const heightsArray2 = [4, 8, 1, 2, 3, 9];
const maxArea = function (heights) {
  let p1 = 0, p2 = heights.length - 1, maxArea = 0;
  console.log('🟫 p1, p2, maxArea', { p1, p2, maxArea});

  while (p1 < p2) {
    console.log('🟧🟧 p1, p2', {p1, p2})
    const height = Math.min(heights[p1], heights[p2]);
    const width = p2 - p1;
    const area = height * width;
    console.log('🟦🟦🟦 height, width, area', {height, width, area});
    maxArea = Math.max(maxArea, area);
    console.log('🟩🟩🟩🟩 maxArea', {maxArea});

    if (heights[p1] <= heights[p2]) {
      p1++;
    } else {
      p2--
    }
  }

  return maxArea;
}

console.log(maxArea(heightsArray));
console.log('=================================');
console.log(maxArea(heightsArray2));




