/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const ans = new Array(numRows).fill("");
    let i = 0;
    while(i < s.length) {
       
        let k = 0;
        while(k < numRows && i < s.length) {
            ans[k++] += s[i++];
        }

        k = numRows - 2;
        while(k > 0 && i < s.length) {
            ans[k--] += s[i++]
        }

    }

    return ans.join("")
};