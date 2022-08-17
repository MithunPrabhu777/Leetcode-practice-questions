


var insert = function (intervals, newInterval) {
    if (intervals.length === 0) {
        return [newInterval];
    }

    const result = [];
    let flag = 0;
    let i;

    for (i = 0; i < intervals.length; i++) {
        const interval = intervals[i];

        if (newInterval[0] > interval[1]) {

            result.push(interval);

        } else if (newInterval[1] < interval[0]) {

            result.push(newInterval);
            flag = 1;
            break;

        } else {

            newInterval[0] = Math.min(newInterval[0], interval[0]);
            newInterval[1] = Math.max(newInterval[1], interval[1]);

        }
    }

    if (flag === 0) {

        result.push(newInterval);
        return result;

    } else {

        return result.concat(intervals.splice(i));

    }
};

//O(n) time and O(n) space