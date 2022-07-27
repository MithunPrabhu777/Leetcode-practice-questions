var countSmallerBinarySearch = function (nums) {
    let sorted = [], result = [];
    for (let i = nums.length - 1; i >= 0; i--) {   // nums = [5, 2, 6, 1] result = [2,1,1,0] , sorted = [1,2,5,6] 
        let left = 0, right = sorted.length;          // i = 2 , left = 2 , right = 2 , mid = 2
        while (left < right) {
            let mid = left + Math.floor((right - left) / 2);
            if (nums[i] > sorted[mid]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        result.unshift(left);
        sorted.splice(left, 0, nums[i]);
    }
    return result;
}

Input: nums = [5, 2, 6, 1]
Output: [2, 1, 1, 0]