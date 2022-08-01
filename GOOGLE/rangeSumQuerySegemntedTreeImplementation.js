
var NumArray = function (nums) {
    this.n = nums.length;
    this.segTree = new Array(this.n * 2);
    this.build(nums);
};

NumArray.prototype.build = function (nums) {

    let length = this.n;
    let j = 0;

    for (var i = length; i < length * 2; i++) {
        this.segTree[i] = nums[j];
        j++;
    }

    for (i = length - 1; i > 0; i--) {
        this.segTree[i] = this.segTree[i * 2] + this.segTree[i * 2 + 1];
    }

}

NumArray.prototype.update = function (index, val) {

    let length = this.n;
    index += length;
    this.segTree[index] = val;

    while (index > 1) {

        let left = index, right = index;

        if (index % 2 === 0) {
            right = index + 1;
        } else {
            left = index - 1;
        }

        index = Math.floor(index / 2);
        this.segTree[index] = this.segTree[left] + this.segTree[right];
    }

};

NumArray.prototype.sumRange = function (left, right) {

    let length = this.n;
    left += length, right += length;
    let sum = 0;

    while (left <= right) {

        if (left % 2 === 1) {
            sum += this.segTree[left];
            left++;
        }

        if (right % 2 === 0) {
            sum += this.segTree[right];
            right--;
        }

        left = Math.floor(left / 2);
        right = Math.floor(right / 2);

    }

    return sum;

};

Input
["NumArray", "sumRange", "update", "sumRange"]
[[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]
Output
[null, 9, null, 8]