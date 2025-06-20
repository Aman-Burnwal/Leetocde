/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxDistance = function(s, k) {
    
    let maxMd = 0, E = 0, W = 0, N = 0, S = 0;

    for(let i = 0; i < s.length; i++) {

        if(s[i] == "E") E++;
        else if(s[i] == "W") W++;
        else if(s[i] == "N") N++;
        else  S++;

        let currMd = Math.abs(E - W) + Math.abs(N - S);

        let steps = i + 1;
        let wasted = steps - currMd;

        let extra = 0;
        if(wasted != 0) {
            extra = Math.min(2 * k , wasted);
        }
        let final = currMd + extra;
        maxMd =  Math.max(final, maxMd);
    }
    return maxMd;
};
