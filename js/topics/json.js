
// ============ TRANSFORM TO JSON ============
const user = {
  name: 'Eva',
  age: 24,
  gender: 'female'
}

// ------- Solution 1.1 -------
let user2 = JSON.parse(JSON.stringify(user));
// console.log('user2', user2);