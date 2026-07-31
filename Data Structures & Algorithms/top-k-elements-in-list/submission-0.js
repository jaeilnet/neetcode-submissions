class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequencyMap = new Map();

        for (const num of nums) {
            frequencyMap.set(num, (frequencyMap.get(num) ?? 0) + 1);
        }

        const buckets = Array.from({ length: nums.length + 1 }, () => []);

        for (const [num, frequency] of frequencyMap) {
            buckets[frequency].push(num);
        }

        const result = [];

        for (let frequency = buckets.length - 1; frequency >= 1; frequency--) {
            for (const num of buckets[frequency]) {
                result.push(num);

                if(result.length ===k) {
                    return result
                }
            }
        }
    }
}
