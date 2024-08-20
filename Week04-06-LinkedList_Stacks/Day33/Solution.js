function Node(key, val) {
  this.key = key
  this.val = val
  this.prev = null
  this.next = null
}

LRUCache.prototype.insert = function(node) {
  const prev = this.tail.prev
  const next = this.tail
  prev.next = node
  next.prev = node
  node.prev = prev
  node.next = next
}
LRUCache.prototype.remove= function(node) {
  const prev = node.prev
  const next = node.next
  prev.next = next
  next.prev = prev
}
var LRUCache = function(capacity) {
  this.capacity = capacity
  this.hashMap = new Map()
  this.head = new Node(0,0)
  this.tail = new Node(0,0)
  this.head.next = this.tail
  this.tail.prev = this.head
};

LRUCache.prototype.get = function(key) {
  if (this.hashMap.has(key)) {
      const node = this.hashMap.get(key)
      this.remove(node)
      this.insert(node)
      return node.val
  }
  return -1
};

LRUCache.prototype.put = function(key, value) {
  if (this.hashMap.has(key)) {
      this.remove(this.hashMap.get(key))
  }
  const node = new Node(key, value)
  this.insert(node)
  this.hashMap.set(key, node)
  if(this.hashMap.size > this.capacity) {
      const lru = this.head.next;
      this.hashMap.delete(lru.key);
      this.remove(lru);
  }
};

/** 
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/