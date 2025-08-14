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
    
    while(powers.length) {
        let d = powers.pop();
        if(d <= n) n -= d;
    }



    return n == 0;

};