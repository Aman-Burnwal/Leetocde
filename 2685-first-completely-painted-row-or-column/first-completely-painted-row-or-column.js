/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function(arr, mat) {


    let map = new Map() 
    const cMap = new Map();
    let len = mat.length;


    for(let i = 0; i  < len; i++) {

        for(let j = 0; j < mat[0].length; j++) {

            map.set(mat[i][j], i);
            cMap.set(mat[i][j], j);
        }
    }

    const freq = new Array(len).fill(0);
    const freq2 = new Array(mat[0].length).fill(0);

    console.log(map, cMap)


    for(let i = 0; i < arr.length; i++) {

        let idx = map.get(arr[i]);

        freq[idx]++;

        // console.log(freq);

        if(freq[idx] == mat[0].length) return i;
        idx = cMap.get(arr[i]);

        freq2[idx]++;
        // console.log(freq2, i)
        if(freq2[idx] == len) return i;
    }


    
};