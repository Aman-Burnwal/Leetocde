/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    
    if(n < 0) return false;
    let set = new Set()

    while(n > 1) {
        if(set.has(n)) return false;
        let sum = 0;
        set.add(n)
        while(n > 0) {
            sum += ((n % 10) * (n % 10)) ;
            n = Math.floor(n / 10);
        }
        n = sum;
    }
    console.log(n)
    return n === 1;
};