/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let selected = prices[0];
    for(let i = 0; i < prices.length; i++) {
        maxProfit = Math.max(prices[i] - selected, maxProfit)
        selected = Math.min(prices[i] , selected)
    }

    return maxProfit
};