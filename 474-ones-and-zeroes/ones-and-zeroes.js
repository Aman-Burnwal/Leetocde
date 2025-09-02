/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    let max = 0;
    const memo = {}
    return subStringGen(0, 0, 0);

    function subStringGen (one, zero, i) {
        if(i >= strs.length) {
            return 0;
        }
        const key = `${i},${zero},${one}`;
        if(memo.hasOwnProperty(key)) return memo[key]
        let ones = 0, zeros = 0;
        for(const ch of strs[i]) {
            ch === "1" ? ones++ : zeros++;
        }
        let take = 0;
        if((one + ones) <= n && (zero + zeros) <= m) {
            take = 1 + subStringGen(one + ones, zero + zeros, i + 1);
        }
        let not_take = subStringGen(one , zero , i + 1);
        memo[key] = Math.max(take, not_take)
        
        return Math.max(take, not_take)
    }

    
};