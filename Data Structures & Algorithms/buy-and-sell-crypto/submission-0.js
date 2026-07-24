class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if(!prices.length) return prices.length 

        let buy = prices[0]
        let result = 0

        for(let i=0; i<prices.length; i++) {
            if(buy > prices[i]) {
                buy = prices[i]
            }else {
                const sell = prices[i] - buy 
                
                if(sell > result) {
                    result = sell
                }
            }  
        }

        return result
        
    }
}
