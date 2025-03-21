/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function(recipes, ingredients, supplies) {

    const supplySet = new Set(supplies);
    // console.log(supplySet)


    const ans = new Array();
    const map = new Map();
    const counting = new Array(recipes.length).fill(0);


    for(let i = 0; i < recipes.length; i++) {

        for(const ind of ingredients[i]) {

            if(!supplySet.has(ind)) {

                if(map.has(ind)) map.get(ind ).push(i);
                else map.set(ind, [i])

                counting[i]++;

            }
        }
    }
    // console.log(counting)

    const queue = new Array();

    for(let i = 0; i < counting.length; i++) {

        if(counting[i] == 0) queue.push(i);
    }

    while(queue.length) {

        const ind = queue.shift();
        ans.push(recipes[ind]);
        const arr = map.get(recipes[ind])
        // console.log(arr , ind)

        if(arr) {

            for(const ind of arr) {

                counting[ind]--;

                if(counting[ind] == 0) queue.push(ind);
            }


        }

    }

    // while(ans.length < recipes.length) ans.push(-1)
    // console.log(map)
    return ans;
    
};