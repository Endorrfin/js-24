
// ============ FIND AVERAGE AGE ============
const users = [
  {
    role: 'developer',
    age: 22,
    gender: 'male',
  },
  {
    role: 'project manager',
    age: 34,
    gender: 'female',
  },
  {
    role: 'qa',
    age: 28,
    gender: 'male',
  },
  {
    role: 'developer',
    age: 31,
    gender: 'male',
  },
]

// ------- Solution 1.1 -------
const sumAge = users.reduce((acc, current) => {
  return {
    age: acc.age + current.age
  }
})

let result = Math.round(sumAge.age / users.length);
// console.log('Users', users);
// console.log('sumAge', sumAge);
// console.log('Average age is', result);