/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function(n, edges) {


    const rank = new Array(n).fill(0);

    const parent = new Array();

    for(let i = 0; i < n; i++) parent.push(i);


    for(const [u, v] of edges) {

        let x = find(u);
        let y = find(v);

        if(x != y) union(x, y)
    }

    

    let count = 0;
    const map = new Map();
   

    for(let i = 0; i < n; i++) {

        let parent = find(i)

        map.set(parent, (map.get(parent) || 0) + 1);
       
    }

    for(const [p, size] of map) {

        count += size * (n - size);
        n -= size;
    }

    return count;


    function find(x) {

        if(parent[x] == x) return x;

        return parent[x] = find(parent[x]);
    }



    function union (x, y) {

        let i = find(x);
        let j = find(y);

        

        if(rank[i] > rank[j]) parent[i] = j;
        else if (rank[i] < rank[j]) parent[j] = i;
        else {

            parent[i] = j;
            rank[i]++;
        }
    }
    
};