// ============ Math ============


// ------- Case 1.1 - найти максимальное значение элементов в массиве  -------
const numbers = [50, 20, 70, 60, 45, 30, 90, 10, -30, 300, 48, 56, 11, 22, 4];
let maxValueUsingCall = Math.max.call(null, ...numbers);
let maxValueUsingApply = Math.max.apply(null, numbers);
// console.log('maxValueUsingCall', maxValueUsingCall);
// console.log('maxValueUsingApply', maxValueUsingApply);
