var merge = function (intervals) {
    if (!intervals.length) return intervals;

    intervals.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);

    let previous = intervals[0];

    let result = [previous];

    for (let current of intervals) {
        if (current[0] <= previous[1]) {
            previous[1] = Math.max(current[1], previous[1]);
        } else {
            result.push(current);
            previous = current;
        }
    }

    return result;
};

Input: intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
Output: [[1, 6], [8, 10], [15, 18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].