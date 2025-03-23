/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function(n, edges) {



    let count = 0;
    const parent = new Array();
    const size  = new Array(n).fill(1);
    const mp = new Map();

    for(let i = 0; i < n; i++) parent.push(i);

    for(const [u, v] of edges) {

        union(u, v);
    }

    for(const [u, v] of edges) {

       let idx =  find(u);

       mp.set(idx, (mp.get(idx) || 0) + 2);
    }

    for(let i = 0; i < n; i++) {

        if(parent[i] == i) {
          
          if(size[i] == 1) {
            count++;
            continue;
          }
          count +=  ( size[i] * (size[i] - 1)) ==( mp.get(i) ) ? 1 : 0;
          console.log(i, count)
        }
    }


    return count;


    function find(x) {

        if(parent[x] == x) return x;

        return parent[x] = find(parent[x]);

    }


    function union(x, y) {

        let x_ = find(x);
        let y_ = find(y);


        if(x_ == y_ ) return;

        if(size[x_] > size[y_]) {

          parent[y_] = x_;
          size[x_] += size[y_]
        //   mp.set(x_, (mp.get(x_) || 0) + 1);
        }
        else {
            parent[x_] = y_;
            size[y_] += size[x_];
            // mp.set(x_, (mp.get(x_) || 0) + 1);
        }
    }


    
};