/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} query
 * @return {number[]}
 */
var minimumCost = function(n, edges, query) {

    const parent = new Array(n );
    const andValue = new Array(n ).fill(-1);
    const ans = new Array();


    for(let i = 0; i <  parent.length; i++) {
        parent[i] = i;
    }

    for(const [u, v, w] of edges) {

        andValue[u] != -1 ? andValue[u] &= w : andValue[u] = w;
        andValue[v] != -1 ? andValue[v] &= w :  andValue[v] = w;
    }



    for(const [u, v, w] of edges) {

        let x = findParent(u);
        let y = findParent(v);

        if(parent[x] > parent[y])  parent[x] = y;
        
        else parent[y] = x;
         

    }
    
    for(let i = 0; i < n; i++) {

        findParent(i);
    }

    for(const [u, v] of query) {

        let x = findParent(u);
        let y = findParent(v);

        ans.push( x != y ? -1 : andValue[x]);
      
        
    }




    return ans;


    
    function findParent(num) {

        if(parent[num] == num) return num;

        andValue[parent[num]] &= andValue[num]; 

        return parent[num] = findParent(parent[num]);
    }

    

    
};