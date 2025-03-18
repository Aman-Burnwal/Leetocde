/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    
    let count = 0;
    const dp = Array.from({length: amount + 2}, () => new Array(coins.length + 1).fill(-1))

    count = helper(0, 0);
    

    return count ;

    function helper(sum , i) {

       
        if(sum == amount)  return 1;
    
        if(sum > amount || i >= coins.length) return 0;

        if(dp[sum][i] != -1) return dp[sum][i];


        let a = 0;
       


        if( amount >= ( coins[i] + sum ) ) a =  helper( sum + coins[i] , i );

        let b =  helper( sum, i + 1 );

        return dp[sum][i] = a + b;
    }
};