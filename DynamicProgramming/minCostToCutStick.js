var minCost = function(n, cuts) {
    cuts.push(0, n); 
    cuts.sort((a, b) => a - b);
    let N=cuts.length
    let dp = [...Array(N)].map(d => [...Array(N)]);

    let rec = (i, j) => {
        if(j-i== 1) return 0;
        if (dp[i][j] !== undefined) return dp[i][j];
        for (let k = i + 1; k < j; k++) {
            dp[i][j] = Math.min(dp[i][j]||Infinity, rec(i, k) + rec(k, j) + cuts[j] - cuts[i]);
        }
        return dp[i][j];
    };
   
    return  rec(0, N-1);
};

let n=7,cuts=[1,3,4,5];
console.log(minCost(n,cuts));