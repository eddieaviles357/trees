/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let curr = null;
    let sum = 0;
    let nodeStack = new Stack();
    // well use our own stack class here
    if(!this.root) return sum; // is there a root?
    nodeStack.push(this.root); // push to the stack
    sum = nodeStack.first.val.val; // extract the value of the root node

    while(!nodeStack.isEmpty()) {
      curr = nodeStack.pop(); // remove node from stack

      if(curr.children.length) { // does node have children?
        for(let treeNode of curr.children) {
          nodeStack.push(treeNode); // add children to stack
          sum += treeNode.val
        };
      };
    };

    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let curr = null;
    let evens = 0;
    // well use our own stack class here
    let nodeStack = new Stack();
    if(!this.root) return evens;
    nodeStack.push(this.root);
    // is the root value even?
    evens = (nodeStack.first.val.val % 2 === 0) ? 1 : 0;

    while(!nodeStack.isEmpty()) {
      curr = nodeStack.pop(); // remove node from stack

      if(curr.children.length) { // does node have children?
        for(let treeNode of curr.children) {
          nodeStack.push(treeNode); // add children to stack
          evens += (treeNode.val % 2 === 0) ? 1 : 0;
        };
      };
    };

    return evens;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let curr = null;
    let count = 0;
    // well use our own stack class here
    let nodeStack = new Stack();
    if(!this.root) return count;
    nodeStack.push(this.root);
    if(this.root.val > lowerBound) count++;

    while(!nodeStack.isEmpty()) {
      curr = nodeStack.pop(); // remove node from stack

      if(curr.children.length) { // does node have children?
        for(let treeNode of curr.children) {
          nodeStack.push(treeNode); // add children to stack
          if(treeNode.val > lowerBound) count++;
        };
      };
    };

    return count;
  }
}
let n = new TreeNode(1);
let n2 = new TreeNode(2);
let n3 = new TreeNode(3);
let n4 = new TreeNode(4);
let n5 = new TreeNode(5);
let n6 = new TreeNode(6);
let n7 = new TreeNode(7);
let n8 = new TreeNode(8);

n.children = [n2, n3, n4];

n4.children.push(n5, n6);
n6.children.push(n7);
n7.children.push(n8);

largeTree = new Tree(n);


/**
 ****************************************************************
 ****************************************************************
 ******* Stack: chained-together nodes where you can ************
 ********** remove from the top or add to the top. **************
 ****************************************************************
 ****************************************************************
 */
 class Node {
   constructor(val) {
     this.val = val;
     this.next = null;
   }
 }

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    // stack is empty first and last are the same value
    if(this.first == null) {
      this.first = this.last = new Node(val);
      this.size++;
      return;
    };
    // add to top of stack
    let topNode = new Node(val);
    topNode.next = this.first;
    this.first = topNode;
    this.size++;
    return;
  };

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    let popped = null;

    if(this.first === null) throw new Error('Stack is empty!');

    popped = this.first; // to be removed from top of stack
    this.first = this.first.next; // assign new top of stack
    popped.next = null; // remove reference to next
    this.size--; // decrement size
    return popped.val; // return value of popped node
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if(this.first === null) return;
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return (this.first === null) ? true : false;
  }
};

module.exports = { Tree, TreeNode, Node, Stack };
