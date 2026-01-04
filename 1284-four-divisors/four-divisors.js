/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    
    let sum = 0;

    for(const num of nums) {
        let currSum = 0;
        let count = 0;
        for(let i = 1; i <= num; i++ ) {
            if(num % i === 0) {
                count++;
                currSum += i;
                // currSum += num / i;
                if(count === 5) break;
            }
        }
        if(count === 4) {
            sum += currSum;
        }
    }
    return  sum;
};