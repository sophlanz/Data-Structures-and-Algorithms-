/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
if(m*k >bloomDay.length) return -1;
    let l = Math.min(...bloomDay);
    let r = Math.max(...bloomDay);
    
    while(l<r){
        let mid = Math.floor((l+r)/2);
        let flowers=0;
        let boquets=0;
        for(const val of bloomDay){
            if(val>mid) flowers=0
            else {
                flowers++
            }
            if(flowers===k){
                boquets++;
                flowers=0;
            }
        }
        if(boquets >= m) r=mid
        else l=mid+1
    }
    return l
}
