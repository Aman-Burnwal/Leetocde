/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const left = [];
    const right = [];

    left[0] = -1;

    for(let i = 1; i < heights.length; i++) {
        let lastSmallIdx = i - 1;
        while(lastSmallIdx >= 0 && heights[lastSmallIdx] >= heights[i]) {
            lastSmallIdx = left[lastSmallIdx];
        }
        left[i] = lastSmallIdx;
    }

    right[heights.length -1] = heights.length;
    
    for(let j = heights.length - 2; j >= 0; j--) {
        let lastSmallIdx = j + 1;
        while(lastSmallIdx < heights.length &&  heights[lastSmallIdx] >= heights[j]) {
            lastSmallIdx = right[lastSmallIdx];
        }
        right[j] = lastSmallIdx;
    }
    let max = 0;
    for(let i = 0; i < heights.length; i++) {
        let width = right[i] - left[i] - 1;
        max = Math.max(width * heights[i], max)
    }
    return max;
};