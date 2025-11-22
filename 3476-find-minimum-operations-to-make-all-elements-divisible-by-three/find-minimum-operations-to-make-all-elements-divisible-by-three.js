/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let count = 0;
    for(let index = 0; index < nums.length; index++) {
        if(nums[index] % 3) count++;
    }
    return count;
   
};