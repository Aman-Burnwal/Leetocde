/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function(n) {

    if(n >= 4800) return 1;

    const arr = [[100, 0], [75, 25], [50, 50],[25, 75] ];

    const memo = {};
    return helper(n, n);

    function helper(A, B) {
        if(A <= 0 && B <= 0) return 0.5;
        if(A<= 0) return 1;
        if(B<= 0) return 0;
        let ans = 0
        let key = A + "-" + B;
        if(memo[key]) return memo[key];
        for(const [a, b] of arr) {
            ans += helper(A - a, B - b)
        }
        return memo[key] =  ans / 4;
        
    }
};