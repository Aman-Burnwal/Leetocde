/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const dp = Array.from({length: text1.length + 1}, () => new Array(text2.length + 1))
    return rec(0, 0);
    function rec (i, j) {
        if(i >= text1.length || j >= text2.length) return 0;
  
        if(dp[i][j] != undefined) return dp[i][j]
        if(text1[i] === text2[j]) return dp[i][j] = rec(i + 1, j + 1) + 1;
        return dp[i][j] = Math.max(rec(i + 1, j), rec(i, j+ 1));

    }
};