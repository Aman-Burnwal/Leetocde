/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number[]}
 */
var maxTargetNodes = function(edges1, edges2) {
    
    const adj1 = new Map();
    const adj2 = new Map();

    createAdjList(edges1, adj1);
    createAdjList(edges2, adj2);

    const n1 = adj1.size;
    // const dp = Array.from({length: n2}, () => [false, false])
    const n2 = adj2.size;


    const visited = new Array();
    const ans = new Array()
    let EvenMax = 0, oddMax = 0, countOdd = 0, countEven = 0;



    DFSHead(0, 0, adj2);
    let max = Math.max(countOdd, countEven);
    countOdd = 0;
    countEven = 0;
    
    DFSHead(0, 0, adj1);
    Positioning(0, 0);




        function Positioning(curr , u) {

            if(visited[u]) return;

   

            ans[u] = curr % 2 ? countOdd + max : countEven + max;
            
            

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

        // console.log(oddEven, count)

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

            if(!adj.has(u)) adj.set(u, []);
            if(!adj.has(v)) adj.set(v, []);

            adj.get(u).push(v);
            adj.get(v).push(u);
        }
    }

};