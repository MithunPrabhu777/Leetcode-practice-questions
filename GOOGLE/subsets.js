/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var subsets = function (nums) {
    let finalArray = [];

    function subsetPattern(subset, index) {
        finalArray.push([...subset]);

        for (let i = index; i < nums.length; i++) {
            subset.push(nums[i]);
            subsetPattern(subset, i + 1);
            subset.pop();
        }
    }

    subsetPattern([], 0);

    return finalArray;
};

let nums = [1, 2, 3];
console.log(subsets(nums)); // pattern subsets