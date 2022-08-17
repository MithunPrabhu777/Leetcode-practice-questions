var eraseOverlapIntervals = function (intervals) {
    let count = 0;

    intervals.sort((a, b) => a[1] - b[1]);

    let previous = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < previous[1]) {
            count += 1;
        } else {
            previous = intervals[i];
        }
    }

    return count;
};

Input: intervals = [[1, 2], [1, 2], [1, 2]]
Output: 2
// Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.