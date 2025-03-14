/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function(candies, k) {

    let ans = 0;

    let min = 0, max = Math.max(...candies);


    while(min <= max) {

        let mid = (min + max) >> 1;


        if(helper(mid)) {
            min = mid + 1;
            ans = mid;

        }

        else max = mid - 1;

        // console.log(min, max, ans)
    }

    return ans;

    function helper(mid) {

        let t = k;

        for(const candy of candies) {

            t -= Math.floor(candy / mid);
        }

        // console.log(mid, t)

        return t <= 0;
    }
    
};