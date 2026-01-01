/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    let sum = 1;

    for(let index = digits.length - 1; index >= 0; index--) {

        sum += digits[index];
        digits[index] = sum % 10;
        sum = Math.floor(sum / 10);
    }

    if(sum > 0) digits.unshift(sum);

    return digits;
};