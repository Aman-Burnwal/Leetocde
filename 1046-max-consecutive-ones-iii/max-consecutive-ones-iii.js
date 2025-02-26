/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {


    let count = 0, idx = 0;
    const stack = new Array();

    for(let i = 0; i < nums.length; i++) {

        if(nums[i] === 0) {
            stack.push(i + 1);

            if(stack.length > k) {

                idx = stack.shift();
                
            }
           
        }

        count = Math.max( i + 1 - idx, count);
        
        // console.log(count, i + 1, idx, i+ 1 - idx)


    }

    return count;
    
    // return helper(k, 0);

    // function helper (k , idx) {

    //     if(idx == nums.length) return 0;


    //     if(nums[idx] = 1) return 1 + helper(k, idx + 1);

    //     else if(k == 0) return helper(k, idx + 1);

            
    //     let a =   helper(k, idx + 1);
    //     let b =  1 + hleper(k - 1, idx + 1);
    //     return Math.max(a, b);
      
    // }
};