/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function(nums) {
    const bucketSort = new Array(51).fill(0);

    let sum = nums[0];
    let count = 2;
    nums.forEach((num) => bucketSort[num]++);
    bucketSort[nums[0]]--;

    for(let index = 0; index < bucketSort.length; index++) {
        if(bucketSort[index] > 0) {
            let rest = Math.min(count, bucketSort[index]);

            sum += (rest * index);
            count -= rest;
            if(count === 0) return sum; 
        }
    }
    return -1;
};