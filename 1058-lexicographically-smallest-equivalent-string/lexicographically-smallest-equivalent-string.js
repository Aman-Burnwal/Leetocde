/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function(s1, s2, baseStr) {
    // Initialize parent array
    const parent = new Array(26);
    for (let i = 0; i < 26; i++) {
        parent[i] = i;
    }

    // Find function with path compression
    function find(x) {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }

    // Union function: always attach larger letter to smaller one
    function union(x, y) {
        let px = find(x);
        let py = find(y);
        if (px === py) return;

        if (px < py) {
            parent[py] = px;
        } else {
            parent[px] = py;
        }
    }

    // Build the unions
    for (let i = 0; i < s1.length; i++) {
        const a = s1.charCodeAt(i) - 97;
        const b = s2.charCodeAt(i) - 97;
        union(a, b);
    }

    // Build the result string
    let result = "";
    for (const ch of baseStr) {
        const rep = find(ch.charCodeAt(0) - 97);
        result += String.fromCharCode(rep + 97);
    }

    return result;
};
