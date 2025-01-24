/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {


    
    const ans = new Array();

    const visited = new Array(graph.length).fill(false);

    const inR = new Array(graph.length).fill(false);


    for(let i = 0 ; i < graph.length; i++) {

        if(visited[i]) continue;
        DFS(i);

    }

    for(let i = 0; i < inR.length; i++) {
        if(!inR[i])ans.push(i);
    }

    function DFS(u) {

        if(visited[u] && inR[u]) return false;

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