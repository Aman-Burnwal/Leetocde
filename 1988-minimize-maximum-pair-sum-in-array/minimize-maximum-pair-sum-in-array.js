/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums.sort((a, b) => a - b);

    let max = -1;

    let left = 0;
    let right = nums.length - 1;

    while(left < right) {
        max = Math.max(nums[left++] + nums[right--], max)
    }
    return max;
};