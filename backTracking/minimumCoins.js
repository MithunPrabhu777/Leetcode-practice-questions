var coinChange = function(coins, amount) {
    const memo = new Map();

    coins.sort((a,b) => b - a);
    
    function permute(left) {
        if(memo.has(left)) return memo.get(left)
        if(left === 0) return 0;
        let min = Infinity;
        
        for(let coin of coins) {
            if(left-coin >= 0) min = Math.min(min, permute(left-coin));
        }
        memo.set(left, min+1);
        return min + 1;
    }
    const result = permute(amount);
    return result === Infinity ? -1 : result;
};

let coins = [1,2,5];
console.log(coinChange(coins,11));