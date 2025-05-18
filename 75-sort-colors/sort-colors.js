/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {

    let start = 0;
    let end = nums.length - 1;
    let idx = 0;


    while(idx <= end) {

        if(nums[idx] == 2) {

            [nums[end], nums[idx]] = [nums[idx], nums[end]];

            end--;
            idx--;
         
        }

        else if (nums[idx] == 0) {
            [nums[idx], nums[start]] = [nums[start], nums[idx]];
            start++;
        }
        idx++;
    }

    return nums;
    
};