
/*
*
* f(n) could be linear (f(n) = n)
* f(n) could be quadratic (f(n) = n^2)
* f(n) could be constant (f(n) = 1)
* f(n) could be something entirely different!
*
* */


// -------------- Example 1 - O(n) operation inside of an O(n) operation -> O(n^2) --------------

function countUpAndDown (n) {
  console.log("Going Up!");
  for(let i = 0; i < n; i++) {
    console.log(i);
  }

  console.log('At the top!\nGoing down...');
  for(let k = n - 1; k >= 0; k--) {
    console.log(k);
  }
  console.log("Back down. Bye!");
}

// countUpAndDown(10);
