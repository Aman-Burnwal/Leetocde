/**
 * @param {number[][]} edges
 * @param {number} bob
 * @param {number[]} amount
 * @return {number}
 */
var mostProfitablePath = function(edges, bob, amount) {

    const adj = new Map();
    const visited = new Set();
    const BobTimes = new Map();
    let max = -Infinity;

    for(const [u, v] of edges) {

        if(!adj.has(u)) adj.set(u, new Array());
        if(!adj.has(v)) adj.set(v, new Array());

        adj.get(u).push(v);
        adj.get(v).push(u);
    }

    

    
    BobDFS(bob, 0);
    AliceDFS(0, 0, 0);
 
    return max;


    function AliceDFS(curr, t , price) {

        visited.add(curr);
    

        if(!BobTimes.has(curr) || (BobTimes.has(curr) && BobTimes.get(curr) > t)) price += amount[curr];

        else if(BobTimes.has(curr) && BobTimes.get(curr) == t) price += (amount[curr] / 2);

        if(adj.get(curr).length == 1 && curr != 0) {

            max = Math.max(price, max);
           
            return;
        }



        for(const neighbour of adj.get(curr)) {

            if(visited.has(neighbour)) continue;

            AliceDFS(neighbour, t + 1, price);
        }
    }


    function BobDFS(curr, t) {

        // visited.add(curr);
        BobTimes.set(curr, t);


        if(curr == 0) return true;

        for(const neighbour of adj.get(curr)) {

            if(BobTimes.has(neighbour)) continue;
            
            if(BobDFS(neighbour , t + 1) ) return true;
        }

        BobTimes.delete(curr);

        return false;

    } 
    
};