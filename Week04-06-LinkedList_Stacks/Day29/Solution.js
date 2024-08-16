var MyStack = function() {
  this.q1 = []
  this.q2= []
};
MyStack.prototype.push = function(x) {
  this.q1.push(x)
};
MyStack.prototype.pop = function() {
  // Move all elements except the last one from q1 to q2
  while (this.q1.length > 1) {
    this.q2.push(this.q1.shift());
  }
  // The last element in q1 is the top of the stack, pop it
  const poppedElement = this.q1.shift();
  // Swap the queues: q2 becomes q1, and q1 becomes q2 (empty)
  [this.q1, this.q2] = [this.q2, this.q1];
  return poppedElement;
};
MyStack.prototype.top = function() {
  // Move all elements except the last one from q1 to q2
  while (this.q1.length > 1) {
    this.q2.push(this.q1.shift());
  }
  // Get the last element (the top of the stack)
  const topElement = this.q1.shift();
  // Push the top element to q2 to maintain the stack order
  this.q2.push(topElement);
  // Swap the queues
  [this.q1, this.q2] = [this.q2, this.q1];
  return topElement;
};
MyStack.prototype.empty = function() {
  console.log("q1", this.q1)
   return this.q1.length === 0;
};
var obj = new MyStack()
obj.push(2)
var param_2 = obj.pop()
var param_3 = obj.top()
var param_4 = obj.empty()
console.log('Stack::', {param_2, param_3, param_4})