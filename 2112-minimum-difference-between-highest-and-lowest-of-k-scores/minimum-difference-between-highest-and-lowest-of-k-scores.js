/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    if(nums.length <= 1) return 0;

    nums.sort((a, b) => a - b);

    let ans = 1e7

    for(let i = 0; i < nums.length - k + 1 ; i++) {
        ans = Math.min(ans, nums[i + k - 1] - nums[i]);
    }

    return ans;
};