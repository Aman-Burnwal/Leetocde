/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var countPaths = function(n, roads) {
    
    const adj = new Map();
    const result = new Array(n).fill(Number.MAX_SAFE_INTEGER);
    const countPath = new Array(n).fill(0);
    const pq = new Array();
    let mod = 10e8 + 7;
    pq.push([0, 0]) // node, dist
    countPath[0] = 1;
    result[0] = 0;


    for(const [u, v, w] of roads) {

        if(!adj.has(u)) adj.set(u, []);
        if(!adj.has(v)) adj.set(v, []);

        adj.get(u).push([v, w]);
        adj.get(v).push([u, w]);
    }

    while(pq.length) {

       
        pq.sort((a, b) => a[1] - b[1]);
        
        const [currNode, currTime] = pq.shift();

        if(!adj.has(currNode)) continue;

        for(const [nextNode , nextTime] of adj.get(currNode)) {

           

            if(currTime + nextTime < result[nextNode]) {
                
                result[nextNode] = currTime + nextTime;

                countPath[nextNode] = countPath[currNode];

                pq.push([nextNode, result[nextNode]]);

            }
            else if(currTime + nextTime == result[nextNode]) {
               
                countPath[nextNode] = (countPath[nextNode] + countPath[currNode]) %mod;
          
            }
        }
        // console.log(currTime, currNode, pq)
        // console.log(result)
        // console.log(countPath)
        
    }
   

    return (countPath[n - 1]) % mod;

};