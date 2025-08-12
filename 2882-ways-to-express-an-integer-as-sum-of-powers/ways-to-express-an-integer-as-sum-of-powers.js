var numberOfWays = function(n, x) {
    const MOD = 1e9 + 7;

    // Precompute powers
    const powers = [];
    for (let i = 1; ; i++) {
        let val = Math.pow(i, x);
        if (val > n) break;
        powers.push(val);
    }

    // dp[s] = number of ways to get sum 's'
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1; // one way to make sum 0 (choose nothing)

    for (let p of powers) {
        for (let sum = n; sum >= p; sum--) {
            dp[sum] = (dp[sum] + dp[sum - p]) % MOD;
        }
    }

    return dp[n];
};
