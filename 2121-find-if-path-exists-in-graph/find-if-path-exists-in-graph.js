/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {

    let adj = new Map();
    if(source == destination) return true;

    for(const [u, v] of edges) {

        if(!adj.has(u)) adj.set(u, []);
        if(!adj.has(v)) adj.set(v, []);

        adj.get(u).push(v);
        adj.get(v).push(u);
    }
    const visited = new Array(n).fill(false);

    // console.log(adj)
    for(let i = 0; i < n; i++) {

        if(visited[i] == false) BFS(i);

        // console.log(visited);

        if(visited[source] && visited[destination]) return true;
        else if(visited[source] || visited[destination]) return false;
    }

    


    function BFS(source) {

        const que = new Array();
        que.push(source);
        visited[source] = true;

        const h = new Array(n).fill(false)
    
        while(que.length) {

            let u = que.pop();

            if(!adj.has(u)) continue;


            for(const v of adj.get(u)) {

                // if(v == destination) return true;

                if(visited[v] && h[v]) continue;
                h[v] = true;

                que.push(v);
                visited[v] = true;
            }

        }
    }

    return false;
    
};