
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function invertTree(root) {
    if (!root) return null;

    let temp = root.left;

    root.left = root.right;

    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);

    return root;
}

Input: root = [4, 2, 7, 1, 3, 6, 9]
Output: [4, 7, 2, 9, 6, 3, 1]