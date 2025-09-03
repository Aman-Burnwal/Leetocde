/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if(amount === 0) return 0;
  
    const dp = new Array(amount + 1).fill(-1)
    let max =  helper(amount);


    function helper(curr) {
    
        if(curr === 0) {
            return 0;
        }
        if(curr < 0) return 1e5;
        if(dp[curr] != -1) return dp[curr];
        let min = 1e5;

        for(let i = 0; i < coins.length; i++) {
            const take = helper(curr - coins[i]);
           min = Math.min(take + 1, min);
        }
        return dp[curr] = min;
    }

    return max === 1e5 ? -1 : max;
};