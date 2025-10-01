/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    
    let totalBottles = numBottles;
    let emptyBottles = 0;

    while(numBottles > 0) {

        emptyBottles += numBottles;
        numBottles = Math.floor(emptyBottles / numExchange);
        totalBottles += numBottles;

        emptyBottles %= numExchange;

    }

    return totalBottles;
};