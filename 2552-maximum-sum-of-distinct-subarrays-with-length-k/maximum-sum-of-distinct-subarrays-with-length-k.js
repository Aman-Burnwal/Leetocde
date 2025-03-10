/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function(nums, k) {


    const map = new Map()
    let i = 0, j = 0;
    let sum = 0, max = 0;

    for(const num of nums ) {

        if(map.has(num)) {
            let idx = map.get(num);
            // console.log(map, idx, j)

            while(idx >=  j) {
                sum-= nums[j]
                 map.delete(nums[j++]);
                 
            }
            // console.log(j)
            // sum = 0;

        }

        
            map.set(num, i);

            sum += num;
            

            if(map.size == k) {

                max = Math.max(sum , max);

                map.delete(nums[i - k + 1]);
                sum -= nums[i - k + 1];
                j++;
                
            }
            // console.log()
        // }
        i++;


    }

    console.log(map)

    return max;
    
};