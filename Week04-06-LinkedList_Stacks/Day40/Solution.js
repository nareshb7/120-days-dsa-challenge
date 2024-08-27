var StockSpanner = function () {
  this.stack = [];
  this.index = -1;
};

StockSpanner.prototype.next = function (price) {
  this.index++;
  // popping the all elements where price is less than the current price
  while (this.stack.length && this.stack[this.stack.length - 1][0] <= price) {
    this.stack.pop();
  }

  let span;
  if (this.stack.length === 0) {
    span = this.index + 1;
  } else {
    span = this.index - this.stack[this.stack.length - 1][1];
  }
  this.stack.push([price, this.index]);
  return span;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
