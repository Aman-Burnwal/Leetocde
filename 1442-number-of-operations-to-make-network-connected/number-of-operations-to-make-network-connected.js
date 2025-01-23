/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {

    if(connections.length < n - 1) return -1;

    const rank = new Array(n).fill(0);
    const parent = new Array();

    for(let i = 0; i < n; i++) parent.push(i);


    for(const [u, v] of connections) {

        let x = find(u);
        let y = find(v);

        if(x != y) union(x, y);
    }

    let idx = 0;

    for(let i = 0; i < rank.length; i++) {

        if(rank[idx] < rank[i]) idx = i;
    }

    let count = 0;
    idx = find(idx);

    for(let i = 0; i < n; i++) {

        let x = find(i)
        idx = find(idx);
        if(idx != x) {
            count++;
            union(idx, x)
        }

        

    
        
    }

    return count;



    function union(i, j) {

        let x = find(i);
        let y = find(j);

        if(rank[x] > rank[y]) parent[x] = y;
        else if(rank[x] < rank[y]) parent[y] = x;

        else {

            parent[x] = y;
            rank[x]++;
        }


    }

    function find (x) {
        if(parent[x] == x) return x;

        return parent[x] = find(parent[x]);
    }
    
 };