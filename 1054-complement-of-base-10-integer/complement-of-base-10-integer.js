/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {

    let ans = n.toString(2).split("");
    let rem = "1"

    let res = 0;

    for(let i = 0; i < ans.length; i++) {
        if(ans[i] === "0") res += Math.pow(2, ans.length - i - 1)
    }

    

    return  res;
};