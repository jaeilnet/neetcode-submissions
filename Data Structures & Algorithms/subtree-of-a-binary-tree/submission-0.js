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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if(root === null) {
            return false;
        }

        if(this.isSameTree(root, subRoot)) {
            return true;
        }

        return (
            this.isSubtree(root.left, subRoot) ||
            this.isSubtree(root.right, subRoot)
        )
    }

    isSameTree (first, second) {    
        if(first === null && second === null) {
            return true
        }

        if(first === null || second === null) {
            return false
        }

        if(first.val !== second.val) {
            return false;
        }
         
        return (
            this.isSameTree(first.left, second.left) && 
            this.isSameTree(first.right, second.right)
        )
    }
}
