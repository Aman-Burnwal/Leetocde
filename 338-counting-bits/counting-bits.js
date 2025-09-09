/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    
    const ans = [];

    for(let i = 0; i <= n; i++) {

        let t = i;
        let count = 0;
        while(t) {
            count += (t & 1);
            t = t >> 1;
        }
        ans.push(count)
    }
    return ans;
};