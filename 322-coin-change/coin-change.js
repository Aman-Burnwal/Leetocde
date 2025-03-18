/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    


    const map = new Map();

    let ans = helper( amount);

    

    if(ans == Infinity) return -1;
    return ans;


    function helper( sum) {

       

        if(sum == 0) return 0;
        if(sum < 0 ) return Infinity;

        if(map.has(sum)) return map.get(sum);

        
        let max = Infinity;

        for(const coin of coins) {

            let count =  1 + helper(sum - coin );

            max = Math.min(max, count)
        } 

        map.set(sum , max);

        return max;
       
    }
};