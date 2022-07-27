/**
 * @param {number[]} nums
 * @return {string}
 */

var largestNumber = function (nums) {

    nums.sort((numa, numb) => {
        let string1 = numa.toString();
        let string2 = numb.toString();
        return parseInt(string1 + string2) > parseInt(string2 + string1) ? -1 : 1
    });

    if (nums[0] == "0") return "0";

    return nums.join("");

};

Input: nums = [3, 30, 34, 5, 9]
Output: "9534330"