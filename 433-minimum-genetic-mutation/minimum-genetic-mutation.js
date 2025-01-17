/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {

    const visited = new Set();
    const bankSet = new Set(bank);
    visited.add(startGene);

    return BFS();

    function BFS() {

        const queue = new Array();

        queue.push(startGene);

        let level = 0;

        while(queue.length) {

            let n = queue.length;

            while(n--) {

                let curr = queue.shift();

                if(curr == endGene) return level;

                curr = curr.split("");

                for(const ch of "ACGT") {

                    for(let i = 0; i < 8; i++) {
                        let c = curr[i];
                        curr[i] = ch;
                        let t = curr.join("");
                        curr[i] = c;

                        if(bankSet.has(t) && !visited.has(t)) {
                            queue.push(t);
                            visited.add(t);
                        
                        }
                       
                    }
                }

            }

            level++;
        }

        return -1;

    }
    
};