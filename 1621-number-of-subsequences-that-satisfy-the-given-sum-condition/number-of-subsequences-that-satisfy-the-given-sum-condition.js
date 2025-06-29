/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    nums.sort((a, b) => a - b);
    const MOD = Math.pow(10, 9) + 7;

    let count =  0;

    const preCompute =  nums.reduce((acc, _ , i) => {
        acc.push((acc[i] << 1) %MOD)
        return acc;
    } , [1])


        let left = 0;
        let right = nums.length - 1;
        

        while(left <= right) {
            
            while(left <= right && nums[left] + nums[right] > target) right--;

            if(left<= right) count = (count + (preCompute[right - left])) % MOD;

           
            left++;
        }
       

    return count;

};