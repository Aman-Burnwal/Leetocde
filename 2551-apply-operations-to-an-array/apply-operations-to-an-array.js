/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {


    for(let i = 0; i < nums.length - 1; i++) {

        if(nums[i] == nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
            i++;
        }
    }
    1, 4, 0, 2, 0

    let slow = 0
    for(let i = 0; i < nums.length; i++) {

        if(nums[i] != 0) {
            [nums[i], nums[slow]] = [nums[slow], nums[i]];
            slow++;
        }
    }

    return nums;
    
};