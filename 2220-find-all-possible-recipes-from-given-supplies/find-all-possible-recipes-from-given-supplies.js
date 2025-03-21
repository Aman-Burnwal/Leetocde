/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function(recipes, ingredients, supplies) {

    const supply = new Set(supplies);
    let shouldRun = true;
    const ans = new Array();

    while(shouldRun) {

        shouldRun = false;

        for(let i = 0; i < recipes.length; i++) {

            const recipy = recipes[i];

            if(recipy != -1) {

                let is = true;;
                for( const ind of ingredients[i]) {
                    // console.log(recipy, ind)
                    if(!supply.has(ind)) {
                        
                        is = false;
                        break;
                    }
                }

                if(is) {
                    shouldRun = true;
                    ans.push(recipy);
                    recipes[i] = -1;
                    supply.add(recipy);
                }

            }

        }
    }

    return ans;
    
};