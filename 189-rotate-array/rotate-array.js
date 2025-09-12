/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k %= nums.length;
    let len = nums.length;
    const rem = nums.splice(len - k);
    nums.splice(0, 0, ...rem)

};