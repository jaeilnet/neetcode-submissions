class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = []

        let index = 0

        while(index < nums.length) {
            let sum = 1

            for(let i =0; i<nums.length;i ++) {
                if(i !== index) {
                    sum *= nums[i]
                }
            }
            
            result.push(sum)
            index++
        }


        return result
    }
}
