/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function(arr) {
    
    
    let len = 0;

    let map = new Map();

    for(let i = 0; i < arr.length; i++) {

        map.set(arr[i], i);
    }
    
    const memo = Array.from({length : 1001}, () => new Array(1000));


    for(let i = 1; i < arr.length; i++) {

        for(let j = i + 1; j < arr.length; j++) {

            len = Math.max(len, solve(i, j));
        }
    }



    function solve(i, j) {

        if(memo[j][i]) return  memo[j][i];

        if(map.has(arr[j] - arr[i]) && map.get(arr[j] - arr[i]) < i) {

            return  memo[j][i] = 1 + solve( map.get(arr[j] - arr[i]), i) ;
        }

        return 2;
    }

    return len > 2 ? len : 0;


};