/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const dp = new Array(nums.length).fill(-1)
    return helper(0)

    function helper(i) {

        if(i >= nums.length) return 0;
        if(dp[i] != -1) return dp[i]
        return dp[i] = Math.max(helper(i + 1) , nums[i] + helper(i + 2))


    }
};