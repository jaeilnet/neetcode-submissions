class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {

        const num = Number(digits.join(""))+1


        console.log(num)

        return String(num).split('')


        
    }
}
