/**
 * @param {number} k
 */
 var MyCircularQueue = function(k) {
  this.queue = new Array(k);
      this.maxSize = k;
      this.front = 0;
      this.rear = -1;
      this.currentSize = 0;
};
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.isFull()) {
          return false;
      }
      this.rear = (this.rear + 1) % this.maxSize;
      this.queue[this.rear] = value;
      this.currentSize++;
      return true;
};
MyCircularQueue.prototype.deQueue = function() {
  if (this.isEmpty()) {
          return false;
      }
      this.queue[this.front] = null; // Optional: clear the value
      this.front = (this.front + 1) % this.maxSize;
      this.currentSize--;
      return true;
};
MyCircularQueue.prototype.Front = function() {
  return this.isEmpty() ? -1 : this.queue[this.front];
};
MyCircularQueue.prototype.Rear = function() {
  return this.isEmpty() ? -1 : this.queue[this.rear];
};
MyCircularQueue.prototype.isEmpty = function() {
  return this.currentSize === 0;
};
MyCircularQueue.prototype.isFull = function() {
  return this.currentSize === this.maxSize;
};

/** 
* Your MyCircularQueue object will be instantiated and called as such:
* var obj = new MyCircularQueue(k)
* var param_1 = obj.enQueue(value)
* var param_2 = obj.deQueue()
* var param_3 = obj.Front()
* var param_4 = obj.Rear()
* var param_5 = obj.isEmpty()
* var param_6 = obj.isFull()
*/