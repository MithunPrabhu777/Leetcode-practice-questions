var wiggleSort = function (nums) {
    nums.sort((a, b) => a - b);

    let temp = [...nums];

    let low = Math.floor((nums.length - 1) / 2), high = nums.length - 1;

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            nums[i] = temp[low];
            low--;
        } else {
            nums[i] = temp[high];
            high--;
        }
    }

    return nums;
};

Input: nums = [1, 5, 1, 1, 6, 4]
Output: [1, 6, 1, 5, 1, 4]
// Explanation: [1,4,1,5,1,6] is also accepted.