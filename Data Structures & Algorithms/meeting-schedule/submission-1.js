/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {

        intervals.sort((a,b) => a.start - b.start)

        
        for(let i=0; i<intervals.length -1;i ++) {
            
            const {start:c_start, end:c_end} = intervals[i]
            const {start:n_start, end:n_end} = intervals[i+1]

            if(c_end > n_start) {
                return false
            }
        }

        return true
        
    }
}
