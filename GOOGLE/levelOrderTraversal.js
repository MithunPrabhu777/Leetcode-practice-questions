var levelOrder = function(root) {
    
    let result = [];
    
    function dfs(node,level){
        if(!node) return;
        
        if(!result[level]) result[level] = [];
        
        result[level].push(node.val);
        
        dfs(node.left,level+1);
        dfs(node.right,level+1);
    }
    
    dfs(root,0);
    
    return result;
};

let root = [3,9,20,null,null,15,7];
console.log(levelOrder(root)); // pattern tree dfs