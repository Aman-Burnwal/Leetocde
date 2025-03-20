/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} query
 * @return {number[]}
 */
var minimumCost = function(n, edges, query) {

    const parent = new Array(n + 1);
    const counting = new Array(n + 1).fill(1);
    const andValue = new Array(n + 1).fill(-1);
    const ans = new Array();


    for(let i = 0; i <  parent.length; i++) {
        parent[i] = i;
    }

    for(const [u, v, w] of edges) {

        if(andValue[u] != -1) andValue[u] &= w;
        else andValue[u] = w;
        if(andValue[v] != -1) andValue[v] &= w;
        else andValue[v] = w;
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

        // console.log(x, y)
        if(x != y) ans.push(-1);
        else {
            ans.push(andValue[x]);
        }
    }




    function findParent(num) {

        if(parent[num] == num) return num;

        andValue[parent[num]] &= andValue[num]; 

        return parent[num] = findParent(parent[num]);
    }

    

   

    return ans;
    

    
};