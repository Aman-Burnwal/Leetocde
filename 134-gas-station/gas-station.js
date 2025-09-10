/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let totalGas = 0;
    let totalCost = 0;
    let idx = 0;

    for(let i = 0; i < gas.length; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
        
    }

    if(totalCost > totalGas) return -1;

    let remGas = 0;

    for(let i = 0; i < gas.length; i++) {
        remGas += gas[i];
        remGas -= cost[i];

        if(remGas < 0) {
            idx = i + 1;
            remGas = 0;
        }
    }
    return idx;;


};