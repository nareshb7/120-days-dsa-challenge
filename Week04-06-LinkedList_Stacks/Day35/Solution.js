/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
class NestedInteger {
  constructor(value) {
    if (Array.isArray(value)) {
      this.list = value;
      this.integer = null;
    } else {
      this.integer = value;
      this.list = null;
    }
  }
  isInteger() {
    return this.integer !== null;
  }
  getInteger() {
    return this.integer;
  }
  getList() {
    return this.list;
  }
}

var NestedIterator = function (nestedList) {
  this.stack = [];
  this.flatten(nestedList);
};
NestedIterator.prototype.flatten = function (nestedList) {
  for (let i = nestedList.length - 1; i >= 0; i--) {
    this.stack.push(nestedList[i]);
  }
};
NestedIterator.prototype.hasNext = function () {
  while (this.stack.length > 0) {
    const top = this.stack[this.stack.length - 1];
    if (top.isInteger()) {
      return true;
    } else {
      this.stack.pop();
      this.flatten(top.getList());
    }
  }
  return false;
};
NestedIterator.prototype.next = function () {
  return this.stack.pop().getInteger();
};
const nestedList = [
  new NestedInteger([
      new NestedInteger(1),
      new NestedInteger(1)
  ]),
  new NestedInteger(2),
  new NestedInteger([
      new NestedInteger(1),
      new NestedInteger(1)
  ])
];// Example: [[1,1],2,[1,1]]
const iterator = new NestedIterator(nestedList);
const result = [];
while (iterator.hasNext()) {
  result.push(iterator.next());
}
console.log(result);  // Output: [1, 1, 2, 1, 1]

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
