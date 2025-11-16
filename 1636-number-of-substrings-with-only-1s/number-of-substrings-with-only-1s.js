/**
 * @param {string} s
 * @return {number}
 */

 
var numSub = function(s) {
    let totalOnes = 0;
    let curr = 0;
    const mod = Math.pow(10, 9) + 7

    for(let index = 0; index < s.length; index++) {
        if(s[index] === '1') {
            curr++;
        }
        else curr = 0;
        totalOnes += curr;
        // totalOnes % mod;
    }

    return totalOnes % mod;
};