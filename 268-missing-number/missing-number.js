/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const len = nums.length;
    const sum = nums.reduce((acc, curr) => acc + curr, 0);

    return (len * (len + 1)) / 2 - sum;
};