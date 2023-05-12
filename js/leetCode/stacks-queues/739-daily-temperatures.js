/*
739. Daily Temperatures
Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
Example 2:

Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]
Example 3:

Input: temperatures = [30,60,90]
Output: [1,1,0]

Constraints:
1 <= temperatures.length <= 105
30 <= temperatures[i] <= 100

* */

const temperatures = [13, 12, 15, 11, 9, 12, 16] // Output: [1,1,4,2,1,1,0,0]
// const temperatures = [30,40,50,60] // Output: [1,1,1,0]

// ------------ Solution 1.1 - Time: O(n*2)------------
const dailyTemperature = function(t) {
  // int[] answer = new int[t.length];
  let answer = t.length;
  for(let i = 0; i < t.length; i++) {
    for (let k = i + 1; k < t.length; k++) {
      if (t[k] > t[i]) {
        answer[i] = k-i;
        break;
      }
    }
  }
  return answer
}

// console.log(dailyTemperature(temperatures));



// ------------ Solution 1.2 - Time: O(n) Memory O(n)------------

class C {
  let = value;
  let = index;

  constructor(value, index) {
    this.value = value;
    this.index = index;
  }
}

const dailyTemperatures = function(t) {
  // Stack<C> stack = new Stack<>();
  let answer = new [t.length];
  for (let i = t.length-1; i >= 0; i--) {
    while(!stack.isEmpty() && stack.peek().value <= t[i]) {
      stack.pop();
    }

    if(!stack.isEmpty()) {
      answer[i] = stack.peek().index - i;
    }
    stack.push(new C(t[i], i));
  }
  return answer;
}

// console.log(dailyTemperatures(temperatures));





