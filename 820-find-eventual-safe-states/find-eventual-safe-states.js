/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    
    const ans = new Array();

    const visited = new Array(graph.length).fill(false);

    const inR = new Array(graph.length).fill(false);

    const adj = Array.from({length: graph.length}, () => new Array())

    for(let i = 0; i < graph.length; i++) {

        for(let j = 0; j < graph[i].length; j++) {

            adj[graph[i][j]].push(i);
        }
    }

    const freq = new Array(graph.length).fill(0);


    for(const u of adj) {

        for(const  v of u) freq[v]++;
    }

    const queue = new Array();

    for(let i = 0; i < freq.length; i++) {

        if(freq[i] == 0) queue.push(i)
    }

    let i = 0;
    
    while(i < queue.length) {

        let u = queue[i++];
        ans.push(u);

        for(const v of adj[u]) {

            freq[v]--;

            if(freq[v] == 0) queue.push(v);
        }
    }

    return ans.sort((a, b) => a - b);

    



    console.log(freq)







    for(let i = 0 ; i < graph.length; i++) {

        if(visited[i]) continue;
        DFS(i);

    }

    for(let i = 0; i < inR.length; i++)  if(!inR[i])ans.push(i);
    

    function DFS(u) {

        visited[u] = true;
        inR[u] = true;

        for(const v of graph[u]) {

            if(visited[v] == false && DFS(v)) return true;

            else if(inR[v]) return true;
        }
        inR[u] = false;
        return false;
    }

    return ans;
    
};