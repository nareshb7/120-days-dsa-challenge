/**
 * @param {number} maxSize
 */
 var CustomStack = function(maxSize) {
  this.stack = []
  this.maxSize = maxSize
  this.incrementArr= Array(maxSize).fill(0)
};

CustomStack.prototype.push = function(x) {
  if (this.stack.length < this.maxSize) {
      this.stack.push(x)
  }
};

CustomStack.prototype.pop = function() {
  const index = this.stack.length -1
  if (index < 0) return -1
  const value = this.stack.pop() + this.incrementArr[index]
  if (index>0) {
      this.incrementArr[index-1] += this.incrementArr[index]
  }
  this.incrementArr[index] = 0
  return value
};

CustomStack.prototype.increment = function(k, val) {
  const index =  Math.min(k, this.stack.length) -1
  if (index >=0) {
      this.incrementArr[index]+=val
  }
};

/** 
* Your CustomStack object will be instantiated and called as such:
* var obj = new CustomStack(maxSize)
* obj.push(x)
* var param_2 = obj.pop()
* obj.increment(k,val)
*/