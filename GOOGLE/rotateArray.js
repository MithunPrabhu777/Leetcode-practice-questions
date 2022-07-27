var rotate = function (nums, k) {

    let stack = [];

    k %= nums.length;

    while (k > 0) {
        stack.push(nums.pop());
        k--;
    }

    return nums.unshift(...stack.reverse());

};

// O(N) time complexity
Input: nums = [1, 2, 3, 4, 5, 6, 7], k = 3
Output: [5, 6, 7, 1, 2, 3, 4]