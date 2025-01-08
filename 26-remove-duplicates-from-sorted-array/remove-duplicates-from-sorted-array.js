/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    let j = 0;
    let i = 0;

    while(j < nums.length) {

        if(nums[i] == nums[j] || i == j) j++;
        else {
            i++;
            nums[i] = nums[j];
            
            j++;
        }
    }


    return i + 1;
};