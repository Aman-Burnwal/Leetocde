/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var pathExistenceQueries = function(n, nums, maxDiff, queries) {
    const arr = [1];
    let idx = 1;

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] - nums[i - 1] > maxDiff) idx++;
        arr.push(idx);
    }

    const ans = []
    for(const [u, v] of queries) {
        ans.push(arr[u] === arr[v])
    }

    return ans;
};