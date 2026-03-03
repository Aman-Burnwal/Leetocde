/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
    s = ["0"];

    for(let i = 1; i <= n; i++) {
        // s.push("1");

        // console.log(s.slice(0, i).reverse().map(item => item === "1" ? "0" : "1"))
        s.push("1", ...s.slice(0).reverse().map(item => item === "1" ? "0" : "1"))
        // console.log(s)
    }

    // console.log(s)

    return s[k - 1]

    
};