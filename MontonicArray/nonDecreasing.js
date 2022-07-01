var checkPossibility = function(nums) {
    let modified = 0;
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] > nums[i + 1]) {
        if (modified++ || nums[i - 1] > nums[i + 1] && nums[i] > nums[i + 2]) return false;
      }
    }
    return true;
};

let nums = [4,2,3];
console.log(checkPossibility(nums));