class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function arrayToBinaryTree(arr) {
    if (!arr.length) return null;

    // Create the root of the tree
    const root = new TreeNode(arr[0]);
    const queue = [root];

    let i = 1;
    while (i < arr.length) {
        // Get the current node
        const currentNode = queue.shift();

        // Insert the left child
        if (arr[i] !== null) {
            currentNode.left = new TreeNode(arr[i]);
            queue.push(currentNode.left);
        }
        i++;

        // Insert the right child
        if (i < arr.length && arr[i] !== null) {
            currentNode.right = new TreeNode(arr[i]);
            queue.push(currentNode.right);
        }
        i++;
    }

    return root;
}

// // Example usage:
// const arr = [3, 9, 20, null, null, 15, 7];
// const root = arrayToBinaryTree(arr);

// console.log(root);

module.exports = {arrayToBinaryTree}
