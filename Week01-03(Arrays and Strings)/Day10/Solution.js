/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let max_area = 0;
    let a_pointer = 0;
    let b_pointer = height.length - 1;

    while (a_pointer < b_pointer) {
        const width = b_pointer - a_pointer;
        const minHeight = Math.min(height[a_pointer], height[b_pointer]);
        const area = minHeight * width;
        max_area = Math.max(max_area, area);

        if (height[a_pointer] < height[b_pointer]) {
            a_pointer++;
        } else {
            b_pointer--;
        }
    }
    return max_area;
};

const height = [1,8,6,2,5,4,8,3,7]
console.log("Max area: ", maxArea(height)) // Output: 49