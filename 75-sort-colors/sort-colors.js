/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    // for(let i = 0; i < right; i++) {
    //     if(nums[i] === 0) {
    //         [nums[i], nums[left]] = [nums[left], nums[i]];
    //         left++;

    //     }
    //     else if (nums[i] === 2) {
    //         [nums[i], nums[right]] = [nums[right], nums[i]];
    //         i--;
    //         right--;
    //     }
    // }

    let zero = 0;
    let one = 0;
    let two = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) zero++;
        else if(nums[i] === 1) one++;
        else two++;
    }

    let i  = 0;
    while(zero--) nums[i++] = 0;
    while(one--) nums[i++] = 1;
    while(two--) nums[i++] = 2;
};