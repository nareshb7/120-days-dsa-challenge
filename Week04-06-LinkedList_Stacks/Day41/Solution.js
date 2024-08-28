class Stack {
  constructor() {
    this.stackList = [];
  }

  isEmpty() {
    return this.stackList.length === 0;
  }
  top() {
    if (this.isEmpty()) {
      return null;
    }
    return this.stackList[this.stackList.length - 1];
  }
  size() {
    return this.stackList.length;
  }
  push(value) {
    this.stackList.push(value);
  }
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.stackList.pop();
  }
}

var MyQueue = function () {
  // stack to store elements
  this.stack1 = new Stack();

  // temporary stack for reversing elements
  this.stack2 = new Stack();
};
MyQueue.prototype.push = function (x) {
  // loop to transfer all elements from stack1 to stack2
  while (!this.stack1.isEmpty()) {
    this.stack2.push(this.stack1.pop());
  }
  // push the new element to stack1
  this.stack1.push(x);

  // loop to transfer all elements back from stack2 to stack1
  while (!this.stack2.isEmpty()) {
    this.stack1.push(this.stack2.pop());
  }
};
MyQueue.prototype.pop = function () {
  return this.stack1.pop();
};
MyQueue.prototype.peek = function () {
  return this.stack1.top();
};
MyQueue.prototype.empty = function () {
  return this.stack1.isEmpty();
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
