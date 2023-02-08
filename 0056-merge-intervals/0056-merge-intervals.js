/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b)=> a[0]-b[0]);
    let start = intervals[0][0];
    let end = intervals[0][1];
    let res=[];
    for(let i=0;i<intervals.length;i++) {
        let interval = intervals[i];
        if(end >= interval[0]) {
            end = Math.max(end,interval[1]);
        }else {
            res.push([start,end]);
            start =interval[0];
            end=interval[1];
        }
    }
    res.push([start,end]);
    return res;
};