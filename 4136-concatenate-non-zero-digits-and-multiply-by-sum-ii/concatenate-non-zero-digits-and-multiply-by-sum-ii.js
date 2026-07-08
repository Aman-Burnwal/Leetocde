/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumAndMultiply = function(s, queries) {
    const MOD = 1000000007n;

    const pre = [[0, 0n, 0]]; // [digitSum, concatValue(mod), nonZeroCount]
    let currSum = 0;
    let currNum = 0n;
    let pow = 0;

    for (let i = 0; i < s.length; i++) {
        let num = Number(s[i]);
        if (num !== 0) {
            currSum += num;
            currNum = (currNum * 10n + BigInt(num)) % MOD;
            pow++;
        }
        pre.push([currSum, currNum, pow]);
    }

    const pow10 = [1n];
    for (let i = 1; i <= s.length; i++) {
        pow10.push((pow10[i - 1] * 10n) % MOD);
    }

    const ans = [];
    for (const [l, r] of queries) {
        const [rSum, rMul, rPow] = pre[r + 1];
        const [lSum, lMul, lPow] = pre[l];

        const sum = rSum - lSum;
        const n0 = rPow - lPow; // non-zero digit count within [l, r]

        let x = (rMul - lMul * pow10[n0]) % MOD;
        if (x < 0n) x += MOD;

        const res = (x * BigInt(sum)) % MOD;
        ans.push(Number(res));
    }

    return ans;
};