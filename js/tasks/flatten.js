// source: https://vladilen.notion.site/JavaScript-473541d86991472fb844c5fa35d5dbf4

/**
 * Плоский массив
 * Напишіть функцію, яка приймає массив із вкладеними масивами та разпакуйте в  * рузультуючий плоский масив. Результатом буде новий одномірний масив
 * Input**: Array
 * Output**: Array
 * */

// ------- Solution 1.2 - using loop -------

function flatten(array) {
  const res = [];
  for(let i = 0; i < array.length; i++) {
    if(Array.isArray(array[i])) {
      const flat = flatten(array[i]);
      for(let j = 0; j < flat.length; j++) {
        res.push(flat[j]);
      }
    } else {
      res.push(array[i]);
    }
  }
  return res;
}

// console.log(flatten([[1], [[2, 3]], [[[4]]]]));
// console.log(flatten([[1], [[2]], [[[3]]], [[[[4]]]], [[[[[5]]]]], [[[[[[6, 7, 8, 9]]]]]], 0]));


// ------- Solution 2.1 - using stack -------
function flattenUseStack(...stack) {
  const result = [];
  while(stack.length) {
    const element = stack.shift();
    if(Array.isArray(element)) {
      stack.unshift(...element)
      continue;
    }

    result.push(element)
  }

  return result
}

// console.log(flattenUseStack(1, [2, [[3]]], 4, 5, [6, [7]]));
// console.log(flattenUseStack('a', ['b', 2], 3, null, [[4], ['c']]));


// ------- Solution 2.1 - using stack -------
function flattenDeep(array) {
  // debugger;
  return array.reduce((flattenArray, element) => {
    return Array.isArray(element)
        ? [...flattenArray, ...flattenDeep(element)]
        : [...flattenArray, element]
  }, [])
}
//
// console.log(flattenDeep([[1], [[2, 3]], [[[4]]]]));
// console.log(flattenDeep([[1], [[2]], [[[3]]], [[[[4]]]], [[[[[5]]]]], [[[[[[6, 7, 8, 9]]]]]], 0]));
