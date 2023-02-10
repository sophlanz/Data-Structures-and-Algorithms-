/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    if(m*k > bloomDay.length) return -1
    let l = Math.min(...bloomDay);
    let r= Math.max(...bloomDay);
    while(l<r) {
        let mid = Math.floor((l+r)/2);
        let flowers=0;
        let bouqs=0;
        for(const bloom of bloomDay) {
            if(bloom >mid) {
                flowers=0;
            }else {
                flowers++;
            }
            if(flowers >= k) {
                bouqs++;
                flowers=0;
            }
            
        }
        if(bouqs>= m) r=mid;
        else l=mid+1
    }
    return l
};