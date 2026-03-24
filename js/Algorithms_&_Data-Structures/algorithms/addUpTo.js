
/*
* What does better approach?
* Faster
* Less memory-intensive
* More readable
*
* */

// ------------ Solution 1.1 - using loop ------------
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i ++) {
    total += i;
  }
  return total;
}

let timeStart = performance.now();
// console.log(addUpTo(1000000000));
let timeFinish = performance.now();
// console.log(`#1. barChart_time_ua Elapsed: ${(timeFinish - timeStart).toFixed(2) / 1000} seconds.`);


// ------------ Solution 1.2 - using math methods ------------
function addUppToOptimize(n) {
  return n * (n + 1) / 2;
}

let t1 = performance.now();
// console.log(addUppToOptimize(1000000000));
let t2 = performance.now();
// console.log(`#2. barChart_time_ua Elapsed: ${(t2 - t1).toFixed(2) / 1000} seconds.`);

