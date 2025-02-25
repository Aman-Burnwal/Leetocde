/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    
    nums.sort((a, b) => a - b);
    let n = nums.length - 1;

    let max = Math.max(nums[n] * nums[n - 1] * nums[n - 2], Math.max(nums[n] * nums[n - 1] * nums[0], nums[n] * nums[0] * nums[1]));

    return Math.max(max, nums[0] * nums[1] * nums[2]);
};