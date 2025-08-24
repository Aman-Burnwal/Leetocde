/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const set = new Set();
    let pre = 0;
    let max = 0;

    for(let i = 0; i < s.length; i++) {
        if(set.has(s[i])) {
            while(set.has(s[i])) {
                set.delete(s[pre++])
            }
        }
        set.add(s[i]);
        max = Math.max(max, set.size)
    }
    return max;
};