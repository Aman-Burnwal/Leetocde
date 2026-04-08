/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var xorAfterQueries = function(nums, queries) {

    const n = nums.length;
    const mod = Math.pow(10, 9) + 7;
    for(let i = 0; i < queries.length; i++) {

        let [l, r, k, v] = queries[i];

        while(l <= r && l < n) {
            nums[l] = (nums[l] * v) % mod;
            l += k;
        }
    }

    return nums.reduce((curr, acc) => curr ^ acc, 0)
};