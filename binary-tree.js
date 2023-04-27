// const { Stack } = require("./stack");
/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(root = this.root, lDepth = 0, rDepth = 0) {
    if(!this.root) return 0; // non existent root

    if(root.left === null && root.right === null) return 1;
    if(root.left) lDepth = this.minDepth(root.left, lDepth, rDepth);
    if(root.right) rDepth = this.minDepth(root.right, lDepth, rDepth);

    return Math.min(lDepth + 1, rDepth + 1);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(root = this.root, lDepth = 0, rDepth = 0) {
    if(!this.root) return 0; // non existent root

    if(root.left === null && root.right === null) return 1;
    if(root.left) lDepth = this.maxDepth(root.left, lDepth, rDepth);
    if(root.right) rDepth = this.maxDepth(root.right, lDepth, rDepth);

    return Math.max(lDepth + 1, rDepth + 1);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let result = 0;

    function maxSumHelper(node) {
      if (node === null) return 0;
      const leftSum = maxSumHelper(node.left);
      const rightSum = maxSumHelper(node.right);
      result = Math.max(result, node.val + leftSum + rightSum);
      return Math.max(0, leftSum + node.val, rightSum + node.val);
    }

    maxSumHelper(this.root);
    return result; 
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}
let smallTree;
let largeTree;
let emptyTree;
emptyTree = new BinaryTree();

// build small tree;
let smallLeft = new BinaryTreeNode(5);
let smallRight = new BinaryTreeNode(5);
let smallRoot = new BinaryTreeNode(6, smallLeft, smallRight);
smallTree = new BinaryTree(smallRoot);
//     6
//   /  \
//  5   5

// build large tree
let node6 = new BinaryTreeNode(1);
let node5 = new BinaryTreeNode(1);
let node4 = new BinaryTreeNode(2);
let node3 = new BinaryTreeNode(3, node4, node6);
let node2 = new BinaryTreeNode(5, node3, node5);
let node1 = new BinaryTreeNode(5);
let root = new BinaryTreeNode(6, node1, node2);
largeTree = new BinaryTree(root);
//      6
//     / \
//    5   5
//       / \
//      3   1
//     / \
//    2   1
module.exports = { BinaryTree, BinaryTreeNode };
