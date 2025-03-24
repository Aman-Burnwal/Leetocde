/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    

    

    const dp = Array.from({length: coins.length + 5} , () => new Array(amount + 2).fill(-1))
    let ans = helper(0, 0);
    if(ans == Number.MAX_SAFE_INTEGER ) return -1;
    return ans;

    function helper(i, sum ) {
        // console.log(i, sum)
        
        if(sum == amount) return 0;

        if(sum > amount || i >= coins.length) return Number.MAX_SAFE_INTEGER;
        if(dp[i][sum] != -1) return dp[i][sum];


        return dp[i][sum] = Math.min( 1 + helper(i, sum + coins[i]), helper(i + 1, sum));
    }
};