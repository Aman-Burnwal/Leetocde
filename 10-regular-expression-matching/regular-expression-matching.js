/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {

    const map = new Map();


    return helper(0, 0)

    function helper(i, j) {

        let key = i + "_" + j;
        if(map.has(key)) return map.get(key);

        if(j == p.length) return i == s.length;

        

        if(p[j + 1] == "*") {

            let a = helper(i , j + 2);

            let b = false;

            if(i < s.length && (s[i] == p[j] || p[j] == ".")) b = helper(i + 1, j);

            map.set(key, a || b);

            return a || b;
        }

        else {

            let temp = false;

             if(i < s.length &&( s[i] == p[j] || p[j] == ".")) temp = helper(i + 1, j + 1);
           
            map.set(key, temp);
             
             return temp;
        }


    }
    
};