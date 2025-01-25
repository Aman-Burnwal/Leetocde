/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function(nums, limit) {


    const copyNums = [...nums].sort((a, b) => a - b);
    const number_map = new Map()
    const Number_to_index_map = new Map();


    let indx = 0;

    Number_to_index_map.set(copyNums[0], indx)
    number_map.set(indx, [copyNums[0]]);
 


    for(let i = 1; i < nums.length; i++) {

        if(Math.abs(copyNums[i] - copyNums[i - 1]) > limit){
            indx++;
        
            number_map.set(indx, [])
        }
        number_map.get(indx).push(copyNums[i]);
        Number_to_index_map.set(copyNums[i], indx);

    }

    const i_map= new Array(indx + 1).fill(0);

    for(let i = 0; i < nums.length; i++) {

        indx =  Number_to_index_map.get(nums[i]);

        nums[i] = number_map.get(indx)[i_map[indx]++]
        

    }
    return nums;
    
};