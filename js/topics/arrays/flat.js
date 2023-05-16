/*
  Этот метод — новинка в мире JavaScript. flat() создаёт новый массив из всех подмассивов в нём.
  Он принимает один параметр — глубину «сглаживания» массива:
* */

const arrayNumbers = [1, 2, 3, [4, [[[5, [6, 7]]]], 8, [[[9, [[[[[10]]]]]]]]]];

// -------------- Case 1.1 --------------

const flattenOnce = arrayNumbers.flat()
// console.log(flattenOnce);

const flattenTwice = arrayNumbers.flat(2)
// console.log(flattenTwice);

const flattenInfinity = arrayNumbers.flat(Infinity)
// console.log(flattenInfinity);



// -------------- Case 1.2 --------------




