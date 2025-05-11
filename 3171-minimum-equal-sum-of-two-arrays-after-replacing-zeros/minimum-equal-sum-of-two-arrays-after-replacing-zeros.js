/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSum = function(nums1, nums2) {

    let zero_in_nums1 = 0;
    let zero_in_nums2 = 0;


    let sum_of_nums1 = 0;
    let sum_of_nums2 = 0;

    for(const num of nums1) {

        if(num) sum_of_nums1 += num;
        else zero_in_nums1++;
    }

    for(const num of nums2) {

        if(num) sum_of_nums2 += num;
        else zero_in_nums2++;
    }




    if(sum_of_nums1 == sum_of_nums2 && ((zero_in_nums1 == 0 && zero_in_nums2 ) || (zero_in_nums2 == 0 && zero_in_nums1 ))) return -1;

    if(sum_of_nums1 > sum_of_nums2 && zero_in_nums2 == 0) return -1;

    if(sum_of_nums2 > sum_of_nums1 && zero_in_nums1 == 0) return -1;

   

    if(sum_of_nums1 > sum_of_nums2 && zero_in_nums1 == 0 && (sum_of_nums2 + zero_in_nums2) > sum_of_nums1) return -1;

    if(sum_of_nums2 > sum_of_nums1 && zero_in_nums2 == 0 && (sum_of_nums1 + zero_in_nums1) > sum_of_nums2) return -1;


    return Math.max(sum_of_nums2 + zero_in_nums2, sum_of_nums1 +  zero_in_nums1);

 


    
};