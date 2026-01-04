/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    
    let sum = 0;

    for(const num of nums) {
        let currSum = 0;
        let count = 0;
        for(let i = 1; i <= Math.floor(Math.sqrt(num)); i++ ) {
            if(num % i === 0) {
                count++;
                currSum += i;

                if(num / i !== i) {
                    currSum += num / i;
                    count++;
                }
                if(count === 5) break;
            }
        }
        if(count === 4) {
            sum += currSum;
        }
    }
    return  sum;
};