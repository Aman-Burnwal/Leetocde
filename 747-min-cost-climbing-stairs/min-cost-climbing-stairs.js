/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {

    cost.push(0)
    const dp = new Array(cost.length).fill(0);
    let len = cost.length - 1;
    cost.push(0, 0)

    for(let i = len; i >= 0; i--) {
        console.log(cost[i])
        cost[i] += Math.min(cost[i + 2], cost[i + 1])


    }
    return Math.min(cost[0], cost[1])




};