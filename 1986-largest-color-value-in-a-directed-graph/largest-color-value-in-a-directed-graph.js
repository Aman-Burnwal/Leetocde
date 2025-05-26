/**
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
var largestPathValue = function(colors, edges) {
    

    const n  = colors.length;
    const graph = Array.from({length: n }, () => []);
    const indgree = new Array(n).fill(0);
    const que = new Array();

    const dp = Array.from({length : n}, () => new Array(26).fill(0));



    for(const [u, v] of edges) {

        indgree[v]++;
        graph[u].push(v);
    }

    for(let i = 0; i < n; i++) {
        if(indgree[i] == 0) que.push(i);
    }

    let visited = 0;
    let maxLen = 0;

    while(que.length) {

        let u = que.pop();
        let colorIdx = colors.charCodeAt(u) - 97;
        dp[u][colorIdx]++;
        maxLen = Math.max(dp[u][colorIdx], maxLen);
        

        visited++;

        for(const v of graph[u]) {

            if(indgree[v] == 1) que.push(v);
            indgree[v]--;


            for(let i = 0; i < 26; i++) {

                dp[v][i] = Math.max(dp[v][i], dp[u][i]);
            }
        }

        
    }

    return visited == n ? maxLen : -1;
};