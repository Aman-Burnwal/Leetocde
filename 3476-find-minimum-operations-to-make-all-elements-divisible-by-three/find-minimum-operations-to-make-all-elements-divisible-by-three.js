/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    
    return nums.reduce((acc, curr) => curr % 3 ? acc + 1 : acc, 0);
   
};