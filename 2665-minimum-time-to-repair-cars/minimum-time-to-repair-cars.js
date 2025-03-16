/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function(ranks, cars) {

    let max = Math.max(...ranks)*cars * cars;

    let min = 1;

    let ans = max;
    // console.log(min, max)

    while(min <= max){

        let mid = Math.floor((min + max) /2);

        if(check(mid)) {
            max = mid - 1;
            ans = mid;
        }
        else min = mid + 1;

        // console.log(min, max)
    }

    return ans;

    function check(time) {

        let n = 0;

        for(const rank of ranks) {

            n += Math.floor(Math.sqrt(time / rank));
        }

        return n >= cars;
    }
    
};