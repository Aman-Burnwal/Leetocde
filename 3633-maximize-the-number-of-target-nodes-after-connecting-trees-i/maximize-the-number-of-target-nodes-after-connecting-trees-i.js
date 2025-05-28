/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @param {number} k
 * @return {number[]}
 */
var maxTargetNodes = function(edges1, edges2, k) {
    

    const adj1 = new Map();
    // const adj2 = new Map();


    for(const [u, v] of edges2) {

        if(!adj1.has(u)) adj1.set(u, []);
        if(!adj1.has(v)) adj1.set(v, []);

       
        adj1.get(v).push(u);
        adj1.get(u).push(v);
    }
    
    let max = 0;
    let n2 = adj1.size;

    let visited = new Array(adj1.size).fill(false);

    for(let i = 0; i < n2; i++) {
   
        count = 0;
        if(k < 1) continue;
        DFS(i, k - 1);

        
        max = Math.max(count, max)

    }

    adj1.clear();


    for(const [u, v] of edges1) {

        if(!adj1.has(u)) adj1.set(u, []);
        if(!adj1.has(v)) adj1.set(v, []);

        adj1.get(u).push(v);
        adj1.get(v).push(u);
    }

     




    const sizeArray = new Array();
    const n = adj1.size;
    visited = new Array(Math.max(n)).fill(false);
    

    
    




    


    for(let i = 0; i < n; i++) {
   
        count = 0
        DFS(i, k);
        sizeArray.push(count +max);

    }

    return sizeArray;



    function DFS(u, k) {
        if(visited[u] == false) count++;
        if(k  <= 0) return;
        
        
       

        visited[u] = true;
        
        
        if(adj1.has(u)) {
        for(const v of adj1.get(u)) {
            
            if(visited[v] ) continue;
            
            DFS(v, k - 1  );

        }
        }
        visited[u] = false;

        return;
    }



}; 