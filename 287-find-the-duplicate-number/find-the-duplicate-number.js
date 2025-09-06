/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let i = 0;

    while(i < nums.length) {
        if(nums[i] === i + 1)  i++;
        else {
            const next = nums[i] - 1
            // console.log(nums)
            if(nums[i] === nums[next]) return nums[next];
            [nums[i], nums[next]] = [nums[next], nums[i]];

        }
    }
};