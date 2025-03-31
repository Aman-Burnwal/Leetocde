/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
var putMarbles = function(weights, k) {
    
    const pairSum = new Array();

    for(let i = 0; i < weights.length - 1; i++) {
        pairSum.push(weights[i] + weights[i + 1]);
    }

    pairSum.sort((a, b) => a - b);

    let maxSum = 0, minSum = 0;

    for(let i = 0; i < k - 1; i++) {

        minSum += pairSum[i];
        maxSum += pairSum[pairSum.length - 1 - i];
    }

    return maxSum - minSum;
};