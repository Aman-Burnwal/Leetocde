/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {

    const freqArr = new Array(26).fill(0);

    for(const ch of s) {
        freqArr[ch.charCodeAt(0) - 97]++;
    }

    let maxOdd = 0;
    let minEven = Infinity;

    for(let freq of freqArr) {
        if(freq === 0) continue;
        else if(freq % 2 === 0 ) {
            minEven = Math.min(freq, minEven);
        }
        else {
            maxOdd = Math.max(freq, maxOdd);
        }
    }

    return maxOdd - minEven;

    
};