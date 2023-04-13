/*
Горный массив — это массив, который условно можно разделить на 2 части — возрастающую и убывающую, а на стыке этих двух частей находится пик, который нам необходимо найти. В возрастающей части числа отсортированы в порядке возрастания. И в убывающей — в порядке убывания. При этом может быть ситуация, когда возрастающая или убывающая часть полностью отсутствуют.А наивысшая точка (пик) все равно будет присутствовать.

Ссылка на LeetCode с условием задачи:  https://leetcode.com/problems/peak-index-in-a-mountain-array/
*/

let arr1 = [1, 2, 3, 4, 3, 2, 1];
let arr3 = [10, 9, 8, 7, 6];
let arr2 = [1, 2, 3, 4, 5, 6, 5, 4, 3, 2];

let peakIndexInMountainArray = function (arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        const middle = Math.floor((start + end) / 2);

        // console.log({
        //     s: arr[start],
        //     m: arr[middle],
        //     e: arr[end],
        //     start,
        //     middle,
        //     end
        // });

        if (arr[middle] < arr[middle + 1]) {
            start = middle + 1;
        } else {
            end = middle;
        }
    }
    // console.log({
    //     s: arr[start],
    //     e: arr[end],
    //     start,
    //     end
    // });
    return start;
};

// console.log(peakIndexInMountainArray(arr3));
// console.log(peakIndexInMountainArray(arr2));