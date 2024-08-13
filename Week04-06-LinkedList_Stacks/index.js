// Step 1: Define the Node class
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const arrayToLinkedList = (arr) => {
    if (arr.length === 0) {
        return null;
    }

    // Create the head of the linked list
    let head = new Node(arr[0]);
    let current = head;

    // Iterate through the rest of the array and create nodes
    for (let i = 1; i < arr.length; i++) {
        current.next = new Node(arr[i]);
        current = current.next;
    }

    return head;
}

const linkedListToArr =(ll) => {
    const arr =[]
    let curr = ll
    while(curr != null) {
            arr.push(curr.value)
            curr = curr.next
    }
    return arr
}

// // Example Usage
// let arr = [1, 2, 3, 4, 5];
// let linkedList = arrayToLinkedList(arr);
module.exports = {arrayToLinkedList, linkedListToArr}