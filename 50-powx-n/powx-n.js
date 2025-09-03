/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    const dp = new Array(Math.abs(n) + 1);
    function helper(n) {
        if(n === 1) return x;
        if(n === 0) return 1;
        if(dp[n] != undefined) return dp[n];

        if(n % 2) {
            const pow = helper((n - 1) / 2)
            return dp[n] = pow * pow * x;
        }
        const pow = helper(n / 2)
        return dp[n] =  pow * pow
    }

    const ans = helper(Math.abs(n));

    return n > 0 ? ans : 1 / ans;
};