/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let count = 0;
   
    const map = [];
    return helper(n)

    


    function helper(n) {

        if(1 >=  n) {
            return 1;
        }
        if(map[n] > 0) return map[n];

        let a = helper(n - 1);
        let b = helper(n - 2);
        return map[n] = a + b;
    }
};