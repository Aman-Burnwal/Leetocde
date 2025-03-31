/**
 * @param {number[]} nums
 * @return {number}
 */
var findValueOfPartition = function(nums) {
    
    nums.sort((a, b) => a - b);
    let ans = Number.MAX_SAFE_INTEGER;

    for(let i = 0; i < nums.length - 1; i++) {

        ans = Math.min(ans, nums[i +  1] - nums[i])
    }
    return ans;
};