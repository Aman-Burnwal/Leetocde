/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left  = 0;
    let right = nums.length - 1;
    let len = right;
    let idx = 0;

    while(left <= right) {
        const mid = Math.floor((left + right) / 2);

        const num = nums[mid];

        if(num > nums[len]) left = mid + 1;
        else {
            idx = mid;
            right = mid - 1;
        }
    }
    return nums[idx]
};