/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @param {number} k
 * @return {number[]}
 */
var maxTargetNodes = function(edges1, edges2, k) {
    

    const adj1 = new Map();
    const adj2 = new Map();

    for(const [u, v] of edges1) {

        if(!adj1.has(u)) adj1.set(u, []);
        if(!adj1.has(v)) adj1.set(v, []);

        adj1.get(u).push(v);
        adj1.get(v).push(u);
    }



    for(const [u, v] of edges2) {

        if(!adj2.has(u)) adj2.set(u, []);
        if(!adj2.has(v)) adj2.set(v, []);

       
        adj2.get(v).push(u);
        adj2.get(u).push(v);
    }


    const sizeArray = new Array();


    const n = adj1.size;
    const visited = new Array(Math.max(n, adj2.size)).fill(false);

    let max = 0;
    let n2 = adj2.size;

    for(let i = 0; i < n2; i++) {
   
        count = 0;
        if(k < 1) continue;
        DFS2(i, k - 1);

        
        max = Math.max(count, max)

    }




    


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



    function DFS2(u, k) {
        
        if(visited[u] == false) count++
        if(k  <= 0) return;
        
       

        visited[u] = true;
        
        if(adj2.has(u)){

        for(const v of adj2.get(u)) {
            
            if(visited[v] ) continue;
            // count++;
            DFS2(v, k - 1  );

        }
        }
        visited[u] = false;

        return;
    }
    

}; 