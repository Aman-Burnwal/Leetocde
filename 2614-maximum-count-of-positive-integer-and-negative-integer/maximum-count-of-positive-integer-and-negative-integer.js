/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {

    


    let start = 0;
    let end = nums.length - 1;

    while(start <= end) {
        
        let mid = (start + end) >> 1;

        if(nums[mid] >= 0) end = mid - 1;
        else start = mid + 1;
    }

    let neg = end + 1;

    start = 0;
    end = nums.length - 1;

    while(start <= end) {
        
        let mid = (start + end) >> 1;

        if(nums[mid] <= 0) start  = mid + 1;
        else end = mid - 1;
    }



    


    return Math.max(neg, nums.length - start);
        

    
    
};