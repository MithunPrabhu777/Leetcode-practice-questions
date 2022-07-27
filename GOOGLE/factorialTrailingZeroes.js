var trailingZeroes = function (n) {
    let count = 0;

    while (n >= 5) {
        count += (n = Math.floor(n / 5) || 0);
    }

    return count;
};

Input: n = 5
Output: 1
// Explanation: 5! = 120, one trailing zero.