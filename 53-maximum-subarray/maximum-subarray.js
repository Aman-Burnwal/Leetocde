/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = -Infinity;
    let sum = max;
    
    for(const num of nums) {
        sum = Math.max(sum + num, num);
        max = Math.max(sum, max)
    }
    return max;
};