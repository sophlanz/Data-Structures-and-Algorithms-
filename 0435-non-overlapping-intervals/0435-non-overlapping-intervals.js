/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
intervals.sort((a,b)=> a[1]-b[1]);
    let curr = intervals[0];
    let count=0;
    for(let i=1;i<intervals.length;i++) {
        const interval = intervals[i];
        if(interval[0]< curr[1]) {
            count++
        }else {
            curr=intervals[i]
        }
    }
    return count
};
 
    

 