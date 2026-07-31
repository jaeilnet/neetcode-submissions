class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNumber(nums) {
      let uniqueNumber = 0;

      for(const num of nums ){

        uniqueNumber ^= num
      }

      return uniqueNumber
    }
}
