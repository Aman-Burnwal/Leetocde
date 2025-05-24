/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {

  const indexed_array = new Array();

  for(let i = 0; i < words.length; i++) {

    if(words[i].includes(x)) {
        indexed_array.push(i);
    }
  }  

  return indexed_array;
};