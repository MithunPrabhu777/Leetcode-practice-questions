const lowestCommonAncestor = (root, p, q) => {

    if (!root || root == p || root == q) {
        return root;
    }

    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);

    if (!right) return left; // p and q are in the left subtree
    if (!left) return right; // p and q are in the right subtree

    return root;            // p is in one side and q is in the other
};

Input: root = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], p = 5, q = 1
Output: 3
// Explanation: The LCA of nodes 5 and 1 is 3.