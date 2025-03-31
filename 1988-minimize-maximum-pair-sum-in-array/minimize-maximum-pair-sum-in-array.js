/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    let max = 0;
    nums.sort((a, b) => a - b);

    for(let i = 0; i < nums.length; i++) {
        max = Math.max(max, nums[i] + nums[nums.length - i -1] )
    }

    return max;
};