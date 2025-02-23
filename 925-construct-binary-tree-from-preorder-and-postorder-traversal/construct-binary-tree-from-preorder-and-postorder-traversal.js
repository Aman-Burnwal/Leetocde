/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function(preorder, postorder) {
    
    const map = new Map();

    for(let i = 0; i < postorder.length; i++) {

        map.set(postorder[i], i);
    }


    return helper(0, 0, preorder.length - 1)

    function helper(preIndex, postIndex, preEnd) {

       if(preEnd < preIndex) return null;
  
        const root = new TreeNode(preorder[preIndex]);

        if(preIndex == preEnd) return root;

        const nextRoot = preorder[preIndex + 1];

        let j = map.get(nextRoot);

        let num = j - postIndex + 1;

        root.left = helper(preIndex + 1, postIndex, preIndex + num);

        root.right = helper(preIndex + num + 1, j + 1, preEnd);

        return root;
        
    }

};