/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    [[1,2],[1,3],[2,3],[3,4],]
    intervals.sort((a,b)=> a[1]-b[1]);
    let count=0;
    let current = intervals[0]
    for(let i=1;i<intervals.length;i++) {
        if(intervals[i][0]< current[1]) {
            count++
        } else {
              current= intervals[i]
        }
      
    }
    return count
};
 
    

 