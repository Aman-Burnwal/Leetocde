/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let ans = "";

    for(let i = 1; i < num.length -1; i++) {
        if(num[i] === num[i - 1] && num[i] === num[i + 1]) {
            ans = Math.max(num[i], ans);
        }
    }
    ans = String(ans);
    return ans === '' ? "" : ans.padEnd(3,ans[0])
};