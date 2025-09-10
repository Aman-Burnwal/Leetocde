/**
 * @param {number} n
 * @param {number[][]} languages
 * @param {number[][]} friendships
 * @return {number}
 */
var minimumTeachings = function(n, languages, friendships) {
    
    const sadUsers = new Set();

    for(const [u, v] of friendships) {
        const set = new Set(languages[u - 1]);
        let is = true;
        for(const lan of languages[v - 1]) {
            if(set.has(lan)) {
                is = false;
                break;
            }
        }
        if(is) {
            sadUsers.add(u);
            sadUsers.add(v);
        }
    }

    console.log(sadUsers);

    const array = new Array(n + 2).fill(0)

    for(const u of [...sadUsers]) {

        const lan = languages[u - 1];

        for(let v of lan) {
            array[v]++;
        }
    }

    let max = Math.max(...array);
    return  sadUsers.size - max
};