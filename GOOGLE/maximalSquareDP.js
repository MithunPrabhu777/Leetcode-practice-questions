var maximalSquare = function (matrix) {

    let row = matrix.length, col = matrix[0].length;

    if (row == 0) return 0;

    let largest = 0;

    let dp = Array(row + 1).fill(0).map(item => Array(col + 1).fill(0));

    for (let i = 1; i <= matrix.length; ++i) {
        for (let j = 1; j <= matrix[0].length; ++j) {

            if (matrix[i - 1][j - 1] == "1") {
                dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
                largest = Math.max(largest, dp[i][j]);
            }
        }
    }

    return largest * largest;
};


Input: matrix = [["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]
Output: 4