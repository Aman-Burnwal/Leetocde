/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxProduct = function(root) {
    
    let sum = dfs(root);
    let curr = 0;
    let max = 0;
    dfss(root)
    return max %( Math.pow(10, 9) + 7);


    function dfs(root) {
        if(!root) return 0;
        let left = 0;
        let right = 0
        if(root.left) left = dfs(root.left);
        if(root.right) right = dfs(root.right)

        return left + right + root.val;
    }


    function dfss(root) {
        if(!root) return 0;

        let left = 0;
        let right = 0;

        if(root.left) left = dfss(root.left);
        if(root.right) right = dfss(root.right)

        const currSum = left + right + root.val

        max = Math.max(max , (sum - currSum) * currSum)

        return currSum

    }

   

};