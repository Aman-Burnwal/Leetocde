// const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var minCost = function (n, edges) {
    const graph = new Map();

    for (const [u, v, w] of edges) {
        if (!graph.has(u)) graph.set(u, []);
        if (!graph.has(v)) graph.set(v, []);

        graph.get(u).push([v, w]);
        graph.get(v).push([u, 2 * w]);
    }

    const dist = new Array(n).fill(Infinity);
    dist[0] = 0;
    const set = new Set()

    const pq = new PriorityQueue((x, y) => x[1] - y[1]);
    pq.enqueue([0, 0]); 
    while (!pq.isEmpty()) {
        const [node, cost] = pq.dequeue();
        if(set.has(node)) continue;
        else set.add(node)

        if (node === n - 1) return cost;
        if (cost > dist[node]) continue;

        if (!graph.has(node)) continue;

        for (const [next, w] of graph.get(node)) {
            const newCost = cost + w;
            if (newCost < dist[next]) {
                dist[next] = newCost;
                pq.enqueue([next, newCost]);
            }
        }
    }

    return -1;
};
