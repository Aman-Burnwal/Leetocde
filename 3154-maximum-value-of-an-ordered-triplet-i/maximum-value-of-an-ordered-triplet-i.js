/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    
    let ans = 0;
    let n = nums.length;

    for(let i = 0; i < n - 2; i++) {

        for(let j = i + 1; j < n - 1; j++) {

            let t = nums[i] - nums[j] ;

            for(let k = j + 1; k < n; k++) {

                ans = Math.max(( t * nums[k]) , ans) 
            }
        }
    }

    return ans;
};