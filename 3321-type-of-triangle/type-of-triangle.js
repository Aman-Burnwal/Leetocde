/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    
    

    if(nums[0] < (nums[2] + nums[1]) && nums[1] < (nums[0] + nums[2]) && nums[2] < (nums[0] + nums[1])) {
        if(nums[0] == nums[1] && nums[1] == nums[2]) return "equilateral";

    if(nums[0] == nums[1] || nums[1] == nums[2] || nums[2] == nums[0]) return "isosceles";
    return "scalene"
    }

    return "none";
};