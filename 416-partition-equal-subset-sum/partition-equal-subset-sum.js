/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    
    let total = nums.reduce((acc, curr) => acc + curr, 0)

    const dp = Array.from({length : nums.length}, () => new Array(total + 1));
    total = total / 2;

    if(total !== Math.floor(total)) return false;

    return helper(0, 0);

    function helper(i, sum) {
        if(sum === total ) return true;
        if(i >= nums.length || sum > total) {
            return false;
        }
        

        if(dp[i][sum] != undefined) return dp[i][sum]
        
        let take = helper(i + 1, sum + nums[i]);
        let not = helper(i + 1, sum);
        
        return dp[i][sum] = take || not


    }
};