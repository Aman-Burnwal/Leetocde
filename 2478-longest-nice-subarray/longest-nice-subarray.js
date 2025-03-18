/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function(nums) {


   let count = 0;

   let j = 0;
   let i = 0;
   let bits = 0;

   for(const num of nums) {

        while((num & bits) != 0 ) {

            bits ^= nums[j++];
        }

        bits |= num;




        count = Math.max(count, i - j);
        i++;
   }


   return count + 1;
    
};