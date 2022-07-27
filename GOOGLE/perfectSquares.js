function numSquares(n) {
    let dp = Array(n + 1).fill(Infinity);
    dp[0] = 0; // number of perfect square to get here;
    for (let g = 1; g <= n; g++) {
        for (let k = 1; k * k <= g; k++) {
            dp[g] = Math.min(dp[g], dp[g - (k * k)] + 1)
        }
    }
    return dp[n];
}

let n = 12;
console.log(numSquares(n));
// Output: 3
// Explanation: 12 = 4 + 4 + 4.