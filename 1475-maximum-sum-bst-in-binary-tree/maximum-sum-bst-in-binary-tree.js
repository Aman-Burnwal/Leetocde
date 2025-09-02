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
var maxSumBST = function(root) {
    let max = 0;
    traversal (root )
    return max;
    function traversal (root ) {
        if(!root) return {
            isBST: true,
            sum: 0,
             min: 1e5,
                max: -1e5
        };

        const left = traversal (root.left);
        const right = traversal (root.right);

        if (
            left.isBST &&
            right.isBST &&
            root.val > left.max &&
            root.val < right.min
        ) {
            const sum = root.val + left.sum + right.sum;
            max = Math.max(sum, max);
            return {
                isBST: true,
                sum,
                max: Math.max(right.max, root.val),
                min: Math.min(root.val, left.min)
            }
        }

        return {isBST: false, sum: 0, max : -1e5, min: 1e5}

    }
};