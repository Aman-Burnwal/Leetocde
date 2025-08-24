/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var productQueries = function(n, queries) {
    const pow = [];
    for(let i = 0; i <= 31; i++) {
        pow.push(Math.pow(2, i))
    }

    const powers = [];
    for(let i = pow.length - 1; i >= 0; i--) {
        if(pow[i] <= n) {
            powers.push(pow[i]);
            n-= pow[i]
        }
       
    }
    powers.reverse();


    const preComputed = [1];
    powers.forEach((power, idx) => preComputed[idx + 1] = preComputed[idx] * power);

    const ans = [];
    const mod = 1e9 + 7;
    for(const [start, end] of queries) {
        const val = preComputed[end + 1] / preComputed[start];
        ans.push(val % mod)
    }
    return ans;
};