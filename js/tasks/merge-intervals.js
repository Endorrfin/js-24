// ============ 01 MERGE INTERVALS ============

/*
* Условия задачи следующие: на вход подается массив интервалов (от и до).
* К примеру, речь идет о начале и окончании встреч. На выход вы должны вернуть новый массив интервалов, в котором будут помечены все занятые встречами отрезки времени.
* Если два каких-то митинга пересекаются, то в результат должен попасть один отрезок времени с самым ранним началом и самым поздним окончанием из этих двух встреч.
* Митинги также считаются пересекающимися, если один начинается ровно  тогда, когда закончился предыдущий.
* */


let input1 = [[1,3], [2,6], [8, 10], [15, 18]];
let input2 = [[1, 4], [4, 5]];
let input3 = [[11, 12], [2, 3], [5, 7], [1, 4], [8, 10], [6, 8]];


// -------------- Solution 1.1  --------------
function merge(intervals) {
    if (intervals.length < 2) return intervals;

    // sorted be first element in each array
    intervals.sort((a, b) => a[0] - b[0]);


    let result = [intervals[0]];
    for (let interval of intervals) {
        let recent = result[result.length - 1];

        if (recent[1] >= interval[0]) {
            recent[1] = Math.max(recent[1], interval[1])
        } else {
            result.push(interval);
        }
    }
    return result;
}

// console.log(merge(input1));
// console.log(merge(input2));
// console.log(merge(input3));
