class Solution {
    // Function should return 0 if length is even else return 1
    isLengthEven(head) {
        // code here
        let count =1;
        while(head.next) {
            // console.log('head::', head)
            count++;
            head = head.next
        }
        // console.log("count::", count, head)
        return count %2 == 0
    }
}
//Problem: Is Linked List Length Even?

// Given a linked list, your task is to complete the function isLengthEven() which contains the head of the linked list, 
// and check whether the length of the linked list is even or not. Return true if it is even, otherwise false.

// Example::
// Input: Linked list: 12->52->10->47->95->0
// Output: true
// Explanation: The length of the linked list is 6 which is even, hence returned true