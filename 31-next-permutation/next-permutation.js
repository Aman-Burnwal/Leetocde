/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {

    for(let right = nums.length - 2; right >= 0; right--) {
        if(nums[right] > nums[right + 1] ) continue;
        for(let rightMost = nums.length - 1; rightMost > right; rightMost--) {
            if(nums[rightMost] > nums[right]) {
                [nums[rightMost], nums[right]] = [nums[right], nums[rightMost]];
                const slice = nums.slice(right + 1).sort((a, b) => a - b);


                for(let idx = right + 1; idx < nums.length; idx++) {
                    nums[idx] = slice[idx - right - 1];
                }
            
                return nums;
            }
        }
    }
    return nums.sort((a, b) => a - b)
};