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

 module.exports = { Stack };