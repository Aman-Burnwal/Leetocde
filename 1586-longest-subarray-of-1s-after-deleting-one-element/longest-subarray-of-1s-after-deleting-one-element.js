/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let all = nums.every(num => num === 1);
    if(all) return nums.length - 1;

    let left = 0;
    let zero = 0;
    let maxLen = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) zero++;

        while(zero > 1) {
            if(nums[left] === 0)zero--;
            left++;
        }
        maxLen = Math.max(maxLen, i - left)
    }
    return maxLen;
    
};