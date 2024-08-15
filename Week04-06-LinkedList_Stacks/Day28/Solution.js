var MinStack = function () {
  this.items = [];
  this.minItems = [];
};
MinStack.prototype.push = function (val) {
  this.items.push(val);
  if (
    this.minItems.length === 0 ||
    val <= this.minItems[this.minItems.length - 1]
  ) {
    this.minItems.push(val);
  }
};
MinStack.prototype.pop = function () {
  const poppedItem = this.items.pop();
  if (poppedItem === this.minItems[this.minItems.length - 1]) {
    this.minItems.pop();
  }
};
MinStack.prototype.top = function () {
  return this.items[this.items.length - 1];
};
MinStack.prototype.getMin = function () {
  return this.minItems[this.minItems.length - 1];
};
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log("Min Value:::", minStack.getMin());
