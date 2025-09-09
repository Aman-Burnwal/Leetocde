/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    
    const graph = new Map();
    const depend = new Array(numCourses).fill(0);

    for(const [course, req] of prerequisites) {
        if(!graph.has(req)) graph.set(req, []);
        graph.get(req).push(course);
        depend[course]++;
    }

    const queue = [];

    let ans = [];
    for(let i = 0; i < numCourses; i++) {
        if(depend[i] === 0) {
            queue.push(i)
        }
    }

    while(queue.length) {

        const course = queue.shift();
        ans.push(course);

        const req = graph.get(course) || [];

        for(const c of req) {
            depend[c]--;
            if(depend[c] === 0) {
                queue.push(c);
            }
        }

    }

    return ans.length === numCourses ? ans : [];
};