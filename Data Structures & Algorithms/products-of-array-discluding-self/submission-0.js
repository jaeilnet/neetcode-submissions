class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        
        let index = 0

        const result = []

        while(result.length !== nums.length) {
            console.log(index)
            let sum = 1
            
            for(let i=0; i<nums.length;i ++) {
                if(index !== i) {
                    sum *= nums[i]
                }
            }


            result.push(sum)
            index++

        }


        return result
        
    }
}
