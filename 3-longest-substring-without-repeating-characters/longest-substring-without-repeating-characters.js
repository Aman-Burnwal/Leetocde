/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLen = 0;
    let left = 0;
    const memo = new Set()
    for(let idx = 0; idx < s.length; idx++) {
        const ch = s[idx];
        while(memo.has(ch)) {
            memo.delete(s[left++])
        };
        memo.add(ch);
        maxLen = Math.max(maxLen, memo.size)
    };
    return maxLen;
};