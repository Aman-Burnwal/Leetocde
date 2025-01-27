/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(n, prerequisites) {
    
    const map = new Map();
    const indegree = new Array(n).fill(0);

    for(const [v, u] of prerequisites) {

        if(!map.has(u))map.set(u, []);

        map.get(u).push(v);
        indegree[v]++
    }

    const que = new Array();
    const ans = new Array()

    for(let i = 0; i < n; i++) {

        if(indegree[i] == 0) que.push(i);
        
    }

    while(que.length) {

        const u = que.pop();
        ans.push(u);

        if(map.has(u))  {
            for(const v of map.get(u)) {
                indegree[v]--;
                if(indegree[v] == 0) que.push(v);
            }
        }
    }

    return ans.length == n ? ans : [];





};