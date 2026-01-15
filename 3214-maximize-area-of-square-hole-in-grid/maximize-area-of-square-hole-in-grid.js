/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} hBars
 * @param {number[]} vBars
 * @return {number}
 */
var maximizeSquareHoleArea = function(n, m, hBars, vBars) {


    function sorting(arr) {
        arr.sort((a, b) => a - b);
        let curr = 1;
        let max = 1;
        for(let i = 0; i < arr.length - 1; i++) {
            if(arr[i] === arr[i + 1] - 1) curr++;
            else curr = 1;
            max = Math.max(curr, max)
        }

        console.log(arr)
        return max;
    }

    let h =  sorting(hBars);
    let v =  sorting(vBars);
    let max = Math.min(h, v) + 1;

    return max * max;



    

};