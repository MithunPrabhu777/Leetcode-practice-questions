var nextPermutation = function(nums) {
    let j = nums.length - 1, i = j - 1;
    while (nums[i + 1] <= nums[i]) i--;
    
    if (~i) {
        while (nums[j] <= nums[i]) j--;
        swap(nums, i, j);
    }
    
    for (let k = i + 1, stop = (i + nums.length) / 2; k < stop; k++) {
        swap(nums, k, nums.length - k + i);
    }

    return nums;
};

function swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

let nums = [1,2,3];
console.log(nextPermutation(nums));