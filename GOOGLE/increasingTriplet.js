var increasingTriplet = function (nums) {
    let firstNumber = Infinity, secondNumber = Infinity;

    for (let thirdNumber of nums) {
        if (thirdNumber > firstNumber && thirdNumber > secondNumber) {
            return true;
        }

        if (thirdNumber > firstNumber) {
            secondNumber = thirdNumber;
        } else {
            firstNumber = thirdNumber;
        }
    }

    return false;
};

Input: nums = [2, 1, 5, 0, 4, 6]
Output: true
// Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6. // subsequence