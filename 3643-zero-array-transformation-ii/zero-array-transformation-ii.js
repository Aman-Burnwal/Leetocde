/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function(nums, queries) {

    let is = true;

    for(const num of nums) {
        if(num) {
            is = false;
            break;
        }
    }

    if(is) return 0;
    
    


    let start = 0;
    
    let end = queries.length - 1;
    let ans = -1;
    const arr = new Array(nums.length + 1).fill(0);

    while(start <= end) {

        let mid = (start + end) >> 1;

        if(check(mid))  {
            ans = mid + 1;
            end = mid - 1 ;

        }
        else start = mid + 1;
    }
    

    return ans;

    function check (mid) {

       
        arr.fill(0);
        

        for(let i = 0; i <= mid; i++) {

            const [start, end, v] = queries[i];

            arr[start] -= v;
            arr[end + 1] += v;

        }
        

        for(let i = 1; i <= nums.length; i++) {

        
            arr[i] += arr[i - 1];
            

            if((nums[i - 1] + arr[i - 1]) >  0) return false;
        }
   
        return true;
    }
    
};