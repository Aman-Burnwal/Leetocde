/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let count = 0;
    let curr = 0;

    nums.forEach((num) => {
        num !==  0 ? curr = 0: curr++;
        count += curr;
    });
    return count;
};