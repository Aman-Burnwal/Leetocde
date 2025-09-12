/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    
    let left = 0;
    let sum = 0;
    let minLen = 1e9;
    for(let i = 0; i < nums.length; i++) {

        sum += nums[i];
        while(target <= sum & left <= i) {
            minLen = Math.min(minLen, i - left + 1);
            sum -= nums[left++]
        }
    }
    return minLen === 1e9 ? 0 : minLen;
};