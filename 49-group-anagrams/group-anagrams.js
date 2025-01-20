/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

  const map = new Map();

  let indx = 0;
  const ans = [];


  for(let str of strs) {

        let sortedStr = str.split("").sort().join("");

        if(map.has(sortedStr)) {

            let idx = map.get(sortedStr);

            ans[idx].push(str);
        }
        else {
            ans[indx] = [str];
            map.set(sortedStr, indx);
            indx++;
        }
  }

  return ans;


};