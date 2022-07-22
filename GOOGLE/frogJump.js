/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function (stones) {
    let uniqueElements = new Set(stones);

    return dfs(uniqueElements, stones[stones.length - 1]);
}

function dfs(uniqueElements, end, current = 0, jump = 1, memo = new Map()) {
    if (!uniqueElements.has(current)) return false;

    let key = current + ',' + jump;

    if (current === end) return true;

    if (memo.has(key)) return memo.get(key);

    let less = jump > 1 ? dfs(uniqueElements, end, current + jump, jump - 1, memo) : false;

    memo.set(key, less || dfs(uniqueElements, end, current + jump, jump, memo) || dfs(uniqueElements, end, current + jump, jump + 1, memo))

    return memo.get(key);
}

Input: stones = [0, 1, 3, 5, 6, 8, 12, 17]
Output: true
// Explanation: The frog can jump to the last stone by jumping 1 unit to the 2nd stone, then 2 units to the 3rd stone, then 2 units to the 4th stone, then 3 units to the 6th stone, 4 units to the 7th stone, and 5 units to the 8th stone.