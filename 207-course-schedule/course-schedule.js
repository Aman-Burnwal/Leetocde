/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const map = new Map();
    const inOrder = new Array(numCourses).fill(0);

    for(const [course, preReq] of prerequisites ) {
        if(!map.has(course)) map.set(course, []);
        map.get(course).push(preReq);
        inOrder[preReq]++;
    }

    const visited = new Array(numCourses).fill(false);
    const inRecusion = [...visited];
    for(let i = 0; i < numCourses; i++) {
        if(!visited[i] && DFS(i)) return false;
    }

    function DFS(i) {
        if(visited[i] && inRecusion[i]) return true;
        if(visited[i]) return false;
        visited[i] = true;
        inRecusion[i] = true;

        const preReq = map.get(i) || [];
        for(const course of preReq) {
            if(DFS(course)) return true;;
        }
        inRecusion[i] = false;
        return false;

    }

    return true;
};