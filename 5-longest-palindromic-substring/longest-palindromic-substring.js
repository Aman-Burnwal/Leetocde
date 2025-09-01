/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longestPalindromicString = "";
    for(let idx = 0; idx < s.length; idx++) {
        const same = checkPalindrome(idx, idx);
        const next = checkPalindrome(idx, idx + 1);
        if(longestPalindromicString.length < same.length) longestPalindromicString = same;
        if(longestPalindromicString.length < next.length) longestPalindromicString = next;
    }
    return longestPalindromicString;


    function checkPalindrome(left, right) {
        let i = left, j = left;
        while(s[left] === s[right] && left >= 0 && right < s.length) {
            i = left;
            j = right;
            left--;
            right++;
        }
        return s.substring(i, j+ 1);
    }



};