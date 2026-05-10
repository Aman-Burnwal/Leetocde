/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var maximumJumps = function(nums, target) {
    const n = nums.length;
    const memo = new Array(n);
    let maxi = rec(0)

    return maxi === -Infinity ? -1 : maxi

    function rec(i) {

        if(i == n - 1) return 0;
        if(i >= n) return -Infinity

        if(memo[i] != undefined) return memo[i]

        // console.log(i)
        
        let max = -Infinity;
        for(let j = i + 1; j < n; j++) {

            const val = nums[j] - nums[i];
            if(-target <= val && val <= target) {
                max = Math.max(max, 1 + rec(j))
            }
        }

        return memo[i] = max;


    }
};