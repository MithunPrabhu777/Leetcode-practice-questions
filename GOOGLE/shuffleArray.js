
var Solution = function (nums) {
    this.nums = nums;
    this.resetArray = [...nums];
};

Solution.prototype.reset = function () {
    return this.resetArray;
};

Solution.prototype.shuffle = function () {

    const n = this.nums.length;
    const numsArray = this.nums;

    for (let i = 0; i < n; i++) {
        const j = Math.floor(Math.random() * (n - i)) + i;
        const tmp = numsArray[i];
        numsArray[i] = numsArray[j];
        numsArray[j] = tmp;
    }

    return numsArray;
};

Input
["Solution", "shuffle", "reset", "shuffle"]
[[[1, 2, 3]], [], [], []]
Output
[null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]