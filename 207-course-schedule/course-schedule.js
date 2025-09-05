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

    let count = 0;
    const queue = []
    for(let i = 0; i < numCourses; i++) {
        if(inOrder[i] === 0) queue.push(i);
    }

    while(queue.length) {
        const course = queue.shift();
        count++;
        const d = map.get(course) || []
        for(const preReq of d) {
            inOrder[preReq]--;
            if(inOrder[preReq] === 0) queue.push(preReq);
        }
    }

    return count === numCourses;
};