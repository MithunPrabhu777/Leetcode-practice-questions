var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const memo = new Map();
    
    function topDown(row, col) {
        // base case
        if (row < 0 || col < 0 || obstacleGrid[row][col] === 1) return 0;
        if (row === 0 && col === 0) return 1;
        
        const key = row + ',' + col;
        if (memo.has(key)) return memo.get(key);
        
        const res = topDown(row - 1, col) + topDown(row, col - 1);
        memo.set(key, res);
        
        return res;
    }

    return topDown(m - 1, n - 1);
};

let obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]];
console.log(uniquePathsWithObstacles(obstacleGrid));
