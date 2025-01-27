/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(n, prerequisites) {


    const map = new Map();
    const indegree = new Array(n).fill(0);


    for(const [u, v] of prerequisites) {

        if(!map.has(v))map.set(v, []);
        map.get(v).push(u);
        indegree[u]++;
    }


    const que = new Array();


    for(let i = 0; i < n; i++) {
        if(indegree[i] == 0) que.push(i)
    }


    while(que.length) {

        const u = que.pop();

        if(!map.has(u)) continue;
        // const arr = map.get(u)
        // console.log
        for(const v of map.get(u)) {

            indegree[v]--;

            if(indegree[v] == 0) que.push(v); 
        }
    }

    for(let i = 0; i < n; i++) {
        if(indegree[i] != 0) return false;
    }

    return true;
    
    
};