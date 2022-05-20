class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
    this.size = 0;
    this.inorderTraversalValues = [];
    this.preorderTraversalValues = [];
    this.postorderTraversalValues = [];
    this.isFound = false;
    this.leafNodes = [];
    this.greaterSum = 0;
  }

  insertNode(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      this.size += 1;
    }
    let current = this.root;

    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          this.size += 1;
        }

        current = current.left;
      } else if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          this.size += 1;
        }

        current = current.right;
      } else {
        return undefined;
      }
    }
  }

  treeSize() {
    return this.size;
  }

  inorderTraversal(current) {
    if (!current) return;
    this.inorderTraversal(current.left);
    this.inorderTraversalValues.push(current.value);
    this.inorderTraversal(current.right);
  }

  preorderTraversal(current) {
    if (!current) return;
    this.preorderTraversalValues.push(current.value);
    this.preorderTraversal(current.left);
    this.preorderTraversal(current.right);
  }

  postorderTraversal(current) {
    if (!current) return;
    this.postorderTraversal(current.left);
    this.postorderTraversal(current.right);
    this.postorderTraversalValues.push(current.value);
  }

  findNode(value, current) {
    if (!current) return;

    if (current.value == value) {
      this.isFound = true;
    }

    this.findNode(value, current.left);
    this.findNode(value, current.right);
  }

  findLeafNodes(current) {
    if (!current) return;

    if (!current.left && !current.right) {
      this.leafNodes.push(current.value);
    }

    this.findLeafNodes(current.left);
    this.findLeafNodes(current.right);
  }

  heightOfTree(current) {
    if (!current) return -1;

    let leftHeight = this.heightOfTree(current.left);
    console.log({ leftHeight });
    let rightHeight = this.heightOfTree(current.right);
    console.log({ rightHeight });

    if (leftHeight > rightHeight) {
      return leftHeight + 1;
    } else {
      return rightHeight + 1;
    }
  }

  diameterOfTree(current) {
    if (!current) return 0;

    let result = this.countMax(current.left) + this.countMax(current.right);
    // let left = this.diameterOfTree(current.left);
    // let right = this.diameterOfTree(current.right);

    console.log(Math.max(result));
    return result;
  }

  countMax(current) {
    if (!current) return 0;

    return (
      1 + Math.max(this.countMax(current.left), this.countMax(current.right))
    );
  }

  findKthSmallNode(current, k) {
    this.inorderTraversal(current);
    console.log(
      `${k} smallest node in tree is `,
      this.inorderTraversalValues[k - 1]
    );
  }

  sortedArrayToBST(numsArray) {
    this.traverseToCreateBST(numsArray, 0, numsArray.length - 1);
  }

  traverseToCreateBST(numsArray, start, end) {
    if (start > end) return null;

    let mid = Math.floor((start + end) / 2);

    let newNode = new Node(numsArray[mid]);
    newNode.left = this.traverseToCreateBST(numsArray, start, mid - 1);
    newNode.right = this.traverseToCreateBST(numsArray, mid + 1, end);

    console.log(newNode);
    return newNode;
  }

  balanceBinaryTree(current) {
    this.inorderTraversal(current);

    let sortedArray = this.inorderTraversalValues;
    function buildTree(start, end) {
      console.log(start, end);
      if (start > end) return null; // 0 > 4 no

      let mid = Math.floor((start + end) / 2); //  2

      let newNode = new Node(sortedArray[mid]);

      console.log(newNode);
      newNode.left = buildTree(start, mid - 1);
      newNode.right = buildTree(mid + 1, end);
    }

    buildTree(0, sortedArray.length - 1);
  }

  convertBSTtoGST(current) {
    current.right && this.convertBSTtoGST(current.right);
    this.greaterSum += current.value;
    current.value = this.greaterSum;
    current.left && this.convertBSTtoGST(current.left);
  }

  invertBST(current) {
    if (current == null) return null;

    let tempRightNode = this.invertBST(current.right);
    let tempLeftNode = this.invertBST(current.left);

    current.right = tempLeftNode;
    current.left = tempRightNode;

    return current;
  }
}

const tree = new Tree();
tree.insertNode(6);
tree.insertNode(4);
tree.insertNode(8);
tree.insertNode(1);
tree.insertNode(9);
// tree.inorderTraversal(tree.root);
// tree.preorderTraversal(tree.root);
// tree.postorderTraversal(tree.root);
// tree.findNode(10, tree.root);
// tree.findLeafNodes(tree.root);
// tree.findKthSmallNode(tree.root, 5);
// tree.balanceBinaryTree(tree.root);
// tree.convertBSTtoGST(tree.root);
let result = tree.invertBST(tree.root);
// tree.diameterOfTree(result);
tree.sortedArrayToBST([1, 2, 3, 4, 5, 6, 7, 8, 9]);
