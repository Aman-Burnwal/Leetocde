/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let numsLen = nums.length;
    if(numsLen === 1) return nums[0];
    if(numsLen === 2) return Math.max(nums[0], nums[1])
    const dp = new Array(numsLen).fill(-1)

    const first = helper(1);
    numsLen -= 1;
    dp.forEach((_, idx) => dp[idx] = -1)
    const second = helper(0);
    return Math.max(first, second)

    function helper(idx) {
        if(idx >= numsLen) return 0;
        if(dp[idx] != -1) return dp[idx];

        return dp[idx] = Math.max(helper(idx + 1), nums[idx] + helper(idx + 2));
    }
};