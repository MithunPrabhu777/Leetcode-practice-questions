const treeify = require("treeify");

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
    this.totalSum = 0;
    this.sum = 0;
  }

  insertNode(value) {
    var newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      this.totalSum += 1;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          this.totalSum += 1;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          this.totalSum += 1;
          return this;
        }
        current = current.right;
      } else {
        return undefined;
      }
    }
  }

  findTotal(current, low, high) {
    if (!current) {
      return 0;
    }

    var output = 0;

    if (current.value >= low && current.value <= high) {
      output += current.value;
    }

    if (current.value > low) {
      output += this.findTotal(current.left, low, high);
    }

    if (current.val < high) {
      output += this.findTotal(current.right, low, high);
    }

    console.log(output);
  }

  preordertraversal(current) {
    console.log(current);
    if (current !== null) {
      try {
        this.preordertraversal(current.left);
        this.preordertraversal(current.right);
      } catch (error) {
        return;
      }
    }
  }

  getRootNode() {
    return this.root;
  }

  minDepth(root) {
    // If node is empty return 0
    if (!root) return 0;

    // If the left node is empty DFS into right node
    if (!root.left) return this.minDepth(root.right) + 1;

    // If the right node is empty DFS into left node
    if (!root.right) return this.minDepth(root.left) + 1;

    // If neither left nor right nodes are empty, find the minium of the each DFS traversal
    console.log(
      Math.min(this.minDepth(root.left), this.minDepth(root.right)) + 1
    );
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
  }

  isValidBST(root, min, max) {
    if (root === null) return true;
    if (root.val <= min || root.val >= max) return false;
    return (
      this.isValidBST(root.right, root.val, max) &&
      this.isValidBST(root.left, min, root.val)
    );
  }
}

let bst = new BST();
bst.insertNode(5);
bst.insertNode(4);
bst.insertNode(3);
bst.insertNode(7);
bst.insertNode(9);
var root = bst.getRootNode();
console.log(root);
