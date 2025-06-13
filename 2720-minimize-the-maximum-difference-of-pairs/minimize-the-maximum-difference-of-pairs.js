/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function (nums, p) {

    nums.sort((a, b) => a - b);


    let maxMin = nums.at(-1) - nums[0];
    let start = 0;

    while (start < maxMin) {

        let mid = (start + maxMin) >> 1;

        let count = 0;
        for(let i = 0; i < nums.length - 1; i++) {
            if((nums[i + 1] - nums[i]) <= mid) {
                 count++;
                 i++;
            }
            if(count >= p) break;
        }

        if(count >= p) maxMin = mid;    
        else start = mid + 1;
    }

    return maxMin;


};