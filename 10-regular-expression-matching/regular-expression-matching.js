/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let memo = new Map();
    
    function helper(i, j) {
        let key = `${i}-${j}`;
        if (memo.has(key)) return memo.get(key);
        
        if (j === p.length) return i === s.length;

        
        let firstMatch = (i < s.length) && (s[i] === p[j] || p[j] === '.');

        if (j + 1 < p.length && p[j + 1] === '*') {

            let ans = helper(i, j + 2) || (firstMatch && helper(i + 1, j));
            memo.set(key, ans);
            return ans;
        } else {
            let ans = firstMatch && helper(i + 1, j + 1);
            memo.set(key, ans);
            return ans;
        }
    }

    return helper(0, 0);
};
