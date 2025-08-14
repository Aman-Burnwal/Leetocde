/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {
    const powers = [];
    let val = 0;
    let i = 0;
    while(val < n) {
        val = Math.pow(3, i++);
        powers.push(val);
    }
    const memo = new Map()
    
    function helper(sum, i) {
        const key = `${sum} + ${i}`
        if(memo.has(key))return memo.get(key)
        if(sum === n) return true;
        if(sum > n) return false;
        if(i > powers.length) return false;
        let isPower = helper(sum + powers[i], i + 1) || helper(sum, i + 1);
        memo.set(key, isPower )
        return isPower
    }

    return helper(0, 0)

};