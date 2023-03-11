/*
Задача с LeetСode про пересечение двух массивов — 350. Intersection of Two Arrays II.
Задача easy уровня сложности.
Для решения данной задачи мы будем использовать алгоритм с созданием хешмапа.
По условиям: необходимо написать функцию, которая принимает на вход два массива с числами.
На выходе мы должны вернуть новый массив, который будет в себе содержать только те элементы, которые встречались в обоих массивах.
Важно заметить, что если в первом массиве у нас было, например, три двойки, а во втором массиве было четыре двойки — в результирующем массиве их должно быть три.
Так как три двойки встречались и в первом, и во втором массиве.
Помним, что все задачи с LeetСode нужно решать наиболее оптимальным способом как по времени, так и по памяти. (Новичкам в этой теме рекомендую прочитать про Big O).

? https://leetcode.com/problems/intersection-of-two-arrays-ii/
*/

const input1 = [61, 24, 20, 58, 95, 53, 17, 32, 45, 85, 70, 20, 83, 62, 35, 89, 5, 95, 12, 86, 58, 77, 30, 64, 46, 13, 5, 92, 67, 40, 20, 38, 31, 18, 89, 85, 7, 30, 67, 34, 62, 35, 47, 98, 3, 41, 53, 26, 66, 40, 54, 44, 57, 46, 70, 60, 4, 63, 82, 42, 65, 59, 17, 98, 29, 72, 1, 96, 82, 66, 98, 6, 92, 31, 43, 81, 88, 60, 10, 55, 66, 82, 0, 79, 11, 81, 61];
const input2 = [5, 25, 4, 39, 57, 49, 93, 79, 7, 8, 49, 89, 2, 7, 73, 88, 45, 15, 34, 92, 84, 38, 85, 34, 16, 6, 99, 0, 2, 36, 68, 52, 73, 50, 77, 44, 61, 48, 61];
// Expected [5,4,57,79,7,89,88,45,34,92,38,85,6,0,77,44,61,61]

// ! Option I
let intersect = function (nums1, nums2) {
  let result = [];

  let map = nums1.reduce((acc, i) => {
    acc[i] = acc[i] ? acc[i] + 1 : 1;
    return acc;
  }, {});

  // console.log(map);

  for (let i = 0; i < nums2.length; i++) {
    let current = nums2[i];
    let currentMapItem = map[current];

    if (currentMapItem && currentMapItem > 0) {
      result.push(current);
      map[current] = currentMapItem - 1;
    }
  }

  return result;
};


// console.log(intersect(input1, input2))

const arr1 = [1, 2, 3, 4, 5, 2]
const arr2 = [2, 3, 7, 8, 3, 2]
// console.log(intersect(arr1, arr2))


// ! Option II
const intersect2 = function (nums1, nums2) {
  let result = nums1.filter((item, index) => {
    return nums2.indexOf(item) > -1 ? nums2.splice(nums2.indexOf(item), 1) : false
  });

  return result;
}

// console.log(intersect2(input1, input2))


// ! Option III
const intersect3 = function (nums1, nums2) {
  let result = []

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] !== 'undefined' && nums1[i] === nums2[j]) {
        result.push(nums1[i])
        delete nums1[i]
        delete nums2[j]
        break;
      }
    }
  }

  return result
}

// ! Option IV
const intersect4 = (nums1, nums2) => {
  const map = nums1.reduce((acc, n) => ({
    ...acc,
    [n]: ++acc[n] || 1
  }), {})
  return nums2.filter(n => map[n]-- > 0)
}

// console.log(intersect(arr1, arr2));


// ! Option V
const intersect5 = function (nums1, nums2) {
  const a = nums1.slice()
  const b = nums2.slice()
  const res = []

  for (let index = 0; index < a.length; index++) {
    const i = b.indexOf(a[index])
    if (i > -1) {
      res.push(a[index])
      delete a[index]
      delete b[i]
    }
  }

  return res
}

// console.log(intersect(arr1, arr2));



// ============ FIND INTERSECTION TWO ARRAYS ============
const array1 = [1, 444, 23, 3, 4, 5, 8888, 1337, -30];
const array2 = [1337, 12, 455, 3, 8, 5, 8888, 1338, -30];

// ------- Solution 1.1 -------
const result = array1.filter((x) => array2.indexOf(x) !== -1);

// console.log('intersection result', result);