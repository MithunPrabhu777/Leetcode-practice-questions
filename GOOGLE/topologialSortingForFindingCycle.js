//Couse Schedule

var canFinish = function(numCourses, prerequisites) {
    const adjList = []
    const visit = []
    construAdj()
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false
    }
    return true
    
    function dfs(i) {
        // base case
        if (visit[i]) return false
        if (visit[i] === false) return true
        
        visit[i] = true
        
        for (const nei of adjList[i] ?? []) {
            if (!dfs(nei)) return false
        }
        
        visit[i] = false
        return true
    }
    
    function construAdj() {
        for (const pre of prerequisites) {
            if (!adjList[pre[1]]) adjList[pre[1]] = []
            adjList[pre[1]].push(pre[0])
        }
    }
};

let numCourses = 2, prerequisites = [[1,0]];
console.log(canFinish(numCourses,prerequisites));


Output: true
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0. So it is possible.