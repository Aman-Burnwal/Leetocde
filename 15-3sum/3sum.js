/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);

    const triplets = [];

    for(let idx1 = 0; idx1 < nums.length - 2; idx1++) {

        if(idx1 > 0 && nums[idx1] === nums[idx1 - 1]) continue;
        if(nums[idx1] > 0) break;

        let left = idx1 + 1;
        let right = nums.length -1;

        while(left < right) {
            const sum = nums[left] + nums[right] + nums[idx1]
            if(sum === 0) {
                triplets.push([nums[left], nums[idx1], nums[right]]);

                left++;
                right--;

                while(left < right && nums[left] === nums[left - 1]) left++;
                while(left < right && nums[right] === nums[right + 1]) right--;
            }
            else if(sum > 0) right--;
            else left++;
        }
    }
    return triplets;
};