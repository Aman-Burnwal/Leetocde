/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(A, B) {
    // const dp = Array.from({length: text1.length + 1}, () => new Array(text2.length))
    const Memo = Array.from({length: A.length}, () => new Array(B.length).fill(-1));
    const R = (n, m) => {
        if (n < 0 || m < 0) return 0;
        if (Memo[n][m] != -1) return Memo[n][m]; //add

        if (A[n] == B[m]) Memo[n][m] = R(n - 1, m - 1) + 1;
        else Memo[n][m] = Math.max(R(n, m - 1), R(n - 1, m));

        return Memo[n][m]; // add Memo to memoize the results
    };
    return R(A.length - 1, B.length - 1);
};