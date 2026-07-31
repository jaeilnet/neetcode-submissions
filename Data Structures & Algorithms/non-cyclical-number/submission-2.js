class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const visitied = new Set()

        while(n !== 1) {
            if(visitied.has(n)) {
                return false
            }


            visitied.add(n)

            let sum =0;

            while(n > 0 ){
                     const digit = n % 10
                sum += digit * digit
                n = Math.floor(n/10)
            }

            n+=sum
        }

        return true;
    }
}
