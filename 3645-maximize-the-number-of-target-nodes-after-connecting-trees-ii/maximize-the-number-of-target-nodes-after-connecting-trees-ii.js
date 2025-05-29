/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number[]}
 */
var maxTargetNodes = function(edges1, edges2) {
    
    const n1  = 1 + edges1.map((curr) =>  {
                    return curr.reduce((a, b) => Math.max(a, b), 0)
                }).reduce((acc, curr) => Math.max(acc, curr), 0)
    
    const n2  = 1 + edges2.map((curr) =>  {
                    return curr.reduce((a, b) => Math.max(a, b), 0)
                }).reduce((acc, curr) => Math.max(acc, curr), 0)
    
    const adj1 = new Map();
    const adj2 = new Map();



    for(let i = 0; i < n1; i++) {
        adj1.set(i, []);
    }
    
    for(let i = 0; i < n2; i++) {
        adj2.set(i, []);
    }

 

    

    createAdjList(edges1, adj1);
    createAdjList(edges2, adj2);




    const visited = new Array(Math.max(n2, n1)).fill(0);
    const ans = new Array()
    let EvenMax = 0, oddMax = 0, countOdd = 0, countEven = 0;

    DFSHead(0, 0, adj2);

    let max = Math.max(countOdd, countEven);

    countOdd = 0;
    countEven = 0;
    Positioning(0, 0);
    DFSHead(0, 0, adj1);


    for(let i = 0; i < n1; i++) {


        
        ans[i] = !ans[i] ? countEven + max : countOdd + max;
    }
    


        function Positioning(curr , u) {

            if(visited[u]) return;

            ans[u] = curr % 2 
            
            

            visited[u] = true;

            for(const v of adj1.get(u)) {

                if(visited[v]) continue;
                Positioning(curr + 1, v);
            }
            visited[u] = false;

            return;
        }

  




    return ans //  change it

    function DFSHead (curr, u, adj2 ) {

        DFS(curr, u)



        function DFS(curr , u) {

            if(visited[u]) return;

            curr % 2 ? countOdd++ :  countEven++;
            
            

            visited[u] = true;

            for(const v of adj2.get(u)) {

                if(visited[v]) continue;
                DFS(curr + 1, v);
            }
            visited[u] = false;

            return;
        }
    }

    


    function createAdjList(edges , adj) {

        for(const [u, v] of edges) {


            adj.get(u).push(v);
            adj.get(v).push(u);
        }
    }

};