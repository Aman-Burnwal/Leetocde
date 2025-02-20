/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {

  
  

    
    let size = nums.length;

    let ans = ""

    for(let i = 0; i < size; i++) {

        ans += nums[i][i] == "1" ? "0" : "1";
    }

    return ans;

    
    


    
};