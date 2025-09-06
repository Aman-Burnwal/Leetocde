/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    // first find the min index

    let left = 0; 
    let right = nums.length - 1;
    let idx = 0;
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);

        const num = nums[mid];

        if(num > nums[nums.length -1]) left = mid + 1;
        else {
            idx = mid;
            right = mid - 1;
        }
    }
    
    if(nums[nums.length - 1] >= target) {
        let left = idx;
        let right = nums.length - 1;
        while(left <= right) {
            const mid = Math.floor((left + right) / 2);
            if(nums[mid] === target) return mid;
            if(nums[mid] > target) right = mid - 1;
            else left = mid + 1;
        }
        return -1;
    }
    else {
        let left = 0;
        let right = idx - 1;

        while(left <= right) {
            const mid = Math.floor((left + right) / 2);
            if(nums[mid] === target) return mid;
            if(nums[mid] > target) right = mid - 1;
            else left = mid + 1;
        }
        return -1;
    }
};