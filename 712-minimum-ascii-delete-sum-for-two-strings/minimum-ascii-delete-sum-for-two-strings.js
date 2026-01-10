/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
    const dp = Array.from({length: s1.length}, () => new Array(s2.length));
    return dfs(0, 0);
    function dfs(i, j) {
        if(i >= s1.length) {
            return calculateSum(j, s2)
        }
        else if (j >= s2.length) {
            return calculateSum(i, s1);
        }

        if(s1[i] === s2[j]) {
            return 0 +  dfs(i + 1, j + 1);
        }

        if(dp[i][j] != undefined) return dp[i][j]

        return dp[i][j] = Math.min(s1.charCodeAt(i) +  dfs(i + 1, j), s2.charCodeAt(j) + dfs(i, j + 1))
    }

    function calculateSum(index, str) {
        let sum = 0;
        for(index; index < str.length; index++) {
            sum += str.charCodeAt(index)
        }
        return sum;
    }
};