/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    
    let i = 0;

    while (i < nums.length) {
        if (nums[i] !== i + 1) {
            let correctIdx = nums[i] - 1;
            if (nums[i] === nums[correctIdx]) {
                return nums[i];
            }
            [nums[i], nums[correctIdx]] = [nums[correctIdx], nums[i]];
        } else {
            i++;
        }
    }
};