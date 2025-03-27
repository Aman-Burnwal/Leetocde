/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumIndex = function(nums) {
    
    if(nums.length == 1) return -1;

    const dominantArray = [[nums[nums.length -1], 1]]
    const map = new Map();
    map.set(nums[nums.length - 1], 1);

    let maxNum = dominantArray[0][0];
    let maxCount = 1;

    for(let i = nums.length - 2; i > 0; i--) {

        const num = nums[i];

        map.set(num, (map.get(num) || 0) + 1);

        if(map.get(num) > maxCount) {
            maxNum = num;
            maxCount = map.get(num);
        }

        dominantArray.push([maxNum, maxCount]);
    }

    


    map.clear();
 


    

    for(let i = 0; i < nums.length - 1; i++ ) {
        let num = nums[i];
        map.set(num, (map.get(num) || 0) + 1);

        // console.log(i)
        // console.log(Math.floor(((i + 1) / 2 ) + 1) ,  map.get(num))
        // console.log(dominantArray[i + 1][0] , num , 
        // (Math.floor((nums.length - i - 1) / 2 )  + 1)  , dominantArray[i + 1][1])
        // console.log(dominantArray)

        const [n, f] = dominantArray.pop();

        if(
            Math.floor(((i + 1) / 2 ) + 1) <=  map.get(num)
            && n == num && (Math.floor((nums.length - i - 1) / 2 )  + 1)  <= f )  {
                
                return i;
              }
    }

    return -1;
};