/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {

   function helper(p, q) {
        if(!p && !q) return true;
        if(!p || !q || p.val != q.val) return false;

        return helper(p.left , q.left) && helper(p.right , q.right) 

   }
   return helper(p, q)
    
};