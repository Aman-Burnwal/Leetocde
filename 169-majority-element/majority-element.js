/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let maj = nums[0];
    let count = 1;

    for(let i = 1; i < nums.length; i++) {
        if(maj != nums[i] ) {
            count--;
            if(count === 0) {
                maj = nums[i];
                count = 1;
            }
        } else count++;
    }

    return maj;


};