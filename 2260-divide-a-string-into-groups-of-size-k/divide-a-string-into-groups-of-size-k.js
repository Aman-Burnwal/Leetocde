/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    const ans = [];
    for(let i = 0; i < s.length; i+= k) {
        ans.push(s.substring(i, i + k));
    }
    let i = 0;
    while(ans[ans.length - 1].length != k && fill.length) {
        ans[ans.length - 1] += fill[i];
        i++;
        i %= fill.length;
    }
    
    
    return ans;

};