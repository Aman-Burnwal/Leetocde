/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    
    arr.sort((a, b) => a - b);

    const ans = [];
    let minDiff = 1e7;


    for(let i = 0; i < arr.length - 1; i++) {
        let dif = Math.abs(arr[i] - arr[i + 1]);

        if(minDiff === dif) ans.push([arr[i], arr[ i + 1]]);
        else if(minDiff > dif) {
            ans.length = 0;
            ans.push([arr[i], arr[i + 1]]);
            minDiff = dif;
        }
    }

    return ans;
};