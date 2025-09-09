/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {

    let steps = nums[0];
    for(let i = 1; i < nums.length; i++) {
        if(steps === 0) return false;
        steps= Math.max(steps - 1, nums[i]);
    }
    return true;
};