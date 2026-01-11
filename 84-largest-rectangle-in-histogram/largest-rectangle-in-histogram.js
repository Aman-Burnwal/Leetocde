/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    
    const rowLen = heights.length;
    const left = new Array(rowLen);
    const right = new Array(rowLen);

    left[0] = -1;
    for(let row = 1; row < rowLen; row++) {
        let lastSmallIndex = row - 1;
        while(lastSmallIndex >= 0 && heights[lastSmallIndex] >= heights[row]) {
            lastSmallIndex = left[lastSmallIndex];
        }
        left[row] = lastSmallIndex;
    }

    
    right[rowLen - 1] = rowLen
    for(let row = rowLen - 2; row >= 0; row--) {
        let lastSmallIndex = row + 1;
        while(lastSmallIndex < rowLen && heights[lastSmallIndex] >= heights[row]) {
            lastSmallIndex = right[lastSmallIndex];
        }
        right[row] = lastSmallIndex;
    }

    let maxArea = 0;

    for(let index = 0; index < rowLen; index++) {
        const height = heights[index];
        const width = right[index] - left[index] - 1;
        const area = height * width;
        maxArea = Math.max(area, maxArea);
    }
    return maxArea;
};