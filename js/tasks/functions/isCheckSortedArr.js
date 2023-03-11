let arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let arr2 = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];
let arr3 = [100, 90, 80, 70, 60, 10, 20, 30, 40, 50];
let arr4 = [10, 20, 30, 40, 50, 100, 90, 80, 70, 60];
let arr5 = [2, 1, 3];
// let arr5 = [3, 2, 1];


// -------------- Solution 1.1 --------------
function isCheckSortedArr(arr) {
    let sortedForward = true;
    let sortedBackward = true;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
            sortedBackward = false;
        } else if (arr[i] > arr[i + 1]) {
            sortedForward = false;
        }
    }

    if (sortedForward || sortedBackward) {
        return true
    } else {
        return false
    }
}

// console.log(isCheckSortedArr(arr1));
// console.log(isCheckSortedArr(arr2));
// console.log(isCheckSortedArr(arr3));
// console.log(isCheckSortedArr(arr4));



// -------------- Solution 1.2 --------------
function isSortedArray(arr) {
    let isSortedAscending = false;
    let isSortedDescending = false;

    for (let i = 0; i < arr.length; i++) {
        debugger;
        if (arr[i] < arr[i + 1]) {
            isSortedAscending = true;
        } else if (arr[i] > arr[i + 1]) {
            isSortedDescending = true;
        }
    }

    return !isSortedAscending || !isSortedDescending;
}

// console.log(isSortedArray(arr1));
// console.log(isSortedArray(arr2));
// console.log(isSortedArray(arr3));
// console.log(isSortedArray(arr4));
// console.log(isSortedArray(arr5));