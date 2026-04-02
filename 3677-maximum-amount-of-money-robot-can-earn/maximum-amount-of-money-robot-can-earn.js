/**
 * @param {number[][]} coins
 * @return {number}
 */
var maximumAmount = function(coins) {

  let n = coins.length; 
  let m = coins[0].length;


  const map = Array.from({ length: n }, () =>
        Array.from({ length: m }, () => Array(3))
    );

    return dfs(0, 0, 2) ;

  function dfs(i, j , left) {
    if(isSafeNot(i, j)) return -Infinity

    if(i === n - 1 && j === m - 1) {
       
        if(coins[i][j] < 0 && left > 0) return 0;
        return coins[i][j];

    }

    let max = -Infinity;
    if(map[i][j][left] != undefined) return map[i][j][left]


    if(coins[i][j] < 0 && left > 0) {
        let used = Math.max(dfs(i, j + 1, left - 1), dfs(i + 1, j, left - 1));
        let unUsed = coins[i][j] + Math.max(dfs(i, j + 1, left), dfs(i + 1, j, left));

        max = Math.max(used, unUsed);

    }
    else {
        max = coins[i][j] + Math.max(dfs(i, j + 1, left), dfs(i + 1, j, left));
    }

    map[i][j][left] = max;
    return max;
  } 


  function isSafeNot(i, j) {
    if(i >= n || j >= m) return true;
    return false;
  } 
};