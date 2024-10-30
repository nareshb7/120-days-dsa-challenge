var minimumMountainRemovals = function (a) {
  let n = a.length,
    lis = new Array(n),
    lds = new Array(n);

  let tmp = new Array(n + 1).fill(1e9);
  tmp[0] = 0;

  for (let i in a) {
    let j = Math.arrayLowerBound(tmp, a.at(i));

    tmp[j] = a.at(i);
    lis[i] = j;
  }

  // console.log(lis)

  tmp.fill(1e9);
  tmp[0] = 0;

  for (let i = n - 1; i >= 0; i--) {
    let j = Math.arrayLowerBound(tmp, a.at(i));

    tmp[j] = a.at(i);
    lds[i] = j;
  }

  // console.log(lds)

  let mx = 0;
  for (let i = 1; i < n - 1; i++) {
    if (lis.at(i) === 1 || lds.at(i) === 1) continue;
    mx = Math.max(mx, lis.at(i) + lds.at(i) - 1);
  }

  return n - mx;
};

Math.arrayLowerBound = (a, x) => {
  let lo = 0,
    hi = a.length - 1;

  while (lo + 1 < hi) {
    let md = (lo + hi) >> 1;

    if (a.at(md) < x) lo = md + 1;
    else hi = md;
  }

  if (a.at(lo) >= x) return lo;
  if (a.at(hi) >= x) return hi;
  return -1;
};

// 1671. Minimum Number of Removals to Make Mountain Array

// You may recall that an array arr is a mountain array if and only if:
// arr.length >= 3
// There exists some index i (0-indexed) with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
// Given an integer array nums​​​, return the minimum number of elements to remove to make nums​​​ a mountain array.

// Example: 
// Input: nums = [2,1,1,5,6,2,3,1]
// Output: 3
// Explanation: One solution is to remove the elements at indices 0, 1, and 5, making the array nums = [1,5,6,3,1]
