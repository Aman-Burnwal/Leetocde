/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {

    const powers = new Array();

    for(let i = 0; i <= 14; i++) {
        powers.push(Math.pow(3, i));
    }



    while(powers.length) {

        let d = powers.pop();

        if(d <= n) n -= d;
        

    }

    console.log(n)

    return n == 0;
    
};