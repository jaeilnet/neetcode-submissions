class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // 빈 스택을 만든다
        const stack = [];

        // 닫는 괄호와 여는 괄호를 매핑한다.
        const matchingBracket = {
            ")": "(",
            "}": "{",
            "]": "[",
        };

        // 문자열의 각 괄호를 순회한다.
        for(const bracket of s) {
            // 매핑에 없는 문자는 여는 괄호이므로 스택에 저장
            if(!(bracket in matchingBracket)) {
                stack.push(bracket)
                continue;
            }

            // 닫는 괄호라면 가장 최근에 열린 괄호와 짝이 맞아야한다.
            const lastOpenBracket = stack.pop()

            if(lastOpenBracket !== matchingBracket[bracket]) {
                return false;
            }
        }


        return stack.length === 0
    }
}
