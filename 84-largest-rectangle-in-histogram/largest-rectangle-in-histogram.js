/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const n = heights.length;
    const left = new Array(n);
    const right = new Array(n);
    
    left[0] = -1;

    for(let idx = 1; idx < heights.length; idx++) {
        let lastSmall = idx - 1;

        while (lastSmall >= 0 && heights[lastSmall] >= heights[idx]) {
            lastSmall = left[lastSmall];
        }
        left[idx] = lastSmall;

    }

    right[heights.length - 1] =  heights.length;

    for(let idx = heights.length - 1; idx >= 0; idx--) {
        let lastSmall = idx + 1;

        while(lastSmall <= heights.length && heights[idx] <= heights[lastSmall]) {
            lastSmall = right[lastSmall];
        }
        right[idx] = lastSmall;
    }

    let maxArea = 0;
    for (let i = 0; i < n; i++) {
        const width = right[i] - left[i] - 1;
        const area = heights[i] * width;
        maxArea = Math.max(maxArea, area);
    }

    return maxArea;
    
    return 6;
};
