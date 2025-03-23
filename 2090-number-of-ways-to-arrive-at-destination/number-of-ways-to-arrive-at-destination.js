/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var countPaths = function(n, roads) {
    const mod = 1e9 + 7;
    const adj = new Map();

    for (const [u, v, w] of roads) {
        if (!adj.has(u)) adj.set(u, []);
        adj.get(u).push([v, w]);
        if (!adj.has(v)) adj.set(v, []);
        adj.get(v).push([u, w]);
    }

    const dist = new Array(n).fill(Number.MAX_SAFE_INTEGER);
    const ways = new Array(n).fill(0);
    
    dist[0] = 0;
    ways[0] = 1;

    let minHeap = [[0, 0]]; // [distance, node]

    while (minHeap.length) {
        minHeap.sort((a, b) => a[0] - b[0]);
        let [w1, u] = minHeap.shift();

        if (!adj.has(u)) continue;

        for (const [v, w] of adj.get(u)) {
            if (w1 + w < dist[v]) {
                dist[v] = w1 + w;
                ways[v] = ways[u];
                minHeap.push([dist[v], v]);
            } else if (w1 + w === dist[v]) {
                ways[v] = (ways[v] + ways[u]) % mod;
            }
        }
    }

    return ways[n - 1] % mod;
};
