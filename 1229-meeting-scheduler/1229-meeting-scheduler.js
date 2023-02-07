/**
 * @param {number[][]} slots1
 * @param {number[][]} slots2
 * @param {number} duration
 * @return {number[]}
 */
var minAvailableDuration = function(slots1, slots2, duration) {
    slots1.sort((a,b)=> a[0]-b[0]);
    slots2.sort((a,b)=>a[0]-b[0]);
    let p1=0,p2=0;
    while(p1<slots1.length && p2<slots2.length) {
        let start = Math.max(slots1[p1][0], slots2[p2][0]);
        let end = Math.min(slots1[p1][1], slots2[p2][1]);
        if(end-start >= duration) return [start, duration+start]
        if(slots1[p1][1]<slots2[p2][1]) p1++
        else p2++
    }
    return [];
};