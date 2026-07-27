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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let diameter = 0

        const getH = (node) => {
            if(node === null) {
                return 0
            }

            const leftH = getH(node.left)
            const rightH = getH(node.right)

            diameter = Math.max(diameter, leftH + rightH)

            return 1+ Math.max(leftH, rightH)
        }

        getH(root)

        return diameter
    }
}
