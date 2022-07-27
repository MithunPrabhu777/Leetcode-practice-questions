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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {

    let array = [];

    function recursion(node) {
        if (!node) return;

        array.push(node);

        recursion(node.left);
        recursion(node.right);

    }

    recursion(root);

    let newNode = new TreeNode(0);
    let head = newNode;

    while (array.length) {
        let nodeValue = array.shift();
        head.left = null;
        head.right = nodeValue;
        head = head.right;
    }

    return newNode.next;

};

Input: root = [1, 2, 5, 3, 4, null, 6]
Output: [1, null, 2, null, 3, null, 4, null, 5, null, 6]
