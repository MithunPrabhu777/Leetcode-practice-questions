var productExceptSelf = function (nums) {
    let result = [];

    let prev = 1;

    for (let num of nums) result.push(prev *= num);

    for (let prev = 1, i = nums.length - 1; i >= 0; prev *= nums[i--]) {
        result[i] = i ? prev * result[i - 1] : prev;
    }

    return result;
};

Input: nums = [1, 2, 3, 4]
Output: [24, 12, 8, 6]