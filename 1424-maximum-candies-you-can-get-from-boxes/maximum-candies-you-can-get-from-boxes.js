/**
 * @param {number[]} status
 * @param {number[]} candies
 * @param {number[][]} keys
 * @param {number[][]} containedBoxes
 * @param {number[]} initialBoxes
 * @return {number}
 */
var maxCandies = function(status, candies, keys, containedBoxes, initialBoxes) {
    
    const n = status.length;

    const visited = new Array(n).fill(false);
    
    let count = 0;

    while(initialBoxes.length) {

        let notAvalable = true;

        for(let index = 0; index < initialBoxes.length; index++) {

            let idx = initialBoxes[index]

            // console.log(idx)
            if(status[idx] && visited[idx] === false) {

                visited[idx] = true;
                notAvalable = false;

                count += candies[idx]

                if(containedBoxes[idx].length) {

                    for(const cIdx of containedBoxes[idx]) {

                        if(visited[cIdx] == false && !initialBoxes.includes(cIdx)) {
                            initialBoxes.push(cIdx);
                        }
                    }
                }

                if(keys[idx].length) {

                    for(const kIdx of keys[idx]) {
                        status[kIdx] = 1;
                    }
                }

            }
        }

        if(notAvalable) break;


    }

    return count;
};