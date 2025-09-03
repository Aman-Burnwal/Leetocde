/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const dp = Array.from({length: nums.length}, () => new Array(nums.length))
    const ans = helper(0, -1);
    function helper(idx, prevIdx) {
        if(idx >= nums.length) return 0;
        if(dp[idx][prevIdx] != undefined) return dp[idx][prevIdx];
        const skip = helper(idx + 1, prevIdx);
        let take = 0;
        if(prevIdx === -1 || nums[prevIdx] < nums[idx]) take = 1 + helper(idx + 1, idx);
        // console.log(take, skip)
        return dp[idx][prevIdx] = Math.max(take, skip) 
    }
    return ans;
};