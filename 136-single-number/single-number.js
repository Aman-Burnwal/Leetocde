/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    return nums.reduce((curr, acc) => curr ^ acc, 0)
};