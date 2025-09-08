/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const dp = new Array(n + 2).fill(-1)
    return helper(n)
    function helper (step) {
        if(step === 0) return 1;
        if(step < 0) return 0;
        if(dp[step] != -1) return dp[step]

        return dp[step] = helper(step - 1) + helper(step - 2)
    }
};