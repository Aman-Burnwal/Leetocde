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
    let called = false;
    
    function helper(sum, i) {
        if(sum === n || called)  {
            called = true;
            return true
        }
        if(sum > n) return false;
        if(i > powers.length) return false;

        return helper(sum + powers[i], i + 1) || helper(sum, i + 1)
    }

    return helper(0, 0)

};