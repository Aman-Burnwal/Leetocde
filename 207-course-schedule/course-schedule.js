/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const map = new Map();
    const inDegree = new Array(numCourses).fill(0);

    for(const [course, preReq] of prerequisites) {
        if(!map.has(course)) map.set(course, []);
        map.get(course).push(preReq);
        inDegree[preReq]++;
    }


    const queue = [];

    for(let i = 0; i < inDegree.length; i++) {
        if(inDegree[i] === 0) queue.push(i)
    }

    let count = 0;
    while(queue.length) {
        count++;
        const course = queue.shift();
        const req = map.get(course) || [];
        for(const r of req) {
            inDegree[r]--;
            if(inDegree[r] === 0) queue.push(r)
        }
    }
    return count === numCourses;


};