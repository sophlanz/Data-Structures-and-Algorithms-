/**
 * @param {number[][]} slots1
 * @param {number[][]} slots2
 * @param {number} duration
 * @return {number[]}
 */
var minAvailableDuration = function(slots1, slots2, duration) {
 
   slots1.sort((a,b)=> a[0]-b[0]);
    slots2.sort((a,b)=>a[0]-b[0]);
    let p1=0,
        p2=0;
    while(p1 < slots1.length && p2<slots2.length) {
        const [s1, e1] = slots1[p1];
        const [s2,e2] = slots2[p2];
        let start = Math.max(s1,s2);
        let end = Math.min(e1,e2);
        if(end-start >= duration) return [start, start+duration];
        if(e1 < e2) p1++
        else{
            p2++
        }
    }
    return [];
};
   