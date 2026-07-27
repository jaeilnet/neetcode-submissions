/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        let balaneced = true;

        const getHeight = (node) => {
            if(node === null) {
                return 0
            }

            const leftH = getHeight(node.left)
            const rightH = getHeight(node.right)

            if(Math.abs(leftH - rightH) > 1) {
                balaneced = false;
            }

            return 1+ Math.max(leftH, rightH)
        }

        getHeight(root)

        return balaneced
    }
}
