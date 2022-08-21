
var TimeMap = function () {
    this.map = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
    let bucket = this.map[key] || [];
    this.map[key] = bucket;
    bucket.push([value, timestamp]);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp, value = "") {
    if (!this.map[key]) {
        return "";
    }
    let [left, right] = [0, this.map[key].length - 1];

    while (left <= right) {
        const mid = left + right >> 1;

        const [guessValue, guessTimestamp] = this.map[key][mid];

        const isTargetMore = guessTimestamp <= timestamp;

        if (isTargetMore) {
            value = guessValue;

            left = mid + 1;
        }

        const isTargetLess = guessTimestamp > timestamp;

        if (isTargetLess) right = mid - 1;

    }

    return value;
};

Input: ["TimeMap", "set", "set", "get", "set", "get", "get"]
[[], ["a", "bar", 1], ["x", "b", 3], ["b", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]

output: [null, null, null, "", null, "bar2", "bar2"]