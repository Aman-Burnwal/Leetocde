/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function(nums1, nums2) {
    
    const dp = Array.from({length: nums1.length + 1}, () => new Array(nums2.length).fill(null));
    return solve(0, 0);
    function solve(i, j) {
        if(i >= nums1.length || j >= nums2.length) return Number.MIN_SAFE_INTEGER
        if(dp[i][j] != null) return dp[i][j]
        
        let curr = nums1[i] * nums2[j];
        let take = curr + Math.max(0, solve(i + 1, j + 1))
        let max = Math.max(take, solve(i + 1, j), solve(i, j + 1));

        return dp[i][j] = max
    }
};