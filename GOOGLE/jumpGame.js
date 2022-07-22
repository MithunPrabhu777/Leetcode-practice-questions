/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let index = 0;
    let target = nums.length - 1;
    let max = 0;

    while (index <= target) {
        max = Math.max(max, index + nums[index]);

        if (max >= target) return true;

        if (index >= max && nums[index] === 0) return false;

        index++;
    }

    return false;
};

Input: nums = [2, 3, 1, 1, 4]
Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Input: nums = [3, 2, 1, 0, 4]
Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.