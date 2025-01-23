/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {


    const rank = new Array(26).fill(0);
    const parent = new Array();

    const notEqualArray = new Array();

    for(let i = 0; i < 26; i++) parent[i] = i;

    for(const str of equations) {

        if(str[1] == "!") notEqualArray.push(str);

        else {
            // console.log("x ", str.charCodeAt(0) - 97)
            let x = find(str.charCodeAt(0) - 97);
            // console.log("y", str.charCodeAt(3) - 97)
            let y = find(str.charCodeAt(3) - 97);

            if(x == y) continue;

            union(x, y);

        }
        
    }

    
    for(const str of notEqualArray) {
        let x = find(str.charCodeAt(0) - 97);
        let y = find(str.charCodeAt(3) - 97);

        if(x == y) return false;
    }

    return true;


    function find (x) {

        if(parent[x] == x) return x;

        return parent[x] = find(parent[x]);
    }


    function union (x, y) {

        x_ = find(x);
        y_ = find(y);

        if(rank[x_] > rank[y_])  parent[x_] = y_;
        else if(rank[x_] < rank[y_]) parent[y_] = x_;

        else {

            parent[x_] = y_;
            rank[x_]++;
        }
        
    }
    
};