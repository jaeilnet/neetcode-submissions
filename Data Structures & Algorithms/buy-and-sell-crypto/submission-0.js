class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // 지금까지 확인한 가격 중 가격 낮은 가격
        let minPrice = Infinity

        // 지금까지 만들 수 있었던 최대 이익
        let maxProfit = 0

        for(const price of prices) {
            // 현재 가격이 더 낮다면 새로운 구매 후보 갱신
            minPrice = Math.min(minPrice, price)

            // 이전까지의 최소 가격에 사고 현재 가격에 판매했을 때의 이익
            const currentProfit = price - minPrice

            // 기존 최대 이익보다 크다면 갱신
            maxProfit = Math.max(maxProfit, currentProfit)
        }

        return maxProfit
    }
}
