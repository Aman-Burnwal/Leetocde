/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(n, prerequisites) {


    const map = new Map();
    


    for(const [u, v] of prerequisites) {

        if(!map.has(v))map.set(v, []);
        map.get(v).push(u);
        // indegree[u]++;
    }


    const visited = new Array(n).fill(false);
    console.log(map)

    for(let i = 0; i < n; i++) {
        const inRecursion = new Array(n).fill(false);
        
        // console.log(i,visited[i],  got)
        if(!visited[i] ) {

            let got = DFS(i, inRecursion)
            console.log(got)
            if(got) return false;
        }
    }
    return true;
    function DFS(u, inRecursion) {

        if(inRecursion[u]) return false;

        visited[u] = true;
        inRecursion[u] = true;

        if(map.has(u)) {

            for(const v of map.get(u)) {

                if(!visited[v] && DFS(v , inRecursion)) return true;
                else if(inRecursion[v]) return true;
            }
        }
        inRecursion[u] = false;

        return false;
    }

    

    // const indegree = new Array(n).fill(0);
    // const que = new Array();


    // for(let i = 0; i < n; i++) {
    //     if(indegree[i] == 0) que.push(i)
    // }


    // while(que.length) {

    //     const u = que.pop();

    //     if(!map.has(u)) continue;

    //     for(const v of map.get(u)) {

    //         indegree[v]--;

    //         if(indegree[v] == 0) que.push(v); 
    //     }
    // }

    // for(let i = 0; i < n; i++) {
    //     if(indegree[i] != 0) return false;
    // }

    // return true;
    
    
};