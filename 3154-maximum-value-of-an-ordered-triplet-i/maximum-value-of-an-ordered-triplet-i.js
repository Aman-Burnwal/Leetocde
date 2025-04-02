/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    
    let ans = 0;

    for(let i = 0; i < nums.length; i++) {

        for(let j = i + 1; j < nums.length; j++) {

            let t = nums[i] - nums[j] ;

            for(let k = j + 1; k < nums.length; k++) {

                ans = Math.max(( t * nums[k]) , ans) 
            }
        }
    }

    return ans;
};