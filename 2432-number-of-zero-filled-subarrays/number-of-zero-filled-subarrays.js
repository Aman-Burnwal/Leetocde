/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let count = 0;
    let curr = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] != 0) curr = 0;
        else curr++;
        count += curr;
    }
    return count;
};