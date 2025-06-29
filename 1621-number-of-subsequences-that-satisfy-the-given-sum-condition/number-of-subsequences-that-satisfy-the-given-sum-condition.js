/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    nums.sort((a, b) => a - b);
    const MOD = Math.pow(10, 9) + 7;
    let count =  0;


        let left = 0;
        let right = nums.length - 1;
        

        while(left <= right) {
            
            while(left <= right && nums[left] + nums[right] > target) right--;

           if(left<= right) count = (BigInt(count) + (2n ** BigInt(right - left)) % BigInt(MOD)) %BigInt(MOD);
           count = parseInt(count)
           
           left++;
        }
       

    return count;

};