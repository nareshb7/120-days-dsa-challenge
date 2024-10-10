const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0]; // we can take any index as pivot

  // Create left and right sub-arrays
  let left = [];
  let right = [];

  // Partition the array into left and right sub-arrays
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]); // Elements less than pivot go to the left
    } else {
      right.push(arr[i]); // Elements greater than or equal to pivot go to the right
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

const arr = [4, 2, 6, 2, 7, 9];
console.log("Output::", quickSort(arr));
// Output:: [ 2, 2, 4, 6, 7, 9 ]
