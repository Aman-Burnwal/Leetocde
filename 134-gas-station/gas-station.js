/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    
    let total_gas = 0;
    let total_cost = 0;


    for(let i = 0; i < gas.length; i++) {

        total_gas += gas[i];
        total_cost += cost[i];
    }

    if(total_cost > total_gas) return -1;


    let remGas = 0;
    let indx = 0;

    for(let i = 0; i < gas.length; i++) {

        remGas += gas[i];
        remGas -= cost[i];

        if(remGas < 0) {
            indx = i + 1;
            remGas = 0;
        }
    }

    return indx;



};