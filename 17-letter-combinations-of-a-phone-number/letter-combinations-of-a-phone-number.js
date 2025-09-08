/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    
    const map = {
        2 : "abc",
        3 : "def",
        4 : "ghi",
        5 : "jkl",
        6 : "mno",
        7 : "pqrs",
        8 : "tuv",
        9 : "wxyz"
    };

    const ans = [];

    dfs(0, "")
    return ans;


    function dfs(idx, str) {
        if(idx === digits.length) {
            if(str != "")ans.push(str);
            return;
        }

        const word = map[digits[idx]];

        for(const ch of word) {
            dfs(idx + 1, str + ch);
        }
    }


    

};