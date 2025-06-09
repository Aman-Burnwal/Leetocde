/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(n, k) {

    let curr = 1;
    k--;

    while(k > 0) {

        let currCount = count(curr, curr + 1);

        if(currCount <= k) {
            k -= currCount;
            curr++;
        }
        else {
            k-= 1;
            curr *= 10;
        }

    }

    return curr;

    function count(curr, next) {

        let count = 0;
        while(curr <= n) {

            count += (next - curr);
            curr *= 10;
            next = Math.min(next * 10, n + 1);

        }
        return count;
    }
    
};