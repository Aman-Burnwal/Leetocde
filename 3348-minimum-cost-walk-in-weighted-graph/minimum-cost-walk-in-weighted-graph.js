/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} query
 * @return {number[]}
 */
var minimumCost = function(n, edges, query) {

    const parent = new Array(n );
    const counting = new Array(n).fill(1);
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

        if(counting[x] > counting[y]) {

            parent[x] = y;
            counting[x]++;
  
        }
        else {
            parent[y] = x;
            counting[y]++;
        }

    }
    
    for(let i = 0; i < n; i++) {

        findParent(i);
    }

    for(const [u, v] of query) {

        let x = findParent(u);
        let y = findParent(v);

        ans.push( x != y ? -1 : andValue[x]);
      
        
    }




    function findParent(num) {

        if(parent[num] == num) return num;

        andValue[parent[num]] &= andValue[num]; 

        return parent[num] = findParent(parent[num]);
    }

    

   

    return ans;
    

    
};