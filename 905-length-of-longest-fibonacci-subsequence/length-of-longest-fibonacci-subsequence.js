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
    
    const freq = new Array(arr.length + 1).fill(0);


    for(let i = 1; i < arr.length; i++) {

        for(let j = i + 1; j < arr.length; j++) {

            len = Math.max(len, solve(i, j));
        }
    }
    

    function solve(i, j) {

        if(map.has(arr[j] - arr[i]) && map.get(arr[j] - arr[i]) < i) {
        
            return 1 + solve( map.get(arr[j] - arr[i]), i) ;
        }

        return 2;
    }

    return len > 2 ? len : 0;










    

    return subSeq(arr.length - 1, []);

 

    

    function subSeq (i, temp) {

        
        // console.log(temp, i)
        if(i < 0) return 0;

        
        let a = 0;
        let b = 0;
        let idx = i + 1;


        if(temp.length >= 2 ) 
        {
            
           if(map.has(temp[temp.length - 2] - temp[temp.length - 1])) idx = map.get(temp[temp.length - 2] - temp[temp.length - 1]);
            
     
            
        }
        else if(temp.length < 2) idx = i;
       
        // console.log(idx, i );
        temp.push(arr[idx]);
        if(idx != i + 1 && idx <= i )a = 1 + subSeq(idx - 1, temp);
        console.log(temp)
        temp.pop();



        

        b = subSeq(i - 1, temp);
        // console.log(a, b , temp);

        
        return map[i] = Math.max(a, b);
    }

    return len;
};