/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {

    const cand = new Array(ratings.length);


    for(let i = 0; i < ratings.length; i++) {

        cand[i] = 1;
    }


    for(let i = 1; i < ratings.length; i++) {

        if(ratings[i] > ratings[i - 1]) {
             cand[i] = Math.max(cand[i - 1] + 1, cand[i])

        }
    }

    for(let i = ratings.length - 2; i >= 0; i--) {

        if(ratings[i] > ratings[i +1]) {
            cand[i] = Math.max(cand[i + 1] + 1, cand[i])
    
        }
    }


    let sum = 0;
   


    for(let c of cand) {

        sum += c;
    }
    return sum;
    
};