/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const { arrayToBinaryTree } = require("..");

/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
 class ListNode {
    constructor(val=0, next = null) {
        this.val = val;
        this.next = next;
    }
}
var modifiedList = function(nums, head) {
    const values = new Set(nums)
    let dummy = new ListNode(0)
    dummy.next = head
    let current = head
    let prev = dummy
    while(current != null) {
        if (values.has(current.val)) {
            prev.next = current.next
        } else {
            prev =current
        }
        current = current.next
    }
    return dummy.next
};

//3217. Delete Nodes From Linked List Present in Array
const nums = [1,2,3], head = [1,2,3,4,5]
console.log("Modified List::", modifiedList(nums, arrayToBinaryTree(head)))
//Remove the nodes with values 1, 2, and 3.
// Output: [4,5]