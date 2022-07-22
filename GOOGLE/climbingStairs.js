var climbStairs = function (n) {
  let dp = new Array(n + 1).fill(0); // dp = [0,1,2]

  function recursion(n) {
    if (n == 0) return 1;

    if (n < 1) return 0;

    if (dp[n]) return dp[n];

    dp[n] += recursion(n - 1) + recursion(n - 2);

    return dp[n];
  }

  return recursion(n);
};
