var countCompleteComponents = function(n, edges) {
    let count = 0;
    const parent = new Array(n).fill(0).map((_, i) => i);
    const size = new Array(n).fill(1);
    const edgeCount = new Array(n).fill(0);

    function find(x) {
        return parent[x] === x ? x : (parent[x] = find(parent[x])); // Path Compression
    }

    function union(x, y) {
        let x_ = find(x);
        let y_ = find(y);
        if (x_ === y_) return;

        if (size[x_] > size[y_]) {
            parent[y_] = x_;
            size[x_] += size[y_];
        } else {
            parent[x_] = y_;
            size[y_] += size[x_];
        }
    }

    for (const [u, v] of edges) {
        union(u, v);
    }

    for (const [u, v] of edges) {
        edgeCount[find(u)]++;  // Directly store edge count
    }

    for (let i = 0; i < n; i++) {
        if (find(i) === i) { // Checking root node
            if (size[i] === 1 || edgeCount[i] === (size[i] * (size[i] - 1)) / 2) {
                count++;
            }
        }
    }

    return count;
};
