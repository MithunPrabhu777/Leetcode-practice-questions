/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(grid) {
    let result = {count : 0};
    
    for(let i=0; i < grid.length; i++){
        for(let j=0; j < grid[0].length; j++){
            if(grid[i][j] === 1){
                dfs(grid,i,j,result);
            }
        }
    }
    
    return result.count;
    
    function dfs(grid,i,j,result,area = {count : 0}){
        if(!grid[i] || !grid[i][j]) return;
        
        result.count = Math.max(result.count,area.count += grid[i][j]);
        
        grid[i][j] = 0;
        
        dfs(grid,i,j-1,result,area); // left
        dfs(grid,i,j+1,result,area); // right
        dfs(grid,i-1,j,result,area); // top
        dfs(grid,i+1,j,result,area); // bottom
    }
};

grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]];
console.log(maxAreaOfIsland(grid));
// Output: 6         // pattern dfs  time-complexity 4power...
// Explanation: The answer is not 11, because the island must be connected 4-directionally.