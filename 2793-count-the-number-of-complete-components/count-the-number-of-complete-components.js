/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function(n, edges) {

    const adj = new Map();

    const visited = new Array(n).fill(false);


    for(const [u, v] of edges) {

        if(!adj.has(u)) adj.set(u, []);
        if(!adj.has(v)) adj.set(v, []);

        adj.get(u).push(v);
        adj.get(v).push(u);
    }

    let count = 0;
    let u = 0;
    let v = 0;

    for(let i = 0; i < n; i++) {

        
        if(!visited[i]) {
           e = 0;
           v = 0;
           DFS(i);

           if(v * (v - 1) == e ) count++;
        }
    }

    return count;

    function DFS(u) {

        visited[u] = true;

        v++;

        if(adj.has(u)) {

            for(const next of adj.get(u)) {

                e++;
                if(!visited[next]) DFS(next);
            }
        }
    }
    
};