var rightSideView = function(root) {
    
    let result = [];
    
    let current = root;
    
    function dfs(node,level){
        if(!node) return;
        
        if(!result[level]){
            result.push(node.val);
        }
        
        dfs(node.right,level+1);
        dfs(node.left,level+1);
    }
    
    dfs(current,0);
    
    return result;
    
}; 

// pattern tree dfs