/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function(arr, mat) {


    let map = new Map() 

    let len = mat.length;


    for(let i = 0; i  < len; i++) {

        for(let j = 0; j < mat[0].length; j++) {

            map.set(mat[i][j], [i, j]);
            
        }
    }

    const freq = new Array(len).fill(0);
    const freq2 = new Array(mat[0].length).fill(0);




    for(let i = 0; i < arr.length; i++) {

        const [idx, idx1] = map.get(arr[i]);

        freq[idx]++;
        if(freq[idx] == mat[0].length) return i;
        

        freq2[idx1]++;
       
        if(freq2[idx1] == len) return i;
    }


    
};