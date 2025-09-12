/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let earn = 0;
    let min = prices[0];
    for(let i = 1; i < prices.length; i++) {
        if(prices[i] > min) {
            earn += prices[i] - min;
            min = prices[i];
        }
        else min = prices[i];
    }
    return earn;
};