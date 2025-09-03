/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const left = [height[0]];
    for(let i = 1; i < height.length; i++) {
        left[i] = Math.max(left[i - 1], height[i]);
    }
    const right = [height[height.length -1]];
    let j = 0;
    for(let i = height.length -2; i >= 0; i--) {
        right[j + 1] = Math.max(right[j], height[i]);
        j++;
    }
    right.reverse();
    let sum = 0;
    for(let i = 1; i < left.length; i++) {
        sum += Math.min(left[i], right[i]) - height[i]
    }
    
    return sum; 
};