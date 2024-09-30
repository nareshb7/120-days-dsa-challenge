/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
  this.stack = [];
  this.maxSize = maxSize;
  this.incrementArr = Array(maxSize).fill(0);
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
  if (this.stack.length < this.maxSize) {
    this.stack.push(x);
  }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
  const index = this.stack.length - 1;
  if (index < 0) return -1;
  const value = this.stack.pop() + this.incrementArr[index];
  if (index > 0) {
    this.incrementArr[index - 1] =
      this.incrementArr[index - 1] + this.incrementArr[index];
  }
  this.incrementArr[index] = 0;
  return value;
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
  //     for (let i =0; i< k; i++) {
  //         if (this.stack[i] || this.stack[i] == 0) {
  //             //this.stack[i]  = this.stack[i]+ val
  //             this.increment[i]+=val
  //         } else {
  //             break;
  //         }

  //     }
  const index = Math.min(k, this.stack.length) - 1;
  if (index >= 0) {
    this.incrementArr[index] += val;
  }
};

// 1381. Design a Stack With Increment Operation

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
