/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
    let hash = {};
    
    inorder.map((value,index) => hash[value] = index);
    
    function dfs(start,end){
        if(start > end) return null;
        
        const root = new TreeNode(preorder.shift());
        root.left = dfs(start,hash[root.val] - 1);
        root.right = dfs(hash[root.val] + 1, end);
        
        return root;
    }
    
    return dfs(0,inorder.length-1);
};

let preorder = [3,9,20,15,7], inorder = [9,3,15,20,7];
buildTree(preorder,inorder);