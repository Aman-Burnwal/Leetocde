/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {

    const cand = new Array(ratings.length).fill(1);


    for(let i = 1; i < ratings.length; i++) {

        if(ratings[i] > ratings[i - 1]) cand[i] = Math.max(cand[i - 1] + 1, cand[i])
    }

    for(let i = ratings.length - 2; i >= 0; i--) {

        if(ratings[i] > ratings[i +1]) cand[i] = Math.max(cand[i + 1] + 1, cand[i])
    }


    let sum = 0;
    // console.log(cand)


    for(const can of cand) sum += can;
    return sum;
    
};