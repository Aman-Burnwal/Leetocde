/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {

    digits.sort((a, b) => a - b);
    
    let ans = new Set();

    for(let i = 0; i < digits.length; i++) {

        if(digits[i] == 0) continue;

        

        for(let j = 0; j < digits.length; j++ ) {

            if(j == i) continue;


            for(let k = 0; k < digits.length; k++) {

                if(k == i || k == j || digits[k] % 2) continue;

                let num = digits[i] * 100 + digits[j] * 10 + digits[k];

                ans.add(num);
            }
        }
    }

    return [...ans];

};