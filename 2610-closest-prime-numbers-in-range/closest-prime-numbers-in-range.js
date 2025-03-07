/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function(left, right) {


    const size = right - left + 1;


    const isPrime = new Array(right + 1).fill(true);


    for(let i = 2; i <= right; i++) {
        
        if(isPrime[i]) {

            let k = i * i;

            while(k <= right) {
                isPrime[k] = false;
                k += i;
            }
        }


    }
    // console.log(isPrime)
    const ans = [-1,-1];
    let a = -1, b = -1;

    for(let i = Math.max(left, 2); i <= right; i++) {

        if(isPrime[i]) {

            if(a == -1) a = i;
            else if(b == -1) {
                ans[0] = a;
                ans[1] = i;
                b = i;
                // console.log(ans)
            }

            else {
                // console.log(ans)
                // console.log(b - a, i - b)
                if((ans[1] - ans[0] ) > (i - b )) {
                    ans[0] = b;
                    ans[1] = i;
                }
                a = b;
                b = i;
                
            }
        } 
    }

    // console.log(a, b)

    return ans
    
};