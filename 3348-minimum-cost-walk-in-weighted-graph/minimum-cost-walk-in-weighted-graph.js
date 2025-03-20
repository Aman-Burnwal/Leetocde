/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} query
 * @return {number[]}
 */
var minimumCost = function(n, edges, query) {
    const parent = Array.from({ length: n }, (_, i) => i);
    const rank = new Array(n).fill(1);
    const andValue = new Array(n).fill(-1);

    function findParent(num) {
        if (parent[num] !== num) {
            parent[num] = findParent(parent[num]); // Path compression
            andValue[parent[num]] &= andValue[num]; // Update andValue for compression
        }
        return parent[num];
    }

    function union(x, y, w) {
        let rootX = findParent(x);
        let rootY = findParent(y);

        if (rootX !== rootY) {
            if (rank[rootX] > rank[rootY]) {
                parent[rootY] = rootX;
                andValue[rootX] &= (andValue[rootY] !== -1 ? andValue[rootY] : w);
            } else if (rank[rootX] < rank[rootY]) {
                parent[rootX] = rootY;
                andValue[rootY] &= (andValue[rootX] !== -1 ? andValue[rootX] : w);
            } else {
                parent[rootY] = rootX;
                rank[rootX]++;
                andValue[rootX] &= (andValue[rootY] !== -1 ? andValue[rootY] : w);
            }
        }
    }

    // Initialize andValue with edge weights
    for (const [u, v, w] of edges) {
        andValue[u] = andValue[u] === -1 ? w : andValue[u] & w;
        andValue[v] = andValue[v] === -1 ? w : andValue[v] & w;
    }

    // Union-Find to connect components
    for (const [u, v, w] of edges) {
        union(u, v, w);
    }

    // Find parents after all unions
    for (let i = 0; i < n; i++) {
        findParent(i);
    }

    // Process queries
    return query.map(([u, v]) => findParent(u) === findParent(v) ? andValue[findParent(u)] : -1);
};
