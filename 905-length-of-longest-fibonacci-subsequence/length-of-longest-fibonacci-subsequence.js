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
    
    const memo = Array.from({length : arr.length}, () => new Array(arr.length).fill(2));


    for(let i = 1; i < arr.length; i++) {

        for(let j = i + 1; j < arr.length; j++) {

            // len = Math.max(len, solve(i, j));

            if(map.has(arr[j] - arr[i]) && map.get(arr[j] - arr[i]) < i) {

                let k = map.get( arr[j] - arr[i] );

               
                memo[i][j] = 1 + memo[k][i]

                len = Math.max(memo[i][j], len);
            } 
        }
    }

    return len > 2 ? len : 0;



    function solve(i, j) {

        if(memo[j][i]) return  memo[j][i];

        if(map.has(arr[j] - arr[i]) && map.get(arr[j] - arr[i]) < i) {

            return  memo[j][i] = 1 + solve( map.get(arr[j] - arr[i]), i) ;
        }

        return 2;
    }

    return len > 2 ? len : 0;


};