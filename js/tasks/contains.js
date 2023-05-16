
/*
  Есть функция, которая на вход принимает 2 аргумента, 1-й - элемент, 2-й массив.
  Нужно написать реализацию при котором, эта функция проверяет, когда передаем в нее параметры,
  если элемента в массиве нет - добавляет его, если есть, то его не добавляет в массив.
  function has( el, arr) { const result = arr.includes(el) ? arr : arr.push(el) return arr }
  let arr = ['a', 'b']
  console.log(has('c', arr))
  1. Реализовать с помощью методов: IndexOf, Includes, Find, Some, FindIndex
  2. Реализовать в mutable & immutable style

* */

const array = [1, 2, 3, 4, 5, 7, 9, 11, 12, 14, 16, 18, 20];

// ------------ Solution 1.1 - using loop ------------
function contains1 (array, element) {
  // debugger;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) return true;
  }

  array.push(element);
}

// console.log(contains1(array, 12345));
// console.log(array);


// ------------ Solution 1.2 - using indexOf ------------
function contains2 (array, element) {
  const hasElement = array.indexOf(element) !== -1;
  if (hasElement) {
    return hasElement
  }

  array.push(element);
}

// console.log(contains2(array, 4));
// console.log(array);


// ------------ Solution 1.3 - using lastIndexOf ------------
function contains3 (array, element) {
  const hasElement = array.lastIndexOf(element) > -1;
  if (hasElement) {
    return;
  }

  return array.push(element);
}

// console.log(contains3(array, 30));
// console.log(array);


// ------------ Solution 1.4 - using includes ------------
function contains4 (array, element) {
  if (!array.includes(element)) return array.push(element);


}

// console.log(contains4(array, 31));
// console.log(array);



// ------------ Solution 1.5 - using some ------------
function contains5 (array, element) {
  const isExist = array.some(item => item === element);
  console.log(isExist)
  if (!isExist) return array.push(element);
}

// console.log(contains5(array, 25));
// console.log(array);


