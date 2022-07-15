/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var lcaDeepestLeaves = function(root) {
    let maxDepth = -1;
    let lca = null;
    dfs(root,0);
    return lca;
    
    function dfs(root,depth){
        if(!root) return;
        
        if(!root.left && !root.right){
            if(depth > maxDepth){
                maxDepth = depth;
                lca = root;
            }
            
            return depth;
        }
        
        let leftRoot = dfs(root.left,depth+1);
        let rightRoot = dfs(root.right,depth+1);
        
        if(leftRoot === maxDepth && leftRoot === rightRoot){
            lca = root;
        }
        
        return Math.max(leftRoot ? leftRoot : -1,rightRoot ? rightRoot : -1);
    }
};

let root = [3,5,1,6,2,0,8,null,null,7,4]
// Output: [2,7,4]