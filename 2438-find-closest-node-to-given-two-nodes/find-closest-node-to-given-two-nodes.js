/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function(edges, node1, node2) {
    
    const map = new Map();
    

    for(let u = 0; u < edges.length; u++) {
        let v = edges[u]
        if(v == -1) continue;

        if(!map.has(u)) map.set(u, [v]);

        else map.get(u).push(v)
    }




    const dist1 = new Array(edges.length).fill(0);
    const dist2 = new Array(edges.length).fill(0);
    const visited = [...dist1];
    let maxi = Infinity;

    let ans = -1;

    TimeSaver(node1, 1, dist1);
    TimeSaver(node2, 1, dist2);



    for(let i = 0; i < dist1.length; i++) {

        if(dist2[i] != 0 && dist1[i] != 0) {
            
            let max = Math.max(dist2[i] , dist1[i]);

            if(max < maxi) {
                maxi = max;
                ans = i;
            }
        

            // else if (max == maxi) ans = Math.min(ans, max)
        }
    }

    return ans;

    function TimeSaver (u, level, dist1) {

        function DFS(u, level) {

            if(visited[u]) return;
            visited[u] = true;
            dist1[u] = level

            if(map.has(u)) {

                for(const v of map.get(u)) {

                    if(!visited[v]) DFS(v, level + 1)
                }
            }

            visited[u] = false;
        }

        DFS(u, level)
    }






};