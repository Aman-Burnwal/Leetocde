/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {


    const dp = Array.from({length: coins.length + 1}, () => new Array(amount).fill(-1));


    return helper(0, 0);

   



    function helper(i, sum) {

        if(sum == amount) return 1;
        if(sum > amount || i >= coins.length) return 0;

        if(dp[i][sum] != -1) return dp[i][sum];


        return dp[i][sum] = helper(i, sum + coins[i]) + helper(i + 1, sum);
    }
    
};