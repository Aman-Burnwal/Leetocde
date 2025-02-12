/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    
    // const sums = new Array();
    const map = new Map();
    let max = -1;

    for(let i = 0; i < nums.length; i++) {

        let num = nums[i];
        let sum = 0;

        while(num) {
            sum += num % 10;

            num = Math.floor(num / 10);
        }

        if(map.has(sum)) {
            max = Math.max(map.get(sum) + nums[i] , max);
            if(nums[i] > map.get(sum)) map.set(sum, nums[i])
        }
        else map.set(sum, nums[i])
        // sums.push(sum);
    }
    return max;

    
  


};