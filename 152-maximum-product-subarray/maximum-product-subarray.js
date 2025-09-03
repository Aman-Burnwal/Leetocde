/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = -Infinity;

    let curr = 1;

    for(const num of nums) {
        curr *= num;

        max = Math.max(curr, max, num);
        if(curr === 0) curr = 1;
    }

    curr = 1;

    for(let i = nums.length -1; i >= 0; i--) {
        const num = nums[i];
        curr *= num;
        // if(num > curr) {
        //     curr = num;
        // }
        max = Math.max(curr, max, num);
        if(curr === 0) curr = 1;
    }

    return max;
};