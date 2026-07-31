class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded =  ""

        for(const str of strs) {
            encoded += str.length + "#" + str
        }

        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = []
        let index = 0

        while(index < str.length ) {
            let delimiterIndex = index

            while(str[delimiterIndex] !== '#') {
                delimiterIndex ++
            }

            const length = Number(str.slice(index, delimiterIndex))
            const start = delimiterIndex +1
            const end = start + length

            result.push(str.slice(start, end))
            index = end

        }
        return result
    }
}
