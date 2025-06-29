/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    nums.sort((a, b) => a - b);
    const MOD = Math.pow(10, 9) + 7;

    let count =  0;

    const preCompute =  [1];

    for(let i = 1; i < nums.length; i++) {
        preCompute[i] = ( preCompute[i - 1] << 1) % MOD;
    }


        let left = 0;
        let right = nums.length - 1;
        

        while(left <= right) {
            
            while(left <= right && nums[left] + nums[right] > target) right--;

           if(left<= right) count = (count + (preCompute[right - left])) % MOD;

           
           left++;
        }
       

    return count;

};