var uniquePaths = function (m, n) {
    let dp = new Array(m + 1).fill(0).map(item => new Array(n + 1).fill(0));

    function recursion(row, col) {
        if (row === m && col === n) return 1;

        if (row > m || col > n) return 0;

        if (dp[row][col]) return dp[row][col];

        dp[row][col] = recursion(row + 1, col) + recursion(row, col + 1);

        return dp[row][col];
    }

    return recursion(1, 1);
}


Input: m = 3, n = 7
Output: 28