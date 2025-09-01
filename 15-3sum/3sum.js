/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    const ans = [];
    nums.sort((a, b) => a - b)

    for(let i = 0; i < nums.length - 1; i++) {
       if(nums[i] > 0) break;
       if (i > 0 && nums[i] === nums[i - 1]) continue;

       let left = i + 1;
       let right = nums.length - 1;
       const req = -nums[i]

        while(left < right) {
            if( left > (i + 1) && nums[left] === nums[left - 1]) { left++; continue; }
            if(nums[right] === nums[right + 1]) { right--; continue; }

            const sum = nums[left] + nums[right] + nums[i];
            if(sum === 0) {
                ans.push([nums[i], nums[left], nums[right]]) ;
                left++;
                right--;
            }
            else if(sum > 0) right--;
            else left++;
          
        }
    }

    return ans;
};

