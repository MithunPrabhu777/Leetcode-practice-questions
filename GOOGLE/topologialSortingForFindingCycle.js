var canFinish = function (numCourses, prerequisites) {
    let adjacencyList = [];
    let visited = [];

    adjacencyList = buildAdjList(prerequisites, adjacencyList);

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i, visited, adjacencyList)) return false;
    }

    return true;
};

var dfs = function (startNode, visited, adjacencyList) {
    if (visited[startNode]) return false;

    if (visited[startNode] === false) return true;

    visited[startNode] = true;

    for (const nextNode of adjacencyList[startNode] ?? []) {
        if (!dfs(nextNode, visited, adjacencyList)) return false;
    }

    visited[startNode] = false;

    return true;

}

var buildAdjList = function (prerequisites, adjacencyList) {
    for (let pos of prerequisites) {
        if (!adjacencyList[pos[1]]) {
            adjacencyList[pos[1]] = [];
        }

        adjacencyList[pos[1]].push(pos[0]);
    }

    return adjacencyList;
}