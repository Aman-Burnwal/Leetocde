/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var productQueries = function(n, queries) {
    const powers = [];
    let MOD = Math.pow(10, 9) + 7;
    for(let i = 0; i < 31; i++) {
        if(n & (1 << i)) powers.push(1 << i);
    }

    const array = [1];
    for(let i = 0; i < powers.length; i++) {
        array.push(array[i] * powers[i]);
    }
    const ans = [];
    for(const [start, end] of queries) {
        let val = ((array[end + 1]) / (array[start]) ) % MOD
        ans.push(val)
    }
    return ans;
};
