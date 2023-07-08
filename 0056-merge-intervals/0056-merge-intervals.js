/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b)=> a[0]-b[0])
    let start = intervals[0][0];
    let end = intervals[0][1];
    let res=[];
    for(let i=1;i<intervals.length;i++){
        let interval = intervals[i];
        if(interval[0]<=end)end=Math.max(interval[1],end);
        else{
            res.push([start,end]);
            start=interval[0];
            end=interval[1]
        }
    }
    res.push([start,end]);
    return res
};