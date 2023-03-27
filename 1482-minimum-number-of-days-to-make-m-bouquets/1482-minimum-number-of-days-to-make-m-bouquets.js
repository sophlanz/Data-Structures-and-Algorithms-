/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
 if(m*k>bloomDay.length) return -1
    let l = Math.min(...bloomDay);
    let r = Math.max(...bloomDay);
    while(l< r) {
        const mid = Math.floor((l+r)/2);
        let flowers=0;
        let boqs=0;
        //loop through bloom day
        for(const bloom of bloomDay) {
            if(bloom >mid) {
                flowers=0;
            }else{
                flowers++
            }
            if(flowers >= k) {
                boqs++;
                flowers=0;
            }
        }
        if(boqs >= m) r=mid;
        else l=mid+1
    }
    return l
};