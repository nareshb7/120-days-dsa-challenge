# Notes for Day 33: LRU Cache

## Approach

- Node Structure (Node): Represents a node in the doubly linked list.
- Contains:
  key: Key of the cache entry.
  val: Value of the cache entry.
  prev: Pointer to the previous node.
  next: Pointer to the next node.
  LRUCache Constructor (LRUCache)

- Initializes the cache with:
  capacity: Maximum number of items the cache can hold.
  hashMap: A map to store key-node pairs for O(1) access.
  head and tail: Dummy nodes to represent the start and end of the doubly linked list.
  Insert Function (insert)

- Inserts a node just before the tail.
- Steps:
  Set the prev pointer of the node to point to the node currently before tail.
  Set the next pointer of the node to point to tail.
  Update the adjacent nodes’ pointers to include the new node.
  Remove Function (remove)

- Removes a node from its current position in the doubly linked list.
- Steps:
  Identify the prev and next nodes surrounding the node.
  Update their pointers to exclude the node.
  Get Function (get)

- Retrieves the value associated with a given key.
- Steps:
  Check if the key exists in hashMap.
  If it exists:
  Remove the node from its current position.
  Re-insert the node at the end (before tail).
  Return the node.val.
  If it doesn’t exist, return -1.
  Put Function (put)

- Inserts or updates a key-value pair in the cache.
- Steps:
  If the key already exists:
  Remove the old node.
  Create a new node with the key and value.
  Insert the new node at the end (before tail).
  Add the node to hashMap.
  If the cache exceeds its capacity:
  Remove the least recently used (LRU) node (head.next).
  Delete the corresponding key from hashMap.
  Usage

- Instantiate the Cache: var obj = new LRUCache(capacity);
- Retrieve a Value: var param_1 = obj.get(key);
- Insert/Update a Value: obj.put(key, value);

## Complexity

- `Time Complexity:`
- Get Operation (get): O(1)
  Accessing an item using the hash map is O(1).
  Moving the item to the most recently used position in the doubly linked list is also O(1).
- Put Operation (put): O(1)
  Insertion and updating of an item in both the hash map and doubly linked list are O(1).
  Removal of the least recently used item (when capacity is exceeded) is also O(1).
- `Space Complexity: O(N)`: where N is the capacity of the cache.
  The space is used by the hash map (storing key-node pairs) and the doubly linked list (storing the nodes).

## Key Learnings:

- `Efficient Caching:` The LRU cache is a practical implementation to manage limited memory resources by discarding the least recently used items when the cache is full.
- `Combination of Data Structures:` The use of a hash map for quick access and a doubly linked list for maintaining order of usage is a powerful technique for achieving O(1) time complexity in both retrieval and update operations.
- `Understanding of Linked Lists:` This problem helps in mastering the manipulation of linked list pointers, such as insertion, deletion, and reordering nodes efficiently.
- `Eviction Policy:` The concept of an eviction policy, specifically the least recently used policy, is crucial for designing systems that need to manage limited resources.
- `Handling Edge Cases:` Managing cases where the cache reaches its capacity or where duplicate keys are inserted teaches the importance of carefully considering all possible scenarios in design and implementation
