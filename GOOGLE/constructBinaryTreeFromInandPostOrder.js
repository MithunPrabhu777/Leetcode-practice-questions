var buildTree = function (preorder, inorder) {
    let preIndex = 0, inIndex = 0;

    function build(stop) {
        if (inorder[inIndex] != stop) {
            var root = new TreeNode(preorder[preIndex++])
            root.left = build(root.val)
            inIndex++
            root.right = build(stop)
            return root
        }
        return null;
    }

    return build()
};

// O(N) time and O(1) space
Input: preorder = [3, 9, 20, 15, 7], inorder = [9, 3, 15, 20, 7]
Output: [3, 9, 20, null, null, 15, 7]