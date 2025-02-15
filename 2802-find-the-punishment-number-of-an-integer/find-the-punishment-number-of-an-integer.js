/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function(n) {

    let count = 0;

    for(let i = 1; i <= n; i++) {

       if(isSafe(i, String(i * i), 0, 0)) count += (i * i)
    }

    return count;


    function isSafe(num, sqr, sum, j) {
       
        if(j == sqr.length ) {
           
           return num == sum;

        }
        if(sum > num) return false;
        let para = false;

         for (let i = j; i < sqr.length; i++) {
           

            let sub = Number(sqr.slice(j, i + 1));

            if (isSafe(num, sqr, sum + sub, i + 1)) return true;
        }
        return false;
  
        
    }
    
};