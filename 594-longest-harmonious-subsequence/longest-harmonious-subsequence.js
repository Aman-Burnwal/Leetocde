/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
   let max = 0;
   let map = new Map();
   const set = new Set();

   for(const num of nums) {
        set.add(num);
        map.set(num, (map.get(num) || 0) + 1);
   }

   for(const key of [...set]) {
        if(map.has(key + 1)) max = Math.max(max , map.get(key) + map.get(key + 1));
   }

    return max;
};