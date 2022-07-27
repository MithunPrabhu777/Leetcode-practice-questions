var searchRange = function (nums, target) {
    let result = new Array(2).fill(-1);

    let left = 0, right = nums.length - 1;

    while (left <= right) {
        let mid = (left + right) >> 1;

        if (nums[mid] > target || nums[mid] === target) right = mid - 1;
        else left = mid + 1;
    }

    if (nums[left] === target) result[0] = left;

    left = 0, right = nums.length - 1;

    while (left <= right) {
        let mid = (left + right) >> 1;

        if (nums[mid] < target || nums[mid] === target) left = mid + 1;
        else right = mid - 1;
    }

    if (nums[right] === target) result[1] = right;

    return result;
};

let nums = [5, 7, 7, 8, 8, 10], target = 8;
console.log(searchRange(nums, target));