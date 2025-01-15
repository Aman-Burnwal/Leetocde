/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var minimizeXor = function(num1, num2) {

    let count = 0, temp = num2;

    while(temp) {

        if(temp & 1) count++
        temp = temp >> 1;
    }
    

    temp = num1;
    let ans = 0;
    let bit = 1;

    while(temp >= bit) {

        if(temp & bit ) {
            count--;
            ans += bit
        }
        bit = bit << 1;
        
    }
    

    

    bit = 1;
    
    while(count < 0) {

        if(num1 & bit) {
            ans -= bit;
            count++;
        }
        bit = bit << 1;
        
    }

    while(count > 0) {

        if((num1 & bit) == 0) {
            ans += bit;
            count--;

        }
        bit = bit << 1;
    
    }
    

    return ans;


};