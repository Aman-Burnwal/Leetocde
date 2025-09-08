/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {

    let len = cost.length - 1;
    let first = 0;
    let second = 0

    for(let i = len; i >= 0; i--) {
        const curr = cost[i] +  Math.min(first, second)
        second = first;
        first = curr;
    
    }
    return Math.min(first, second)




};