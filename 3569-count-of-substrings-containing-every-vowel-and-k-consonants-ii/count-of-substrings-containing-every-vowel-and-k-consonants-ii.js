/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function(word, k) {

    const vowelMap = new Map();
    const consonents = new Array();

    const set = new Set(["a", "e", "i", "o", "u"]);

   
    let j = word.length - 1;

    while(j >= 0) {

        if(!set.has(word[j])) consonents.push(j);
        j--;
    }

    console.log(consonents)

    let i = 0,  con = 0;
    j = 0;
    let count = 0;

    while(i < word.length) {

        if(set.has(word[i])) {
            vowelMap.set(word[i], (vowelMap.get(word[i]) || 0) + 1);
        }
        else {
            con++;
            consonents.pop();
        }

        

        if(vowelMap.size == 5 && con == k) {


            // count +=  (consonents[0] || i ) - i;

            // if(set.has(word[j])) 

            
            while(vowelMap.size == 5 && k == con) {

                // console.log((consonents[consonents.length - 1] || i + 1 ) - i)
                count +=  (consonents[consonents.length - 1] || word.length ) - i;
                // console.log(i, count, consonents[0])
                if(!set.has(word[j])) con--;
                else if(vowelMap.get(word[j]) == 1) vowelMap.delete(word[j]);
                else vowelMap.set(word[j], vowelMap.get(word[j]) - 1);

                j++;

            }
        } 
        else if( con > k) {
            while(con > k ) {

                if(!set.has(word[j])) con--;
                else if(vowelMap.get(word[j]) == 1) vowelMap.delete(word[j]);
                else vowelMap.set(word[j], vowelMap.get(word[j]) - 1);

                j++;
            }
        }


        i++;
      
    }



    



    

    return count;    
};