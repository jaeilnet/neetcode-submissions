class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const stack = [];

        const findNum = (n) => {
            console.log(n)
            if (n === 1) {
                return true;
            }

            const isStackNum = stack.filter((v) => v === n)

            if(isStackNum.length) return false

            stack.push(n)

            let strNum = String(n);
            let result = 0;

            for (let i = 0; i < strNum.length; i++) {
                result += Math.pow(strNum[i], 2);
            }

            return findNum(result);
        };

        return findNum(n);
    }
}
