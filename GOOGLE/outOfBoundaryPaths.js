var findPaths = function(m, n, N, i, j, memo = new Map()) {
    const key = N + ',' + i + ',' + j;
    if (memo.has(key)) return memo.get(key);
    const isOutside = i === -1 || i === m || j === -1 || j === n;
    if (N === 0 || isOutside) return +isOutside;
    memo.set(key, (
          findPaths(m, n, N - 1, i - 1, j, memo)
        + findPaths(m, n, N - 1, i + 1, j, memo)
        + findPaths(m, n, N - 1, i, j + 1, memo)
        + findPaths(m, n, N - 1, i, j - 1, memo)
    ) % 1000000007);
    return memo.get(key);
};

let m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0;
console.log(findPaths(m,n,maxMove,startRow,startColumn));
