/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    
    const que = new Array();

    const adj = Array.from({length: n + 1}, () => new Array());

    const path = new Array(n + 1).fill(Infinity);

    for(const [u, v, w] of times) {

        adj[u].push([v, w]);
    }

    que.push([k, 0]);
    // path[k] = 0;

    // console.log(adj)

    // return -1;

    while(que.length) {


        const [u, w] = que.shift(); 
        // console.log(u, w, adj)
        // if(adj[u].length == 0) continue;
        
        for(const v of adj[u]) {

            const w1 = v[1] + w;
            
            if(path[v[0]] > w1 ) {

                path[v[0]] = w1;

                que.push([v[0], w1]);
            }
        }

        que.sort((a, b) => a[1] - b[1])
    }
    let ans = 0;


    for(let i = 1; i <= n ; i++) {

        if(i == k) continue;
        else if(path[i] == Infinity) return -1;
        ans = Math.max(ans, path[i]);
    }

    return ans;


};