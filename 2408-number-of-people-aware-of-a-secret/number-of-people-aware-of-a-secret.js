/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
var peopleAwareOfSecret = function(n, delay, forget) {

    let queue = [[1, 0]];

    const mod = Math.pow(10, 9) + 7;

    for(let i = 1; i < n; i++) {
        while(queue.length && queue[0][1] + forget === i) {
            queue.shift();
        }

        let sum = 0;
        for(let j = 0; j < queue.length; j++) {
            // console.log(queue)
            // if(queue[j][1] >= delay) sum += queue[j][0];
            if (i - queue[j][1] >= delay) sum += queue[j][0];

        }

        sum %= mod;

        if(sum != 0) queue.push([sum, i]);
    }



    return queue.reduce((acc, curr) => acc + curr[0], 0) % mod;
};