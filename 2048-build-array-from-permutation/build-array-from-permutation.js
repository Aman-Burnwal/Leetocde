/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    

    for(let i = 0; i < nums.length; i++) {

        nums[i] += 1000 *(nums[nums[i]] % 1000);
    }


    for(let i = 0; i < nums.length; i++) {

        nums[i] = Math.floor(nums[i] / 1000);
    }

    return nums;
};