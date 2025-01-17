/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
    
    let gangs = 0;

    const visited = new Array(stones.length).fill(false);

    for(let i = 0;i < stones.length; i++) {

        if(visited[i] == false) {
           
            dfs(i);
            gangs++;
        }
    }

    function dfs(i) {

        if(visited[i] == true) return;

        visited[i] = true;

        let [row, col] = stones[i];

        for(let j = 0; j < stones.length; j++) {

            if((stones[j][0] == row || stones[j][1] == col) && visited[j] == false) dfs(j);
        }
    }

    return stones.length - gangs;
};