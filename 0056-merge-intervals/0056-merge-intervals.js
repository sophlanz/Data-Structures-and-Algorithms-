/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b)=> a[0]-b[0]);
    let start = intervals[0][0];
    let end=intervals[0][1];
    let merged=[];
    for(let i=1;i<intervals.length;i++){
     const interval=intervals[i];
        if(interval[0]<= end){
            end = Math.max(end, interval[1]);
        }else{
            merged.push([start,end]);
            end = interval[1];
            start = interval[0];
        }
    } 
    merged.push([start,end]);
    return merged;
};