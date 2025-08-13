/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    for(let i = 0; i <= 31; i++) {
        if(Math.pow(3, i) === n) return true;
    }
    return false;
};

