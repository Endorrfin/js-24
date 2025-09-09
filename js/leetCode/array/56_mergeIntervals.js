// ============ 01 MERGE INTERVALS ============

/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
and return an array of the non-overlapping intervals that cover all the intervals in the input.

    Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

    Example 2:
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

    Example 3:
Input: intervals = [[4,7],[1,4]]
Output: [[1,7]]
Explanation: Intervals [1,4] and [4,7] are considered overlapping.

    Constraints:
1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
 */


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
    console.log('🔹🔷🟦 SORT', intervals)


    let result = [intervals[0]];
    for (let interval of intervals) {
        let recent = result[result.length - 1]; // last element from result
        console.log('🌜 recent', recent)

        if (recent[1] >= interval[0]) {
            recent[1] = Math.max(recent[1], interval[1]) // merger of greater value
        } else {
            result.push(interval);
        }
    }
    return result;
}

// console.log('✅ FINAL RESUL', merge(input1));
// console.log('✅ FINAL RESUL', merge(input2));
// console.log('✅ FINAL RESUL', merge(input3));
