/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let len = nums.length - 1;
    let jump = 0;
    let maxJump = 0;
    let end = 0;

    for(let i = 0; i < len; i++) {

        maxJump = Math.max(maxJump, i + nums[i]);
        if(end === i) {
            jump++;
            end = maxJump
        }
    }

    return jump
    
};